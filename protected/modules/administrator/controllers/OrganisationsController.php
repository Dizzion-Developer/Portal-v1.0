<?php

/**

 * @desc This class will hold functions for organisation management

 *      examples include actionCreate(), actionList(), actionUpdate(), actionDeactivate() 

 * @author Santhiya Viswanathan santhiya.v@payoda.com

 * @company Payoda

 */
class OrganisationsController extends AdministratorController {
    /*
     * Administrator dashboard
     */

    public function actionDashboard() {
        $this->render('dashboard');
    }

    /**
     * @desc Gives list of organisations created
     *        Renders the list page
     */
    public function orgList($search = '') {
        $listModel = new OrgMasterForm('search');
        $listModel = $this->searchCriteria($listModel);
        return $listModel;
    }

    /**
     * @desc Sets the search criteria 
     * @param $model - model on which search criteria has to be set
     * @return obj - model with search criteria set
     */
    public function searchCriteria($model) {
        $model->unsetAttributes();  // clear any default values
        if (isset($_POST['search']))
            $_GET['OrgMasterForm'] = $_POST['OrgMasterForm'];

        if (isset($_GET['OrgMasterForm']))
            $model->attributes = $_GET['OrgMasterForm'];
        return $model;
    }

    /**
     * @desc Creates the organisation form and saves the app details
     */
    public function actionCreate($orgId = '') {
        $updateModel = '';
        $showCreateForm = false;
        $model = new OrgMasterForm;
        if (isset($_POST['OrgMasterForm'])) {
            if (isset($_POST['create'])) {
                $model->attributes = $_POST['OrgMasterForm'];
                if ($model->validate()) {
                    $model->created_by = Yii::app()->user->id;
                    $model->created_dt = new CDbExpression('NOW()');
                    $fileName = $this->fileUpload('OrgMasterForm[logo]');
                    $model->logo = $fileName;
                    if ($model->save()) {
                        $org_id = $model->getPrimaryKey();
                        $this->defaultRoleMapping($org_id);
                        Yii::app()->user->setFlash('notice', Yii::t('app', AppConstants::ORG_SAVED_SUCCESS));
                        $model->unsetAttributes();
                    } else {
                        Yii::app()->user->setFlash('error', Yii::t('app', ErrorConstants::ERROR_IN_ORG_SAVE));
                    }
                }
            } else if (isset($_POST['update'])) {
                $updateModel = $this->update($orgId);
                if (count($updateModel->getErrors()) == 0)
                    $this->redirect(Yii::app()->createUrl('administrator/organisations/create'));
            } else if (isset($_POST['cancel'])) {
                $this->redirect(Yii::app()->createUrl('administrator/organisations/create'));
            } else if (isset($_POST['search'])) {
                $model->attributes = $_POST['OrgMasterForm'];
                $listModel = $this->orgList('search');
            }
        }
        if (count($model->getErrors()) > 0)
            $showCreateForm = true;
        if (!empty($orgId) && !isset($_POST['update'])) {
            $updateModel = new OrgMasterForm;
            $updateModel = $updateModel::model()->findByPk($orgId);
            $model = '';
        }
        if (!isset($_POST['search']))
            $listModel = $this->orgList();
        $this->render('list', array('model' => $model, 'listModel' => $listModel, 'updateModel' => $updateModel,
            'showCreateForm' => $showCreateForm));
    }

    /**
     * @desc Updates the organisation form and saves the org details
     * @param $orgId - Organisation Id
     * @return $model - model after save.
     */
    public function update($orgId) {
        $model = OrgMasterForm::model()->findByPk($orgId);
        $old_logo_name = $model->attributes['logo'];
        if (isset($_POST['OrgMasterForm'])) {
            $model->attributes = $_POST['OrgMasterForm'];
            if ($model->validate()) {
                $fileName = $this->fileUpload('OrgMasterForm[logo]');
                $model->logo = ($fileName != '') ? $fileName : $old_logo_name;
                $model->modified_by = Yii::app()->user->id;
                $model->modified_dt = new CDbExpression('NOW()');
                if ($model->save()) {
                    Yii::app()->user->setFlash('notice', Yii::t('app', AppConstants::ORG_UPDATED_SUCCESS));
                } else {
                    Yii::app()->user->setFlash('error', Yii::t('app', ErrorConstants::ERROR_IN_ORG_UPDATE));
                }
            }
        }
        return $model;
    }

    public function defaultRoleMapping($org_id) {
        $app_access_mapping = new AppAccessForm;
        $app_access_mapping->scenario = 'add_org';
        $app_access_mapping->access_id = AppConstants::DEFAULT_ROLE_ID;
        $app_access_mapping->org_id = $org_id;
        $app_access_mapping->status = AppConstants::ACTIVE;
        $app_access_mapping->created_by = Yii::app()->user->id;
        $app_access_mapping->created_dt = new CDbExpression('NOW()');
        return $app_access_mapping->save();
    }

    /**
     * @desc Changes the status of the organisation
     * @param $orgId - Unique Id of the organisation
     * @return String - Status message
     */
    public function actionStatuschange($orgId) {
        if ($status = OrgMasterForm::statusChange($orgId)) {
            if ($status == AppConstants::ACTIVE)
                $response['message'] = AppConstants::ORG_DEACTIVATED_SUCCESS;
            else
                $response['message'] = AppConstants::ORG_ACTIVATED_SUCCESS;
            $response['status'] = 'success';
        }else {
            $response['message'] = ErrorConstants::ERROR_IN_SAVING;
            $response['status'] = 'failure';
        }
        echo json_encode($response);
    }

    /**
     * @desc Uploads a file in a path 
     * @param $fieldName - File upload field name
     * @return String - File name
     */
    public function fileUpload($fieldName) {
        $fileName = '';
        $file = CUploadedFile::getInstanceByName($fieldName);
        if ($file) {
            CommonFunction::createDirectory(Yii::app()->basePath . AppConstants::LOGO_UPLOAD_PATH);
            $fileName = CommonFunction::uniqueFileName($file->getName(), '', Yii::app()->basePath . AppConstants::LOGO_UPLOAD_PATH);
            $file->saveAs(Yii::app()->basePath . AppConstants::LOGO_UPLOAD_PATH . $fileName);
        }
        return $fileName;
    }

    /**
     * @desc Gives the html icon display based on type and existence of the file
     * @param $icon_name - name of the icon that should be displayed
     *         $icon_type - type of icon - icon/image 
     * @return string - html for icon
     */
    public function logoDisplay($logo_name, $icon_type, $logo_path = '') {
        $icon = '';
        $logoDir = Yii::app()->basePath . AppConstants::LOGO_UPLOAD_PATH;
        if ($logo_name && $logo_path)
            $logoDir = Yii::app()->basePath . $logo_path;
        if ($logo_name) {
            if ($icon_type == AppConstants::$ICON_IMAGE['IMG']) {
                if (file_exists($logoDir . $logo_name))
                    $icon = CHtml::image(Yii::app()->assetManager->publish($logoDir . $logo_name), "", array("style" => "width:100px;height:25px;"));
                else
                    $icon = "Image not found";
            } else {
                $icon = '<i class="' . $logo_name . '"></i>';
            }
        }
        return $icon;
    }

}

?>
