<script type="text/javascript">
    $(document).ready(function() {
        if ('<?php echo ($updateModel != '') ? true : false; ?>') {
            $('.page-header').html('Edit Organization');
            $('#org_mgmt_search').hide();
            $('.add_organisation').hide();
        }
        if ('<?php echo $showCreateForm; ?>') {
            $('.page-header').html('Add Organization');
            $('#create-form').show();
            $('#org_mgmt_search').hide();
            $('.add_organisation').hide();
        }
    });

    // function to change status of the organisation
    function statusChange(orgId) {
        $.ajax({
            url: '<?php echo Yii::app()->createUrl('administrator/organisations/statuschange/orgId/') ?>' + '/' + orgId,
            type: 'GET',
            dataType: 'JSON',
            success: function(message) {
                $.fn.yiiGridView.update('org-grid');
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
<!-- Navigation info -->
<?php echo CommonFunction::getBreadCrum(array(
                                            array('name'=>'Organization','url'=>'/administrator/organisations/create'))); ?>
<!-- END Navigation info -->
<!-- Page Header starts -->
<?php echo CommonFunction::getHeader('Organization Management'); ?>
<!-- Flash Message starts -->
<?php include Yii::app()->theme->basePath . '/inc/message.php'; // Configuration php file ?>
<!-- Flash Message ends -->
<!-- Page Header ends -->

<?php echo CHtml::button('Add Organization +', array('class' => 'btn btn-primary add_organisation pull-right')); ?>
<?php
Yii::app()->clientScript->registerScript('addNewOrg', "
   $('.add_organisation').click(function(){
         $(':input','#org_mgmt').val('');
          $('#create-form').toggle(function(){
            $('.page-header').html('Add Organization');
           });
          $('#update-form').hide();
          $('#org_mgmt_search').hide();
          $('.add_organisation').hide();
          return false;
   });   
");
?>
<!-- search form starts -->
<div id="search-form">
    <?php $this->renderPartial('_search', array('model' => (!empty($model))?$model:((!empty($updateModel))?$updateModel:''), 'type' => 'search')); ?>
</div>
<!-- search form ends -->
<!-- create form starts -->
<div id="create-form" style="display:none">
    <?php
    if ($model != '')
        $this->renderPartial('_form', array('model' => $model, 'type' => 'create'));
    ?>
</div>
<!-- create form ends -->
<!-- update form starts -->
<div id="update-form">
    <?php
    if ($updateModel != '')
        $this->renderPartial('_form', array('model' => $updateModel, 'type' => 'update'));
    ?>
</div>
<!-- update form ends -->

<!-- List starts -->
<div class="app-grid">
    <?php
    $this->widget('EBootstrapGridView', array(
        'id' => 'org-grid',
        'afterAjaxUpdate' => 'function(){$(\'[data-toggle="tooltip"]\').tooltip({ html:true, trigger:\'hover\'})}',
        'dataProvider' => $listModel->search(),
        'summaryText' => '',
        'columns' => array(
            array(
                'name' => 'Organization Name',
                'header' => Yii::t('app', 'Organization Name'),
                'value' => 'CommonFunction::tooltip(ucfirst($data->org_name))',
                'headerHtmlOptions' => array('width' => '35%'),
            ),
            array(
                'name' => 'Customer ID',
                'header' => Yii::t('app', 'Customer ID'),
                'value' => 'CommonFunction::tooltip($data->customer_id)',
                'htmlOptions' => array('class' => 'hidden-phone'),
                'headerHtmlOptions' => array('width' => '35%', 'class' => 'hidden-phone'),
            ),
            array(
                'name' => 'Status',
                'header' => Yii::t('app', 'Status'),
                'value' => '($data->status==AppConstants::ACTIVE)?"Active":"Deactive"',
                'headerHtmlOptions' => array('width' => '10%'),
            ),
            array(
                'class' => 'EBootstrapButtonColumn',
                'template' => '{edit} {deactivate} {activate}',
                'header' => Yii::t('app', 'Actions'),
                'buttons' => array(
                    'edit' => array(
                        'label' => '',
                        'imageUrl' => Yii::app()->request->baseUrl . '/images/edit.png',
                        'url' => 'Yii::app()->createUrl("administrator/organisations/create", array("orgId"=>$data->id))',
                        'htmloptions' => array('style' => 'padding-left:10px;'),
                        'visible'=>'$data->id!=1',
                        'options' => array('title' => 'Edit','class' => 'editCls'),
                    ),
                    'deactivate' => array(
                        'label' => '',
                        'imageUrl' => Yii::app()->request->baseUrl . '/images/deactivate.png',
                        'url' => 'Yii::app()->createUrl("administrator/organisations/statuschange", array("orgId"=>$data->id))',
                        'htmloptions' => array('style' => 'padding-left:10px;'),
                        'options' => array('title' => 'Deactivate','class' => 'deactivateCls'),
                        'visible' => '($data->id!=1 && $data->status==AppConstants::ACTIVE)?true:false',
                        'click' => 'function(){
                            if(confirm("Are you sure to deactivate this organization?")){
                                  var url = $(this).attr("href");
                                  var orgId = getURLParameter(url, "orgId");
                                  statusChange(orgId);  
                            }
                            return false;
                            }',
                    ),
                    'activate' => array(
                        'label' => '',
                        'imageUrl' => Yii::app()->request->baseUrl . '/images/activeicon1.png',
                        'url' => 'Yii::app()->createUrl("administrator/organisations/statuschange", array("orgId"=>$data->id))',
                        'htmloptions' => array('style' => 'padding-left:10px;'),
                        'options' => array('title' => 'Activate','class' => 'activateCls'),
                        'visible' => '($data->status==AppConstants::DEACTIVE)?true:false',
                        'click' => 'function(){
                            if(confirm("Are you sure to activate this organization?")){
                                  var url = $(this).attr("href");
                                  var orgId = getURLParameter(url, "orgId");
                                  statusChange(orgId);     
                            }
                            return false;
                            }',
                    ),
                ),
                'htmlOptions' => array('class' => 'hidden-phone text-center'),
                'headerHtmlOptions' => array('width' => '10%','class' => 'hidden-phone text-center'),
            ),
        ),
        'pager' => array(
            'header' => '',
            'firstPageLabel' => '&lt;',
            'prevPageLabel' => 'PREV',
            'nextPageLabel' => 'NEXT',
            'lastPageLabel' => '&gt;',
        ),
        'emptyText' => Yii::t('app', 'No organizations found'),
        'htmlOptions' => array('class' => 'table-striped cover-div cover-div')
    ));
    ?>
</div>
<!-- List ends -->