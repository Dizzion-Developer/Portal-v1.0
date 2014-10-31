<style type="text/css">
    .uploadIcons{display: none}    
    #change_default_icon{cursor: pointer}
</style>
<script type="text/javascript">
    //Sets icon type
    $(document).on("click", "#AppInfoMasterForm_upload_image", function() {
        var type = ($('#create-form').css('display')) == 'block' ? 'create' : 'update';
        $('#AppInfoMasterForm_' + type + '_icon_type').val('<?php echo AppConstants::$ICON_IMAGE['IMG']; ?>');
    });
    $(document).on("click", "#change_default_icon", function() {
        $('.uploadIcons').toggle("slow");
    });
    // function to change status of the application
    function statusChange(appId) {
        $.ajax({
            url: '<?php echo Yii::app()->createUrl('administrator/applications/statuschange/appId/') ?>' + '/' + appId,
            type: 'GET',
            dataType: 'JSON',
            success: function(message) {
                $.fn.yiiGridView.update('app-grid');
                $('.alert-block').hide();
                $('.custom-messages').show();
                if (message.status == 'success') {
                    $(".custom-error-flash-message").hide();
                    $("#custom-flash-message").html(message.message);
                    $(".custom-flash-message").show();
                } else {
                    $(".custom-flash-message").hide();
                    $("#custom-error-flash-message").html(message.message);
                    $(".custom-error-flash-message").show();
                }
            }
        });
    }
     // function to delete application
    function deleteApp(appId) {
        $.ajax({
            url: '<?php echo Yii::app()->createUrl('administrator/applications/delete/appId/') ?>' + '/' + appId,
            type: 'GET',
            dataType: 'JSON',
            success: function(message) {             
                $.fn.yiiGridView.update('app-grid');
                $('.alert-block').hide();
                $('.custom-messages').show();
                if (message.status == 'success') {
                    $(".custom-error-flash-message").hide();
                    $("#custom-flash-message").html(message.message);
                    $(".custom-flash-message").show();
                } else {
                    $(".custom-flash-message").hide();
                    $("#custom-error-flash-message").html(message.message);
                    $(".custom-error-flash-message").show();
                }
            }
        });
    }
    //function to select modal icon
    function onModalIconSelect(value) {
        $('.imgUpload').show();
        var type = ($('#create-form').css('display')) == 'block' ? 'create' : 'update';
        $('#AppInfoMasterForm_' + type + '_icon_type').val('<?php echo AppConstants::$ICON_IMAGE['ICON']; ?>');
        $('#AppInfoMasterForm_' + type + '_modal_icon_name').val(value);
        $('#' + type + '_modal_icon_name').html(value);
        $('#AppInfoMasterForm_' + type + '_icon_chosen').val('ICON');
        $('#' + type + '-form #AppInfoMasterForm_upload_image').val('');
        $('#modal-icons').modal('toggle');
    }

    $(document).ready(function() {
        if ('<?php echo ($updateModel != '') ? true : false; ?>') {
            $('.page-header').html('Edit Application');
            $('.add_application').hide();
            $('#search-form').hide();
            $('#app_mgmt_search').hide();
        }
        if ('<?php echo $showCreateForm; ?>') {
            $('.page-header').html('Add Application');
            $('#create-form').show();
            $('#search-form').hide();
            $('.add_application').hide();
        }
    });

