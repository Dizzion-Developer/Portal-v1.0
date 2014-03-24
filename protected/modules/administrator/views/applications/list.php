
<?php
$appIconDir = Yii::app()->basePath . AppConstants::APPICON_UPLOAD_PATH;
$this->widget('EBootstrapGridView', array(
    'id' => 'app-grid',
    'dataProvider' => $model->search(),
    'summaryText' => '',
    'columns' => array(
        array(
            'name' => 'Name',
            'header' => Yii::t('app', 'Name'),
            'value' => '$data->name',
            'htmlOptions' => array('width' => '20%'),
        ),
        array(
            'name' => 'URL',
            'header' => Yii::t('app', 'URL'),
            'value' => '$data->url',
            'htmlOptions' => array('width' => '30%'),
        ),
        array(
            'name' => 'Status',
            'header' => Yii::t('app', 'Status'),
            'value' => '($data->status==AppConstants::ACTIVE)?"Active":"Deactive"',
            'htmlOptions' => array('width' => '10%'),
        ),
        array(
            'name' => 'Icon',
            'type' => 'html',
            'header' => Yii::t('app', 'Icon'),
            'value' => 'ApplicationsController::iconDisplay($data->icon_name,$data->icon_type)',
            'htmlOptions' => array('width' => '10%'),
        ),
        array(
            'class' => 'EBootstrapButtonColumn',
            'template' => '{edit}',
            'header' => Yii::t('app', 'Edit'),
            'buttons' => array('edit' => array(
                    'label' => '',
                    'imageUrl' => Yii::app()->request->baseUrl . '/images/edit.png',
                    'url' => 'Yii::app()->createUrl("administrator/applications/update", array("appId"=>$data->id))',
                    'htmloptions' => array('style' => 'padding-left:10px;'),
                    'options' => array('title' => 'Edit'),
                ),
            ),
            'htmlOptions' => array('class' => 'editCls'),
        ),
        array(
            'class' => 'EBootstrapButtonColumn',
            'template' => '{deactivate}{activate}',
            'header' => Yii::t('app', 'Deactivate'),
            'buttons' => array('deactivate' => array(
                    'label' => '',
                    'imageUrl' => Yii::app()->request->baseUrl . '/images/deactivate.png',
                    'url' => 'Yii::app()->createUrl("administrator/applications/deactivate", array("appId"=>$data->id))',
                    'htmloptions' => array('style' => 'padding-left:10px;'),
                    'options' => array('title' => 'Deactivate'),
                    'visible' => '($data->status==AppConstants::ACTIVE)?true:false'
                ),
                'activate' => array(
                    'label' => '',
                    'imageUrl' => Yii::app()->request->baseUrl . '/images/activeicon1.png',
                    'url' => 'Yii::app()->createUrl("administrator/applications/deactivate", array("appId"=>$data->id))',
                    'htmloptions' => array('style' => 'padding-left:10px;'),
                    'options' => array('title' => 'Activate'),
                    'visible' => '($data->status==AppConstants::DEACTIVE)?true:false'
                ),
            ),
            'htmlOptions' => array('class' => 'deactivateCls'),
        ),
    ),
    'pager' => array(
        'header' => '',
        'firstPageLabel' => '&lt;',
        'prevPageLabel' => '&lt;&lt;',
        'nextPageLabel' => '&gt;&gt;',
        'lastPageLabel' => '&gt;',
    ),
    'emptyText' => Yii::t('app', 'No applications found'),
    'htmlOptions' => array('class' => 'table-striped table-condensed cover-div cover-div')
));
?>
