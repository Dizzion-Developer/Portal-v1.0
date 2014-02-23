<?php

/**

 * @desc This class will hold functions for user management

 *      examples include actionLoadobjectsid(), actionCreate(), actionList(), loadFormElements() 

 * @author Santhiya Viswanathan santhiya.v@payoda.com

 * @company Payoda

 */
class UsersController extends AdministratorController {

    /**
     * @desc Gives list of users created
     */
    public function userList($search = '') {
        $dataProvider = $this->searchCriteria();
        $userList = array();
        for ($i = 0; $i < count($dataProvider); $i++) {
            $userList[$i] = $dataProvider[$i]->attributes;
            $userList[$i]['org_name'] = isset($dataProvider[$i]->OrgMasterForm) ? $dataProvider[$i]->OrgMasterForm->attributes['org_name'] : '';
            $access_id = isset($dataProvider[$i]->AppAccessForm) ? $dataProvider[$i]->AppAccessForm->attributes['access_id'] : '';
            $accessInfo = AppAccessMasterForm::model()->findByPk($access_id);
            $userList[$i]['access_name'] = (!empty($accessInfo)) ? $accessInfo->attributes['name'] : '';
        }

        $listModel = new CArrayDataProvider($userList, array());
        return $listModel;
    }

    /**
     * @desc Sets the search criteria 
     * @param $model - model on which search criteria has to be set
     * @return obj - model with search criteria set
     */
    public function searchCriteria() {
        if (isset($_POST['search']))
            $_GET['UserMasterForm'] = $_POST['UserMasterForm'];

        if (isset($_GET['UserMasterForm'])) {
            $criteria = new CDbCriteria;
            $criteria->compare('first_name', $_GET['UserMasterForm']['user_name'], true,'OR');
            $criteria->compare('last_name', $_GET['UserMasterForm']['user_name'], true,'OR');

            $model = UserMasterForm::model()->findAll($criteria);
        } else {
            $model = UserMasterForm::model()->findAll(array('order' => 'created_dt DESC'));
        }
        return $model;
    }

    /**
     * @desc Creates the user form and saves the user details
     */
    public function actionCreate($userId = '') {
        $model = new UserMasterForm;
        $updateModel = '';
        $showCreateForm = false;
        if (isset($_POST['UserMasterForm'])) {
            if (isset($_POST['create'])) {
                $model->attributes = $_POST['UserMasterForm'];
                if ($model->validate()) {
                    $model->user_name = $_POST['UserMasterForm']['userName'];
                    $model->created_by = Yii::app()->user->id;
                    $model->created_dt = new CDbExpression('NOW()');
                    if ($model->save()) {
                        // Making entry in rights table
                        Rights::assign(AppConstants::$ROLES[$model->role_code], $model->getPrimaryKey());
                        Yii::app()->user->setFlash('notice', Yii::t('app', AppConstants::USER_SAVED_SUCCESS));
                        $model->unsetAttributes();
                    } else {
                        Yii::app()->user->setFlash('error', Yii::t('app', ErrorConstants::ERROR_IN_USER_SAVE));
                    }
                }
            } else if (isset($_POST['update'])) {
                $updateModel = $this->update($userId);
                if (count($updateModel->getErrors()) == 0)
                    $this->redirect(Yii::app()->createUrl('administrator/users/create'));
            } else if (isset($_POST['cancel'])) {
                $this->redirect(Yii::app()->createUrl('administrator/users/create'));
            } else if (isset($_POST['search'])) {
                $model->attributes = $_POST['UserMasterForm'];
                $listModel = $this->userList('search');
            }
        }
        if (count($model->getErrors()) > 0)
            $showCreateForm = true;
        if (!empty($userId) && !isset($_POST['update'])) {
            $ldap_userlist = Yii::app()->ldap->user()->all();
            $updateModel = new UserMasterForm;
            $updateModel = $updateModel::model()->findByPk($userId);
            if (CommonFunction::getRole() == AppConstants::$ROLES['GA'] && $updateModel->role_code == AppConstants::$ROLE_CODE['GA']) {
                Yii::app()->user->setFlash('error', Yii::t('app', ErrorConstants::NEED_SUPER_USER_PERMISSION));
                $updateModel = '';
                $dropdownvalues = $this->loadFormElements();
            } else if ($updateModel->OrgMasterForm->attributes['status'] == AppConstants::DEACTIVE) {
                // User edit is allowed only if user's organisation is active
                Yii::app()->user->setFlash('error', Yii::t('app', ErrorConstants::ERROR_ORG_INACTIVE));
                $updateModel = '';
                $dropdownvalues = $this->loadFormElements();
            } else {
                $updateModel->userName = $updateModel->attributes['user_name'];
                $updateModel->user_name = array_search($updateModel->attributes['user_name'], $ldap_userlist);
                $dropdownvalues = $this->loadFormElements($updateModel->org_id, 'update');
                $model = '';
            }
        } else {
            $dropdownvalues = $this->loadFormElements();
        }
        if (!isset($_POST['search']))
            $listModel = $this->userList();
        $this->render('list', array('model' => $model, 'dropdownvalues' => $dropdownvalues,
            'listModel' => $listModel, 'updateModel' => $updateModel, 'showCreateForm' => $showCreateForm));
    }

