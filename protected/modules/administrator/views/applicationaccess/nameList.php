<script type="text/javascript">
    $(document).ready(function() {
        if ('<?php echo ($updateModel != '') ? true : false; ?>') {
            $('.page-header').html('Edit Role');
            $('#role_mgmt_search').hide();
            $('.add_name').hide();
        }
        if ('<?php echo $showCreateForm; ?>') {
            $('.page-header').html('Add Role');
            $('#create-form').show();
            $('#role_mgmt_search').hide();
            $('.add_name').hide();
        }
    });

    // function to change status of the application access name
    function statusChange(accessnameId) {
        $.ajax({
            url: '<?php echo Yii::app()->createUrl('administrator/applicationaccess/namestatuschange/accessnameId/') ?>' + '/' + accessnameId,
            type: 'GET',
            dataType: 'JSON',
            success: function(message) {
                $.fn.yiiGridView.update('app-access-name-grid');
                $('.alert-block').hide();
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
</script>

<?php echo CHtml::button('Add Role +', array('class' => 'btn btn-primary add_name pull-right')); ?>

<?php
Yii::app()->clientScript->registerScript('addNewName', "
   $('.add_name').click(function(){
         $(':input','#app_access_name').val('');
          $('#create-form').toggle(function(){
            $('.page-header').html('Add Role');
           });
          $('#update-form').hide();
          $('#role_mgmt_search').hide();
          $('.add_name').hide();
          return false;
   });   
");
?>
<!-- search form starts -->
<div id="search-form">
    <?php $this->renderPartial('_nameSearch', array('model' => (!empty($model))?$model:((!empty($updateModel))?$updateModel:''), 'type' => 'search')); ?>
</div>
<!-- search form ends -->
<!-- create form starts -->
<div id="create-form" style="display:none">
    <?php
    if ($model != '')
        $this->renderPartial('_nameForm', array('model' => $model, 'type' => 'create'));
    ?>
</div>
<!-- create form ends -->
<!-- update form starts -->
<div id="update-form">
    <?php
    if ($updateModel != '')
        $this->renderPartial('_nameForm', array('model' => $updateModel, 'type' => 'update'));
    ?>
</div>
<!-- update form ends -->


<!-- List starts -->
<div class="app-grid">
    <?php
    $this->widget('EBootstrapGridView', array(
        'id' => 'app-access-name-grid',
        'afterAjaxUpdate' => 'function(){$(\'[data-toggle="tooltip"]\').tooltip({ html:true, trigger:\'hover\'})}',
        'dataProvider' => $listModel->search(),
        'summaryText' => '',
        'columns' => array(
            array(
                'name' => 'Name',
                'header' => Yii::t('app', 'Name'),
                'value' => 'CommonFunction::tooltip(ucfirst($data->name))',
                'htmlOptions' => array('width' => '20%'),
            ),
            array(
                'name' => 'Status',
                'header' => Yii::t('app', 'Status'),
                'value' => '($data->status==AppConstants::ACTIVE)?"Active":"Deactive"',
                'htmlOptions' => array('width' => '20%', 'class' => 'hidden-phone'),
                'headerHtmlOptions' => array('class' => 'hidden-phone'),
            ),
            array(
                'class' => 'EBootstrapButtonColumn',
                'template' => '{edit} {deactivate} {activate}',
                'header' => Yii::t('app', 'Actions'),
                'buttons' => array(
                    'edit' => array(
                        'label' => '',
                        'imageUrl' => Yii::app()->request->baseUrl . '/images/edit.png',
                        'url' => 'Yii::app()->createUrl("administrator/applicationaccess/createappaccessname", array("accessnameId"=>$data->id))',
                        'htmloptions' => array('style' => 'padding-left:10px;'),
                        'visible'=>'$data->id!=1',
                        'options' => array('title' => 'Edit','class'=>'editCls'),
                    ),
                    'deactivate' => array(
                        'label' => '',
                        'imageUrl' => Yii::app()->request->baseUrl . '/images/deactivate.png',
                        'url' => 'Yii::app()->createUrl("administrator/applicationaccess/namestatuschange", array("accessnameId"=>$data->id))',
                        'htmloptions' => array('style' => 'padding-left:10px;'),
                        'options' => array('title' => 'Deactivate','class'=>'deactivateCls'),
                        'visible' => '($data->id!=1 && $data->status==AppConstants::ACTIVE)?true:false',
                        'click' => 'function(){
                            if(confirm("Are you sure to deactivate this role?")){
                                  var url = $(this).attr("href");
                                  var accessnameId = getURLParameter(url, "accessnameId");
                                  statusChange(accessnameId);  
                            }
                            return false;
                            }',
                    ),
                    'activate' => array(
                        'label' => '',
                        'imageUrl' => Yii::app()->request->baseUrl . '/images/activeicon1.png',
                        'url' => 'Yii::app()->createUrl("administrator/applicationaccess/namestatuschange", array("accessnameId"=>$data->id))',
                        'htmloptions' => array('style' => 'padding-left:10px;'),
                        'options' => array('title' => 'Activate','class'=>'activateCls'),
                        'visible' => '($data->id!=1 && $data->status==AppConstants::DEACTIVE)?true:false',
                        'click' => 'function(){
                            if(confirm("Are you sure to activate this role?")){
                                  var url = $(this).attr("href");
                                  var accessnameId = getURLParameter(url, "accessnameId");
                                  statusChange(accessnameId);     
                            }
                            return false;
                            }',
                    ),
                ),
                'htmlOptions' => array('class' => 'hidden-phone text-center'),
                'headerHtmlOptions' => array('class' => 'hidden-phone text-center','width' => '10%',),
            ),
        ),
        'pager' => array(
            'header' => '',
            'firstPageLabel' => '&lt;',
            'prevPageLabel' => 'PREV',
            'nextPageLabel' => 'NEXT',
            'lastPageLabel' => '&gt;',
        ),
        'emptyText' => Yii::t('app', 'No roles found'),
        'htmlOptions' => array('class' => 'table-striped cover-div cover-div')
    ));
    ?>
</div>
<!-- List ends -->