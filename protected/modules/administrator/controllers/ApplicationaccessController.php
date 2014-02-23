<?php

/**

 * @desc This class will hold functions for application access

 *      examples include appAccessList(), actionCreateappaccess(), actionCreateappaccessname(), actionAccesscheck() 

 * @author Santhiya Viswanathan santhiya.v@payoda.com

 * @company Payoda

 */
class ApplicationaccessController extends AdministratorController {

    /**
     * @desc Gives list of organisations created
     *        Renders the list page
     */
    public function appAccessList($search = '') {
        if (isset($_POST['search']))
            $_GET['AppAccessForm'] = $_POST['AppAccessForm'];

        if (isset($_GET['AppAccessForm'])) {
            $listModel = $this->appAccessSearchCriteria();
        } else {
            /* Query to list last created mapping followed by all the mapping of that corresponding organisation */
            $listModel = AppAccessForm::model()->findAllBySql(
                    'select * from `app_access` T JOIN ((select distinct id from
                    (SELECT *
                    FROM `app_access` t1  order by  t1.created_dt  desc ) t0
                    JOIN
                    (SELECT org_id, created_dt 
                    FROM `app_access`  order by created_dt desc
                    ) t2 ON  t0.org_id= t2.org_id) t3) ON t3.id = T.id'
            );
        }
        for ($i = 0; $i < count($listModel); $i++) {
            $appAccessList[$i] = $listModel[$i]->attributes;
            $appAccessList[$i]['org_name'] = $listModel[$i]->OrgMasterForm->attributes['org_name'];
            $appAccessList[$i]['app_count'] = ($listModel[$i]->attributes['app_info_ids'] != '') ? count(explode(",", $listModel[$i]->attributes['app_info_ids'])) : 0;
            $appAccessList[$i]['access_name'] = $listModel[$i]->AppAccessMasterForm->attributes['name'];
        }
        return $appAccessList;
    }

    /**
     * @desc Sets the search criteria 
     * @param $model - model on which search criteria has to be set
     * @return obj - model with search criteria set
     */
    public function appAccessSearchCriteria() {
        $org_criteria = new CDbCriteria;
        $org_criteria->compare('org_name', $_GET['AppAccessForm']['org_name'], true);
        $org_info = OrgMasterForm::model()->findAll($org_criteria);
        for ($i = 0; $i < count($org_info); $i++) {
            $orgIds[$i] = $org_info[$i]->attributes['id'];
        }
        $model = AppAccessForm::model()->findAllByAttributes(array('org_id' => $orgIds));
        return $model;
    }

    /**
     * @desc Creates the application access mapping form and saves the application access mapping details
     */
    public function actionCreateappaccess($accessId = '') {
        $model = new AppAccessForm;
        $updateModel = '';
        $showCreateForm = false;
        $selected_apps = array();

        $dropdownvalues = $this->loadAccessMapFormElements();

        if (isset($_POST['AppAccessForm'])) {
            if (isset($_POST['create'])) {
                $model->scenario = 'create';
                $model->attributes = $_POST['AppAccessForm'];
                if ($model->validate()) {
                    $model->app_info_ids = implode(",", $_POST['AppAccessForm']['app_info_ids']);
                    $model->status = 'A';
                    $model->created_by = Yii::app()->user->id;
                    $model->created_dt = new CDbExpression('NOW()');

                    if ($model->save()) {
                        Yii::app()->user->setFlash('notice', Yii::t('app', AppConstants::ACCESS_MAP_SAVED_SUCCESS));
                        $model->unsetAttributes();
                    } else {
                        Yii::app()->user->setFlash('error', Yii::t('app', ErrorConstants::ERROR_IN_ACCESS_MAP_SAVE));
                    }
                }
            } else if (isset($_POST['update'])) {
                $updateModel = $this->updateAccessMap($accessId);
                if (count($updateModel->getErrors()) == 0)
                    $this->redirect(Yii::app()->createUrl('administrator/applicationaccess/createappaccess'));
            } else if (isset($_POST['cancel'])) {
                $this->redirect(Yii::app()->createUrl('administrator/applicationaccess/createappaccess'));
            } else if (isset($_POST['search'])) {
                $model->attributes = $_POST['AppAccessForm'];
                $dataProvider = $this->appAccessList('search');
            }
        }
        if (count($model->getErrors()) > 0)
            $showCreateForm = true;
        if (!empty($accessId) && !isset($_POST['update'])) {
            $updateModel = new AppAccessForm;
            $updateModel = $updateModel::model()->findByPk($accessId);
            if ($updateModel->OrgMasterForm->attributes['status'] == AppConstants::DEACTIVE) {
                Yii::app()->user->setFlash('error', Yii::t('app', ErrorConstants::ERROR_APPACCESS_ORG_INACTIVE));
                $updateModel = '';
            } else {
                if ($updateModel->attributes['app_info_ids'] != '') {
                    $updateModel->app_info_ids = explode(",", $updateModel->attributes['app_info_ids']);
                    foreach ($updateModel->app_info_ids as $key => $appId) {
                        if ($dropdownvalues['status_info'][$appId] == AppConstants::DEACTIVE) {
                            $selected_apps[$appId] = $appId;
                        }
                    }
                }
                $updateModel->selected_apps = implode(",", $selected_apps);
                $model = '';
            }
        }

        if (!isset($_POST['search']))
            $dataProvider = $this->appAccessList();
        $listModel = new CArrayDataProvider($dataProvider, array());

        $this->render('appAccess', array('model' => $model, 'type' => AppConstants::APP_ACCESS_MAPPING,
            'dataProvider' => $dataProvider, 'listModel' => $listModel, 'updateModel' => $updateModel,
            'dropdownvalues' => $dropdownvalues, 'showCreateForm' => $showCreateForm,));
    }

    /**
     * @desc Returns all the drop down values of the application access map form
     * @return $dropdownvalues - drop down values for the application access map form.
     */
    public function loadAccessMapFormElements() {
        $dropdownvalues = array();
        $dropdownvalues['org_id'] = CHtml::listData(OrgMasterForm::model()->findAllByAttributes(array('status' => AppConstants::ACTIVE)), 'id', 'org_name');
        $dropdownvalues['access_id'] = CHtml::listData(AppAccessMasterForm::model()->findAllByAttributes(array('status' => AppConstants::ACTIVE)), 'id', 'name');
        $dropdownvalues['app_info_ids'] = CHtml::listData(AppInfoMasterForm::model()->findAll(), 'id', 'name');
        $appInfo = AppInfoMasterForm::model()->findAll();
        $appIconDir = Yii::app()->basePath . AppConstants::APPICON_UPLOAD_PATH;
        if ($appInfo) {
            foreach ($appInfo as $appInformation) {
                if ($appInformation->attributes['icon_type'] == AppConstants::$ICON_IMAGE['IMG']) {
                    if (file_exists($appIconDir . $appInformation->attributes['icon_name']))
                        $icon = CHtml::image(Yii::app()->assetManager->publish($appIconDir . $appInformation->attributes['icon_name']), "", array("style" => "width:25px;height:25px;"));
                    else
                        $icon = "Image not found";
                } else {
                    $icon = '<i class="' . $appInformation->attributes['icon_name'] . '"></i>';
                }
                $dropdownvalues['icon_info'][$appInformation->attributes['id']] = $icon;
                $dropdownvalues['status_info'][$appInformation->attributes['id']] = $appInformation->attributes['status'];
            }
        } else {
            $dropdownvalues['icon_info'] = array();
            $dropdownvalues['status_info'] = array();
        }
        return $dropdownvalues;
    }

    /**
     * @desc Updates the app access mapping form and saves the app access mapping details
     * @param $accessId - application access map Id
     * @return $model - model after save.
     */
    public function updateAccessMap($accessId) {
        $model = AppAccessForm::model()->findByPk($accessId);
        if (isset($_POST['AppAccessForm'])) {
            $model->scenario = 'update';
            $model->attributes = $_POST['AppAccessForm'];
            if ($model->validate()) {
                $model->app_info_ids = implode(",", $_POST['AppAccessForm']['app_info_ids']);
                if ($_POST['AppAccessForm']['selected_apps'] != '') {
                    $model->app_info_ids = $model->app_info_ids . "," . $_POST['AppAccessForm']['selected_apps'];
                }
                $model->status = 'A';
                $model->modified_by = Yii::app()->user->id;
                $model->modified_dt = new CDbExpression('NOW()');
                if ($model->save()) {
                    Yii::app()->user->setFlash('notice', Yii::t('app', AppConstants::ACCESS_MAP_UPDATED_SUCCESS));
                } else {
                    Yii::app()->user->setFlash('error', Yii::t('app', ErrorConstants::ERROR_IN_ACCESS_MAP_UPDATE));
                }
            }
        }
        return $model;
    }

    /**
     * @desc Checks whether application access is already created for the given org_id and access_id
     * @return array - status : success/failure, message : status message
     */
    public function actionAccesscheck() {
        $isExist = AppAccessForm::model()->findByAttributes(array('access_id' => $_POST['AppAccessForm']['access_id'],
            'org_id' => $_POST['AppAccessForm']['org_id']));
        if ($isExist)
            $result = array('status' => 'failure', 'message' => ErrorConstants::ACCESS_CREATED);
        else
            $result = array('status' => 'success');
        echo json_encode($result);
    }

    /**
     * @desc Gives list of organisations created
     *        Renders the list page
     */
    public function roleList($search = '') {
        $listModel = new AppAccessMasterForm('search');
        $listModel = $this->rolesearchCriteria($listModel);
        return $listModel;
    }

    /**
     * @desc Sets the search criteria 
     * @param $model - model on which search criteria has to be set
     * @return obj - model with search criteria set
     */
    public function rolesearchCriteria($model) {
        $model->unsetAttributes();  // clear any default values
        if (isset($_POST['search']))
            $_GET['AppAccessMasterForm'] = $_POST['AppAccessMasterForm'];

        if (isset($_GET['AppAccessMasterForm']))
            $model->attributes = $_GET['AppAccessMasterForm'];
        return $model;
    }

    /**
     * @desc Creates the application access name form and saves the application access name details
     */
    public function actionCreateappaccessname($accessnameId = '') {
        $updateModel = '';
        $showCreateForm = false;
        $model = new AppAccessMasterForm;
        if (isset($_POST['AppAccessMasterForm'])) {
            if (isset($_POST['create'])) {
                $model->attributes = $_POST['AppAccessMasterForm'];
                if ($model->validate()) {
                    $model->created_by = Yii::app()->user->id;
                    $model->created_dt = new CDbExpression('NOW()');
                    if ($model->save()) {
                        Yii::app()->user->setFlash('notice', Yii::t('app', AppConstants::APP_ACCESS_SAVED_SUCCESS));
                        $model->unsetAttributes();
                    } else {
                        Yii::app()->user->setFlash('error', Yii::t('app', ErrorConstants::ERROR_IN_APP_ACCESS_SAVE));
                    }
                }
            } else if (isset($_POST['update'])) {
                $updateModel = $this->updateAccessName($accessnameId);
                if (count($updateModel->getErrors()) == 0)
                    $this->redirect(Yii::app()->createUrl('administrator/applicationaccess/createappaccessname'));
            } else if (isset($_POST['cancel'])) {
                $this->redirect(Yii::app()->createUrl('administrator/applicationaccess/createappaccessname'));
            } else if (isset($_POST['search'])) {
                $model->attributes = $_POST['AppAccessMasterForm'];
                $listModel = $this->roleList('search');
            }
        }
        if (count($model->getErrors()) > 0)
            $showCreateForm = true;
        if (!empty($accessnameId) && !isset($_POST['update'])) {
            $updateModel = new AppAccessMasterForm;
            $updateModel = $updateModel::model()->findByPk($accessnameId);
            $model = '';
        }
        if (!isset($_POST['search']))
            $listModel = $this->roleList();
        $this->render('appAccess', array('model' => $model, 'type' => AppConstants::APP_ACCESS_NAME,
            'listModel' => $listModel, 'updateModel' => $updateModel,
            'showCreateForm' => $showCreateForm));
    }

    /**
     * @desc Updates the app access name form and saves the app access name details
     * @param $accessnameId - application access name Id
     * @return $model - model after save.
     */
    public function updateAccessName($accessnameId) {
        $model = AppAccessMasterForm::model()->findByPk($accessnameId);
        $canStatusChange = true;
        $statusChanged = ($model->attributes['status'] == $_POST['AppAccessMasterForm']['status']) ? false : true;
        if (isset($_POST['AppAccessMasterForm'])) {
            $model->attributes = $_POST['AppAccessMasterForm'];
            if ($model->validate()) {
                $model->modified_by = Yii::app()->user->id;
                $model->modified_dt = new CDbExpression('NOW()');
                if ($statusChanged) {
                    $canStatusChange = AdminCommonFunction::canDeactivateCheck('acc_name', $accessnameId);
                }
                if (!$canStatusChange)
                    $model->status = AppConstants::ACTIVE;
                $saveStatus = $model->save();
                if (!$canStatusChange) {
                    Yii::app()->user->setFlash('error', Yii::t('app', ErrorConstants::CANNOT_DEACTIVATE_ACC_NAME));
                } else if ($saveStatus) {
                    Yii::app()->user->setFlash('notice', Yii::t('app', AppConstants::APP_ACCESS_UPDATED_SUCCESS));
                } else {
                    Yii::app()->user->setFlash('error', Yii::t('app', ErrorConstants::ERROR_IN_APP_ACCESS_UPDATE));
                }
            }
        }
        return $model;
    }

    /**
     * @desc Changes the status of the app access name
     * @param $accessnameId - Unique Id of the app access name
     * @return String - Status message
     */
    public function actionNamestatuschange($accessnameId) {
        if ($canChangeStatus = AdminCommonFunction::canDeactivateCheck('acc_name', $accessnameId)) {
            if ($status = AppAccessMasterForm::statusChange($accessnameId)) {
                if ($status == AppConstants::ACTIVE)
                    $response['message'] = AppConstants::APP_ACCESS_DEACTIVATED_SUCCESS;
                else
                    $response['message'] = AppConstants::APP_ACCESS_ACTIVATED_SUCCESS;
                $response['status'] = 'success';
            }else {
                $response['message'] = ErrorConstants::ERROR_IN_SAVING;
                $response['status'] = 'failure';
            }
        } else {
            $response['message'] = ErrorConstants::CANNOT_DEACTIVATE_ACC_NAME;
            $response['status'] = 'failure';
        }
        echo json_encode($response);
    }

    /**
     * @desc Returns all the application names for that organization
     * 
     */
    public function actionPopupapplist() {
        $appname = '';
        $appids = $_POST['appids'];
        if ($appids != '' && $appids != 'undefined') {
            $criteria = new CDbCriteria;
            $criteria->condition = 'id in (' . $appids . ')';
            $appList = AppInfoMasterForm::model()->findAll($criteria, 'name', 'icon_name', 'icon_type');
            $appIconDir = Yii::app()->basePath . AppConstants::APPICON_UPLOAD_PATH;
            $appname = "<table class='table table-bordered table-striped'>
            <tr><th>Icon</th><th>Application Name</th><th>Status</th></tr>
            ";

            for ($i = 0; $i < count($appList); $i++) {
                $icon_name = $appList[$i]['icon_name'];
                $icon_type = $appList[$i]['icon_type'];
                $status = $appList[$i]['status'];
                if ($status == "A") {
                    $status_img = Yii::app()->request->baseUrl . '/images/tick.png';
                    $class = "text-center";
                } else {
                    $status_img = Yii::app()->request->baseUrl . '/images/cross.png';
                    $class = "text-center";
                }
                if ($icon_type == AppConstants::$ICON_IMAGE['IMG']) {
                    if (file_exists($appIconDir . $icon_name))
                        $icon = CHtml::image(Yii::app()->assetManager->publish($appIconDir . $icon_name), "", array("style" => "width:25px;height:25px;"));
                    else
                        $icon = "Image not found";
                } else {
                    $icon = '<i class="' . $icon_name . '"></i>';
                }
                $appname.="<tr class='popupAppList'><td>" . $icon . "</td><td>" . $appList[$i]['name'] . "</td><td class=$class><img src=$status_img></td></tr>";
            }
            $appname.="</table>";
            $response['status'] = 'success';
            $response['appname'] = $appname;
        } else {
            $response['status'] = 'success';
            $response['appname'] = AppConstants::NO_APP_MAPPED;
        }
        echo json_encode($response);
    }

}
