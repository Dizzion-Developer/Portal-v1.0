<?php

/**

 * @desc This class will hold functions for application management

 *      examples include actionCreate(), actionList(), actionUpdate(), actionDeactivate() 

 * @author Santhiya Viswanathan santhiya.v@payoda.com

 * @company Payoda

 */
class ApplicationsController extends AdministratorController {

    /**
     * @desc Displays dashboard page
     */
    public function actionDashboard() {
        $criteria = new CDbCriteria;
        $criteria->condition = 'status = :status';
        $criteria->params = array(':status' => AppConstants::ACTIVE);
        $data['appcount'] = AppInfoMasterForm::model()->count($criteria);
        $data['orgcount'] = OrgMasterForm::model()->count($criteria);
        $data['rolecount'] = AppAccessMasterForm::model()->count($criteria);
        $data['usercount'] = UserMasterForm::model()->count($criteria);
        $this->render('dashboard', array('data' => $data));
    }

    /**
     * @desc Gives list of applications created
     *        Renders the list page
     */
    public function applist($search = '') {
        $model = new AppInfoMasterForm('search');
        $model = $this->searchCriteria($model);
        return $model;
    }

    /**
     * @desc Sets the search criteria 
     * @param $model - model on which search criteria has to be set
     * @return obj - model with search criteria set
     */
    public function searchCriteria($model) {
        $model->unsetAttributes();  // clear any default values
        if (isset($_POST['search']))
            $_GET['AppInfoMasterForm'] = $_POST['AppInfoMasterForm'];

        if (isset($_GET['AppInfoMasterForm']))
            $model->attributes = $_GET['AppInfoMasterForm'];
        return $model;
    }

    /**
     * @desc Creates the application form and saves the app details
     */
    public function actionCreate($appId = '') {
        $model = new AppInfoMasterForm;
        $updateModel = '';
        $showCreateForm = false;
        $dropdownvalues['category_id'] = CategoryMasterForm::categoryList();
        if (isset($_POST['AppInfoMasterForm'])) {
            if (isset($_POST['create'])) {
                $model->attributes = $_POST['AppInfoMasterForm'];
                if ($model->validate()) {
                    if ($_POST['AppInfoMasterForm']['create_icon_type'] == AppConstants::$ICON_IMAGE['IMG']) {
                        $fileName = $this->fileUpload('AppInfoMasterForm[upload_image]');
                        $model->icon_name = $fileName;
                    } else if ($_POST['AppInfoMasterForm']['create_icon_type'] == AppConstants::$ICON_IMAGE['ICON']) {
                        $model->icon_name = $_POST['AppInfoMasterForm']['create_modal_icon_name'];
                    } else {
                        $model->icon_type = 'ICON';
                        $model->icon_name = 'halflingicon-list-alt';
                    }
                    $model->url = trim($_POST['AppInfoMasterForm']['url']);
                    $model->iframe = $this->loadingWindow($_POST['AppInfoMasterForm']['url']);
                    $model->icon_type = $_POST['AppInfoMasterForm']['create_icon_type'];
                    if ($_POST['AppInfoMasterForm']['icon_color'] == '')
                        $model->icon_color = AppConstants::DEFAULT_APP_TILE_COLOR;
                    $model->created_by = Yii::app()->user->id;
                    $model->created_dt = new CDbExpression('NOW()');
                    if ($model->save()) {
                        //Add the newly created app to default app access mapping 
                        AppAccessForm::addAppToDefaultMapping($model->getPrimaryKey());
                        Yii::app()->user->setFlash('notice', Yii::t('app', AppConstants::APP_SAVED_SUCCESS));
                        $model->unsetAttributes();
                    } else {
                        Yii::app()->user->setFlash('error', Yii::t('app', ErrorConstants::ERROR_IN_APP_SAVE));
                    }
                }
            } else if (isset($_POST['update'])) {
                $updateModel = $this->update($appId);
                if (count($updateModel->getErrors()) == 0)
                    $this->redirect(Yii::app()->createUrl('administrator/applications/create'));
            } else if (isset($_POST['cancel'])) {
                $this->redirect(Yii::app()->createUrl('administrator/applications/create'));
            } else if (isset($_POST['search'])) {
                $model->attributes = $_POST['AppInfoMasterForm'];
                $listModel = $this->applist('search');
            }
        }
        if (count($model->getErrors()) > 0)
            $showCreateForm = true;
        if (!empty($appId) && !isset($_POST['update'])) {
            $updateModel = new AppInfoMasterForm;
            $updateModel = $updateModel::model()->findByPk($appId);
        }
        if (!isset($_POST['search']))
            $listModel = $this->applist();
        $this->render('create', array('model' => $model, 'listModel' => $listModel, 'updateModel' => $updateModel,
            'showCreateForm' => $showCreateForm, 'dropdownvalues' => $dropdownvalues));
    }