    /**
     * @desc Updates the user form and saves the user details
     * @param $userId - User Id
     * @return $model - model after save.
     */
    public function update($userId) {
        $model = UserMasterForm::model()->findByPk($userId);
        $role_before_update = $model->attributes['role_code'];
        if (isset($_POST['UserMasterForm'])) {
            $model->attributes = $_POST['UserMasterForm'];
            if ($model->validate()) {
                $model->user_name = $_POST['UserMasterForm']['userName'];
                $model->modified_by = Yii::app()->user->id;
                $model->modified_dt = new CDbExpression('NOW()');
                if ($model->save()) {
                    // Revoking the previous role and assigning new role
                    if (isset($_POST['UserMasterForm']) && $_POST['UserMasterForm'] != '') {
                        Rights::revoke(AppConstants::$ROLES[$role_before_update], $userId);
                        Rights::assign(AppConstants::$ROLES[$model->role_code], $userId);
                    }
                    Yii::app()->user->setFlash('notice', Yii::t('app', AppConstants::USER_UPDATED_SUCCESS));
                } else {
                    Yii::app()->user->setFlash('error', Yii::t('app', ErrorConstants::ERROR_IN_USER_UPDATE));
                }
            }
        }
        return $model;
    }

    /*
     * @desc retrieves the object sid for the user name
     */

    public function actionLoadobjectsid() {
        $uname = $_POST['user_name'];
        $userinfo = Yii::app()->ldap->user()->infoCollection($uname, array('*'));
        $userDet['objectsid'] = Yii::app()->ldap->utilities()->getTextSID($userinfo->objectsid);
        $userDet['firstname'] = $userinfo->givenname;
        $userDet['lastname'] = $userinfo->sn;
        $userDet['email'] = $userinfo->mail;
        echo json_encode($userDet);
    }

    /**
     * @desc Returns the drop down values of access name based on the organisation id.
     */
    public function actionGetaccessname() {
        $dropDown = array();
        $dropDown['accessNames'] = $dropDown['userTypes'] = '';

        $org_id = $_POST['UserMasterForm']['org_id'];
        $accessNames = CHtml::listData(AppAccessForm::model()->findAllByAttributes(array('org_id' => $org_id, 'status' => AppConstants::ACTIVE)), 'id', 'AppAccessMasterForm.name');
        foreach ($accessNames as $value => $name) {
            $dropDown['accessNames'].= CHtml::tag('option', array('value' => $value), CHtml::encode($name), true);
        }
        if ($org_id == 1 && CommonFunction::getRole() == AppConstants::$ROLES['SA']) {
            $userTypes = AppConstants::$ROLES_CREATE_SUPERADMIN;
        } else {
            $userTypes = AppConstants::$ROLES_CREATE_GLOBALADMIN;
        }
        foreach ($userTypes as $value => $name) {
            $dropDown['userTypes'].= CHtml::tag('option', array('value' => $value), CHtml::encode($name), true);
        }
        echo json_encode($dropDown);
    }

