<script type="text/javascript">
    $(document).ready(function() {
        if ('<?php echo ($updateModel != '') ? true : false; ?>') {
            $('.page-header').html('Edit Role Assignment');
            $('.add_map').hide();
            $('#role_mapping_search').hide();
        }
        if ('<?php echo $showCreateForm; ?>') {
            $('.page-header').html('Add Role Assignment');
            $('#create-form').show();
            $('.add_map').hide();
            $('#role_mapping_search').hide();
        }
    });
    function showAppList(e) {
        var data1 = $(e).data('id');
        $.ajax({
            type: "POST",
            url: '<?php echo $this->createUrl('applicationaccess/popupapplist'); ?>',
            data: "appids=" + data1,
            dataType: 'JSON',
            success: function(msg) {
                if (msg.status == 'success') {
                    $('#appnames').html(msg.appname);
                    $("#modal-applist").modal('show');
                } else {
                    window.location.reload(true);
                }
            },
            error: function() {
                window.location.reload();
            }
        });
    }
</script> 
<?php
echo $this->renderPartial('applist', array());
echo CHtml::button('Add Role Assignment +', array('class' => 'btn btn-primary add_map pull-right')); ?>
 
<?php
Yii::app()->clientScript->registerScript('addNewMap', "
   $('.add_map').click(function(){
           $('select','#app_access_map').val('');
           $('#create-form').toggle(function(){
           $('.page-header').html('Add Role Assignment');
           });
          $('#update-form').hide();
          $('#role_mapping_search').hide();
          $('.add_map').hide();
          return false;
   });   
");
?>

<!-- search form starts -->
<div id="search-form">
    <?php $this->renderPartial('_mappingSearch', array('model' => (!empty($model))?$model:((!empty($updateModel))?$updateModel:''), 'type' => 'search')); ?>
</div>
<!-- search form ends -->
<!-- create form starts -->
<div id="create-form" style="display:none">
    <?php
    if ($model != '')
        $this->renderPartial('_mappingForm', array('model' => $model,'dropdownvalues'=>$dropdownvalues, 'type' => 'create'));
    ?>
</div>
<!-- create form ends -->
<!-- update form starts -->
<div id="update-form">
    <?php
    if ($updateModel != '')
        $this->renderPartial('_mappingForm', array('model' => $updateModel,'dropdownvalues'=>$dropdownvalues, 'type' => 'update'));
    ?>
</div>
<!-- update form ends -->


<!-- List starts -->
<div class="app-grid">
    <?php
    $this->widget('EBootstrapGridView', array(
        'id' => 'app-access-map-grid',
        'afterAjaxUpdate' => 'function(){$(\'[data-toggle="tooltip"]\').tooltip({ html:true, trigger:\'hover\'})}',
        'dataProvider' => $listModel,
        'summaryText' => '',
        'columns' => array(
            array(
                'name' => 'Role',
                'header' => Yii::t('app', 'Role'),
                'value' => 'CommonFunction::tooltip(ucfirst($data["access_name"]),20)',
                'htmlOptions' => array('width' => '20%'),
            ),
            array(
                'name' => 'Organization Name',
                'header' => Yii::t('app', 'Organization Name'),
                'value' => 'CommonFunction::tooltip(ucfirst($data["org_name"]))',
                'htmlOptions' => array('width' => '20%'),
            ),
            array(
                'name' => 'App Count',
                'type' => 'raw',
                'header' => Yii::t('app', 'App Count'),
                'value' => 'CHtml::button($data["app_count"],array("data-id" => $data["app_info_ids"], "class" => "btn btn-primary applist","onClick"=>"js:showAppList(this)"))',
                'htmlOptions' => array('width' => '20%', 'class' => 'text-center'),
                'headerHtmlOptions' => array('class' => 'text-center'),
            ),
            /* array(
              'name' => 'Status',
              'header' => Yii::t('app', 'Status'),
              'value' => '($data["status"]==AppConstants::ACTIVE)?"Active":"Deactive"',
              'htmlOptions' => array('width' => '20%', 'class' => 'hidden-phone'),
              'headerHtmlOptions' => array('class' => 'hidden-phone'),
              ), */
            array(
                'class' => 'EBootstrapButtonColumn',
                'template' => '{edit}',
                'header' => Yii::t('app', 'Actions'),
                'buttons' => array('edit' => array(
                        'label' => '',
                        'imageUrl' => Yii::app()->request->baseUrl . '/images/edit.png',
                        'url' => 'Yii::app()->createUrl("administrator/applicationaccess/createappaccess", array("accessId"=>$data["id"]))',
                        'htmloptions' => array('style' => 'padding-left:10px;'),
                        'options' => array('title' => 'Edit','class'=>'editCls'),
                    ),
                ),
                'htmlOptions' => array('class' => 'text-center hidden-phone'),
                'headerHtmlOptions' => array('class' => 'text-center hidden-phone','width' => '10%',),
            ),
        ),
        'pager' => array(
            'header' => '',
            'firstPageLabel' => '&lt;',
            'prevPageLabel' => 'PREV',
            'nextPageLabel' => 'NEXT',
            'lastPageLabel' => '&gt;',
        ),
        'emptyText' => Yii::t('app', 'No role assignments found'),
        'htmlOptions' => array('class' => 'table-striped cover-div cover-div')
    ));
    ?>
</div>
<!-- List ends -->