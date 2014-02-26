<?php

/**

 * @desc This class will hold functions for category management

 *      examples include actionCreate(), actionList(), actionUpdate(), actionDeactivate() 

 * @author Santhiya Viswanathan santhiya.v@payoda.com

 * @company Payoda

 */
class CategoryController extends AdministratorController {

    /**
     * @desc Creates the category form and saves the category details
     */
    public function actionCreate($categoryId = '') {
        $updateModel = '';
        $showCreateForm = false;
        $model = new CategoryMasterForm;
        if (isset($_POST['CategoryMasterForm'])) {
            if (isset($_POST['add'])) {
                $model->attributes = $_POST['CategoryMasterForm'];
                if ($model->validate()) {
                    $model->status = AppConstants::ACTIVE;
                    $model->created_by = Yii::app()->user->id;
                    $model->created_dt = new CDbExpression('NOW()');
                    if ($model->save()) {
                        $category_id = $model->getPrimaryKey();
                        Yii::app()->user->setFlash('notice', Yii::t('app', AppConstants::CATEGORY_SAVED_SUCCESS));
                        $model->unsetAttributes();
                        $this->redirect(Yii::app()->createUrl('administrator/category/create'));
                    } else {
                        Yii::app()->user->setFlash('error', Yii::t('app', ErrorConstants::ERROR_IN_CATEGORY_SAVE));
                    }
                }
            } else if (isset($_POST['update'])) {
                $updateModel = $this->update($categoryId);
                if (count($updateModel->getErrors()) == 0) {
                    if (isset($_GET) && count($_GET) > 0)
                        $this->redirect(Yii::app()->createUrl('administrator/category/create?iDisplayStart=' . $_GET['iDisplayStart'] . '&iDisplayLength=' . $_GET['iDisplayLength'] . '&ajax=category'));
                    else
                        $this->redirect(Yii::app()->createUrl('administrator/category/create'));
                }
            } else if (isset($_POST['cancel'])) {
                $this->redirect(Yii::app()->createUrl('administrator/category/create'));
            }
        }
        if (count($model->getErrors()) > 0)
            $showCreateForm = true;
        if (!empty($categoryId) && !isset($_POST['update'])) {
            $updateModel = new CategoryMasterForm;
            $updateModel = $updateModel::model()->findByPk($categoryId);
            $model = '';
        }

        $widget = $this->dataTable();

        $this->render('list', array('widget' => $widget, 'model' => $model, 'updateModel' => $updateModel,
            'showCreateForm' => $showCreateForm));
    }

    /**
     * @desc Updates the category form and saves the category details
     * @param $categoryId - Category Id
     * @return $model - model after save.
     */
    public function update($categoryId) {
        $model = CategoryMasterForm::model()->findByPk($categoryId);
        if (isset($_POST['CategoryMasterForm'])) {
            $model->attributes = $_POST['CategoryMasterForm'];
            if ($model->validate()) {
                $model->modified_by = Yii::app()->user->id;
                $model->modified_dt = new CDbExpression('NOW()');
                if ($model->save()) {
                    Yii::app()->user->setFlash('notice', Yii::t('app', AppConstants::CATEGORY_UPDATED_SUCCESS));
                } else {
                    Yii::app()->user->setFlash('error', Yii::t('app', ErrorConstants::ERROR_IN_CATEGORY_UPDATE));
                }
            }
        }
        return $model;
    }