    /**
     * @desc Based on the given url, function returns the how landing of page happens
     * @param $url - url of the page 
     * @return String - window/iframe
     */
    protected function loadingWindow($url) {
        $window = 'iframe';
        $xframe_exists = false;
        $header = array();

        //$valid_ip = gethostbyname($url);
        //if (!preg_match('/^\d+/', $valid_ip) == 0) {
        try {
            $header = get_headers($url, 1);
            // Checking if meta tag carries X frame information
            preg_match_all("/<meta[^>]+(http\-equiv|name)=\"([^\"]*)\"[^>]" . "+content=\"([^\"]*)\"[^>]*>/i", file_get_contents($url), $out, PREG_PATTERN_ORDER);

            foreach ($out as $metaInfo) {
                if (in_array('X-Frame-Options', $metaInfo))
                    $xframe_exists = true;
            }
            //}
            //Deciding the landing options - Either new tab or iframe
            if (array_key_exists("X-Frame-Options", $header) || array_key_exists("X-FRAME-OPTIONS", $header) || $xframe_exists == true) {
                $window = 'N';
            } else {
                $window = 'Y';
            }
        } catch (Exception $e) {
            $window = 'Y';
        }
        return $window;
    }

    /**
     * @desc Gives the html icon display based on type and existence of the file
     * @param $icon_name - name of the icon that should be displayed
     *         $icon_type - type of icon - icon/image 
     * @return string - html for icon
     */
    public function iconDisplay($icon_name, $icon_type) {
        $appIconDir = Yii::app()->basePath . AppConstants::APPICON_UPLOAD_PATH;
        if ($icon_type == AppConstants::$ICON_IMAGE['IMG']) {
            if (file_exists($appIconDir . $icon_name))
                $icon = CHtml::image(Yii::app()->assetManager->publish($appIconDir . $icon_name), "", array("style" => "width:25px;height:25px;"));
            else
                $icon = "Image not found";
        } else {
            $icon = '<i class="' . $icon_name . '"></i>';
        }
        return $icon;
    }

    /**
     * @desc Updates the application form and saves the app details
     * @param $appId - application Id
     * @return $model - model after save.
     */
    public function update($appId) {
        $model = AppInfoMasterForm::model()->findByPk($appId);
        if (isset($_POST['AppInfoMasterForm'])) {
            $model->attributes = $_POST['AppInfoMasterForm'];
            if ($model->validate()) {
                if (!empty($_POST['AppInfoMasterForm']['update_icon_type'])) {
                    if ($_POST['AppInfoMasterForm']['update_icon_type'] == AppConstants::$ICON_IMAGE['IMG']) {
                        $fileName = $this->fileUpload('AppInfoMasterForm[upload_image]');
                        $model->icon_name = $fileName;
                    } else if ($_POST['AppInfoMasterForm']['update_icon_type'] == AppConstants::$ICON_IMAGE['ICON']) {
                        $model->icon_name = $_POST['AppInfoMasterForm']['update_modal_icon_name'];
                    }
                    $model->icon_type = $_POST['AppInfoMasterForm']['update_icon_type'];
                }
                $model->url = trim($_POST['AppInfoMasterForm']['url']);
                if ($_POST['AppInfoMasterForm']['icon_color'] == '')
                    $model->icon_color = AppConstants::DEFAULT_APP_TILE_COLOR;
                $model->iframe = $this->loadingWindow($_POST['AppInfoMasterForm']['url']);
                $model->modified_by = Yii::app()->user->id;
                $model->modified_dt = new CDbExpression('NOW()');

                if ($model->save()) {
                    Yii::app()->user->setFlash('notice', Yii::t('app', AppConstants::APP_UPDATED_SUCCESS));
                } else {
                    Yii::app()->user->setFlash('error', Yii::t('app', ErrorConstants::ERROR_IN_APP_UPDATE));
                }
            }
        }
        return $model;
    }

    /**
     * @desc Uploads a file in a path 
     * @param $fieldName - File upload field name
     * @return String - File name
     */
    public function fileUpload($fieldName) {
        $file = CUploadedFile::getInstanceByName($fieldName);
        CommonFunction::createDirectory(Yii::app()->basePath . AppConstants::APPICON_UPLOAD_PATH);
        $fileName = CommonFunction::uniqueFileName($file->getName(), '', Yii::app()->basePath . AppConstants::APPICON_UPLOAD_PATH);
        $file->saveAs(Yii::app()->basePath . AppConstants::APPICON_UPLOAD_PATH . $fileName);
        return $fileName;
    }

    /**
     * @desc Changes the status of the application
     * @param $appId - Unique Id of the application
     * @return String - Status message
     */
    public function actionStatuschange($appId) {
        if ($status = AppInfoMasterForm::statusChange($appId)) {
            if ($status == AppConstants::ACTIVE)
                $response['message'] = AppConstants::APP_DEACTIVATED_SUCCESS;
            else
                $response['message'] = AppConstants::APP_ACTIVATED_SUCCESS;
            $response['status'] = 'success';
        }else {
            $response['message'] = ErrorConstants::ERROR_IN_SAVING;
            $response['status'] = 'failure';
        }
        echo json_encode($response);
    }

    public function actionDelete($appId) {
        $transaction = Yii::app()->db->beginTransaction();
        if (AppAccessForm::deleteAppApplication($appId)) {
            if (AppInfoMasterForm::deleteApp($appId)) {
                $transaction->commit();
                $response['message'] = AppConstants::APP_DELETED_SUCCESS;
                $response['status'] = 'success';
            } else {
                $transaction->rollback();
                $response['message'] = ErrorConstants::APP_DELETED_FAILURE;
                $response['status'] = 'failure';
            }
        } else {
            $transaction->rollback();
            $response['message'] = ErrorConstants::ERROR_IN_DELETION;
            $response['status'] = 'failure';
        }
        echo json_encode($response);
    }

}