</script>
<?php
echo $this->renderPartial('icons', array());
Yii::app()->clientScript->registerScript('addNewApp', "
   $('.add_application').click(function(){
          $(':input','#app_mgmt').val('');
          $('#create-form').toggle(function(){
            $('.page-header').html('Add Application');
           });
          $('#update-form').hide();
          $('#app_mgmt_search').hide();
          $('.add_application').hide();
          return false;
   });   
");
?>
<!-- Navigation info -->
<?php echo CommonFunction::getBreadCrum(array(
                                            array('name'=>'Application','url'=>'/administrator/applications/create'), 
                                            array('name'=>'List','url'=>'/administrator/applications/create')
                                             )); ?>
<!-- END Navigation info -->
<!-- Page Header starts -->
<?php echo CommonFunction::getHeader('Application Management'); ?>
<!-- Flash Message starts -->
<?php include Yii::app()->theme->basePath . '/inc/message.php'; // Configuration php file ?>
<!-- Flash Message ends -->
<!-- Page Header ends -->
<?php echo CHtml::button('Add Application +', array('class' => 'btn btn-primary add_application pull-right')); ?>
<!-- search form starts -->
<div id="search-form">
    <?php $this->renderPartial('_search', array('model' => $model, 'type' => 'search')); ?>
</div>
<!-- search form ends -->
<!-- create form starts -->
<div id="create-form" style='display:none'>
    <?php $this->renderPartial('_form', array('model' => $model, 'type' => 'create' ,'dropdownvalues'=>$dropdownvalues)); ?>
</div>
<!-- create form ends -->
<!-- update form starts -->
<div id="update-form">
    <?php
    if ($updateModel != '') {
        $this->renderPartial('_form', array('model' => $updateModel, 'type' => 'update', 'dropdownvalues'=>$dropdownvalues));
    }
    ?>
</div>
<!-- update form ends -->
<!-- List starts -->
<div class="app-grid">
    <?php
    $this->widget('EBootstrapGridView', array(
        'id' => 'app-grid',
        'afterAjaxUpdate' => 'function(){$(\'[data-toggle="tooltip"]\').tooltip({ html:true, trigger:\'hover\'})}',
        'dataProvider' => $listModel->search(),
        'summaryText' => '',
        'columns' => array(
            array(
                'name' => 'Name',
                'header' => Yii::t('app', 'Name'),
                'value' => 'CommonFunction::tooltip($data->name)',
                'headerHtmlOptions' => array('width' => '25%'),
            ),
            array(
                'name' => 'URL',
                'header' => Yii::t('app', 'URL'),
                'value' => 'CommonFunction::tooltip($data->url,40)',
                'htmlOptions' => array('width' => '30%', 'class' => 'hidden-phone wordbreak-url'),
                'headerHtmlOptions' => array('class' => 'hidden-phone', 'width' => '35%'),
            ),
            array(
                'name' => 'Status',
                'header' => Yii::t('app', 'Status'),
                'value' => '($data->status==AppConstants::ACTIVE)?"Active":"Deactive"',
                'headerHtmlOptions' => array('width' => '10%'),
            ),
            array(
                'name' => 'Icon',
                'type' => 'html',
                'header' => Yii::t('app', 'Icon'),
                'value' => 'ApplicationsController::iconDisplay($data->icon_name,$data->icon_type)',
                'htmlOptions' => array('class' => 'hidden-phone text-center'),
                'headerHtmlOptions' => array('width' => '10%', 'class' => 'hidden-phone text-center'),
            ),
            array(
                'class' => 'EBootstrapButtonColumn',
                'template' => '{edit} {deactivate} {activate} {delete}',
                'header' => Yii::t('app', 'Actions'),
                'buttons' => array(
                    'edit' => array(
                        'label' => '',
                        'imageUrl' => Yii::app()->request->baseUrl . '/images/edit.png',
                        'url' => 'Yii::app()->createUrl("administrator/applications/create", array("appId"=>$data->id))',
                        'htmloptions' => array('style' => 'padding-left:10px;'),
                        'options' => array('title' => 'Edit','class' => 'editCls'),
                    ),
                    'deactivate' => array(
                        'label' => '',
                        'imageUrl' => Yii::app()->request->baseUrl . '/images/deactivate.png',
                        'url' => 'Yii::app()->createUrl("administrator/applications/statuschange", array("appId"=>$data->id))',
                        'htmloptions' => array('style' => 'padding-left:10px;'),
                        'options' => array('title' => 'Deactivate','class' => 'deactivateCls'),
                        'visible' => '($data->status==AppConstants::ACTIVE)?true:false',
                        'click' => 'function(){
                            if(confirm("Are you sure to deactivate this application?")){
                                  var url = $(this).attr("href");
                                  var appId = getURLParameter(url, "appId");
                                  statusChange(appId);  
                            }
                            return false;
                            }',
                    ),
                    'activate' => array(
                        'label' => '',
                        'imageUrl' => Yii::app()->request->baseUrl . '/images/activeicon1.png',
                        'url' => 'Yii::app()->createUrl("administrator/applications/statuschange", array("appId"=>$data->id))',
                        'htmloptions' => array('style' => 'padding-left:10px;'),
                        'options' => array('title' => 'Activate','class' => 'activateCls'),
                        'visible' => '($data->status==AppConstants::DEACTIVE)?true:false',
                        'click' => 'function(){
                            if(confirm("Are you sure to activate this application?")){
                                  var url = $(this).attr("href");
                                  var appId = getURLParameter(url, "appId");
                                  statusChange(appId);     
                            }
                            return false;
                            }',
                    ),
                    'delete' => array(
                        'label' => '',
                        'imageUrl' => Yii::app()->request->baseUrl . '/images/trash.png',
                        'url' => 'Yii::app()->createUrl("administrator/applications/delete", array("appId"=>$data->id))',
                        'htmloptions' => array('style' => 'padding-left:10px;'),
                        'options' => array('title' => 'Delete','class' => 'deleteCls'),
                        'visible'=>'$data->id!=1',
                        'click' => 'function(){
                            if(confirm("Are you sure to delete this application?")){
                                  var url = $(this).attr("href");
                                  var appId = getURLParameter(url, "appId");
                                  deleteApp(appId);     
                            }
                            return false;
                            }',
                    ),
                ),
                'htmlOptions' => array('class' => 'hidden-phone text-center'),
                'headerHtmlOptions' => array('width' => '10%', 'class' => 'hidden-phone text-center'),
            ),
        ),
        'pager' => array(
            'header' => '',
            'firstPageLabel' => '&lt;',
            'prevPageLabel' => 'PREV',
            'nextPageLabel' => 'NEXT',
            'lastPageLabel' => '&gt;',
        ),
        'emptyText' => Yii::t('app', 'No applications found'),
        'htmlOptions' => array('class' => 'table-striped cover-div cover-div')
    ));
    ?>
</div>
<!-- List ends -->