    /**
     * @desc Returns the columns that are used for table display
     * @return array - columns to display
     */
    protected function columns() {
        return array(
            array(
                'name' => 'id',
                'type' => 'text',
                'value' => '$data->id',
            ),
            array(
                'name' => 'category_name',
                'type' => 'text',
                'value' => 'CommonFunction::tooltip($data->category_name)',
            ),
            /*
              array(
              'name' => 'status',
              'type' => 'text',
              'value' => '($data->status==AppConstants::ACTIVE)?"Active":"Deactive"',
              ), */
            array(
                'class' => 'EButtonColumn',
                'htmlOptions' => array('width' => '60', 'align' => 'middle'),
                'template' => '{edit} {Delete}',
                'header' => Yii::t('EDataTables.edt', 'Actions'),
                'buttons' => array(
                    'edit' => array(
                        'options' => array('class' => 'editCls text-center'),
                        'imageUrl' => Yii::app()->request->baseUrl . '/images/edit.png',
                        'url' => 'Yii::app()->createUrl("administrator/category/create", array("categoryId"=>$data->id))',
                        'click' => 'function(){
                            var url = $(this).attr("href");
                            var categoryId = getURLParameter(url, "categoryId");
                            var newUrl = url+"?iDisplayStart="+$(\'#CategoryMasterForm_displayStart\').val()+"&iDisplayLength="+$(\'#CategoryMasterForm_displayLength\').val()+"&ajax=category";
                            $(this).attr("href",newUrl);
                            return true;
                            }'
                    ),
                    'Delete' => array(
                        'options' => array('class' => 'deactivateCls hidden-phone'),
                        'imageUrl' => Yii::app()->request->baseUrl . '/images/deactivate.png',
                        'url' => 'Yii::app()->createUrl("administrator/category/delete", array("categoryId"=>$data->id))',
                        'click' => 'function(){
                            if(confirm("Are you sure to delete this category?")){
                                  var url = $(this).attr("href");
                                  var categoryId = getURLParameter(url, "categoryId");
                                  deleteCategory(categoryId);  
                            }
                            return false;
                            }',
                        'callback' => 'js:function(e){e.data.that.eDataTables("refresh"); return false;}',
                    ),
                ),
            ),
        );
    }

    /**
     * @desc function to return category list based on criteria 
     * @return array - information to display.
     */
    public function dataTable() {
        Yii::import('ext.EDataTables.*');
        $model = new CategoryMasterForm('search');

        $columns = $this->columns();
        $widget = $this->createWidget('ext.EDataTables.EDataTables', array(
            'id' => 'category',
            'dataProvider' => $model->search($columns),
            'ajaxUrl' => $this->createUrl('/administrator/category/create'),
            'columns' => $columns,
        ));

        if (Yii::app()->getRequest()->getIsAjaxRequest()) {
            echo json_encode($widget->getFormattedData(intval($_GET['sEcho'])));
            Yii::app()->end();
            return;
        }

        return $widget;
    }

    /**
     * @desc Renders the list of category after each ajax call like sorting, search and filter.
     */
    public function actionList() {
        $widget = $this->dataTable();
        $this->render('list', array('widget' => $widget));
    }

    /**
     * @desc Changes the status of the category
     * @param $categoryId - Unique Id of the category
     * @return String - Status message
     */
    public function actionStatuschange($categoryId) {
        if ($status = CategoryMasterForm::statusChange($categoryId)) {
            if ($status == AppConstants::ACTIVE)
                $response['message'] = AppConstants::CATEGORY_DEACTIVATED_SUCCESS;
            else
                $response['message'] = AppConstants::CATEGORY_ACTIVATED_SUCCESS;
            $response['status'] = 'success';
        }else {
            $response['message'] = ErrorConstants::ERROR_IN_SAVING;
            $response['status'] = 'failure';
        }
        echo json_encode($response);
    }

    /**
     * @desc Deletes the category
     * @param $categoryId - Unique Id of the category
     * @return String - Status message
     */
    public function actionDelete($categoryId) {
        $app_mapped = AppInfoMasterForm::model()->findByAttributes(array('category_id' => $categoryId));
        if ($app_mapped) {
            $response['message'] = ErrorConstants::CANNOT_DELETE_CATEGORY;
            $response['status'] = 'failure';
        } else {
            if (CategoryMasterForm::deleteCategory($categoryId)) {
                $response['message'] = AppConstants::CATEGORY_DELETED_SUCCESS;
                $response['status'] = 'success';
            } else {
                $response['message'] = ErrorConstants::ERROR_IN_DELTETION;
                $response['status'] = 'failure';
            }
        }
        echo json_encode($response);
    }

}