    /**
     * @desc Changes the status of the user
     * @param $orgId - Unique Id of the user
     * @return String - Status message
     */
    public function actionStatuschange($userId) {
        if (CommonFunction::getRole() == AppConstants::$ROLES['GA'] && UserMasterForm::getUserRole($userId) == AppConstants::$ROLE_CODE['GA']) {
            $response['message'] = ErrorConstants::NEED_SUPER_USER_PERMISSION;
            $response['status'] = 'failure';
        } else if (UserMasterForm::getOrgStatus($userId) == AppConstants::ACTIVE) {
            if ($status = UserMasterForm::statusChange($userId)) {
                if ($status == AppConstants::ACTIVE)
                    $response['message'] = AppConstants::USER_DEACTIVATED_SUCCESS;
                else
                    $response['message'] = AppConstants::USER_ACTIVATED_SUCCESS;
                $response['status'] = 'success';
            }else {
                $response['message'] = ErrorConstants::ERROR_IN_SAVING;
                $response['status'] = 'failure';
            }
        } else {
            $response['message'] = ErrorConstants::ERROR_ORG_INACTIVE;
            $response['status'] = 'failure';
        }
        echo json_encode($response);
    }

    /**
     * @desc Returns all the drop down values of the user form
     * @return $dropdownvalues - drop down values for the user form.
     */
    public function loadFormElements($org_id = '', $type = '') {
        // If org of the user is in deactivated status then $org_id is emptied so that access name drop down is left empty.
        if (!empty($org_id))
            if (OrgMasterForm::model()->findByPk($org_id)->getAttribute('status') == AppConstants::DEACTIVE)
                $org_id = '';

        $dropdownvalues = array();
        $ldap_userlist = Yii::app()->ldap->user()->all();
        $portalUsers = UserMasterForm::portalUserList();
        /* Removes portal users from ldap user list to avoid duplicate mapping */
        if (isset($type) && $type != 'update') {
            foreach ($ldap_userlist as $key => $value) {
                if (in_array($value, $portalUsers))
                    unset($ldap_userlist[$key]);
            }
        }
        $dropdownvalues['ldap_userlist'] = $ldap_userlist;
        // Role drop down based on logged in user.
        if ($org_id == 1 && CommonFunction::getRole() == AppConstants::$ROLES['SA'])
            $dropdownvalues['role_code'] = AppConstants::$ROLES_CREATE_SUPERADMIN;
        else
            $dropdownvalues['role_code'] = AppConstants::$ROLES_CREATE_GLOBALADMIN;
        /*
         *  Organisation list criteria - Those organisations that have application access mapping with active status
         *                               And organisations with active status.
         */

        $dropdownvalues['org_id'] = CHtml::listData(AppAccessForm::model()->with(
                                        array('OrgMasterForm' =>
                                            array('condition' => 'OrgMasterForm.status=\'' . AppConstants::ACTIVE . '\'')))
                                ->findAllByAttributes(array('status' => AppConstants::ACTIVE)), 'org_id', 'OrgMasterForm.org_name');
        if (!empty($org_id)) {
            $dropdownvalues['app_access_map_id'] = CHtml::listData(AppAccessForm::model()->findAllByAttributes(array('org_id' => $org_id, 'status' => AppConstants::ACTIVE)), 'id', 'AppAccessMasterForm.name');
        }
        return $dropdownvalues;
    }

}

?>