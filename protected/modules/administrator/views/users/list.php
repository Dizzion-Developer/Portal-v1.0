<script type="text/javascript">
    $(document).ready(function() {
        if ('<?php echo ($updateModel != '') ? true : false; ?>') {
            $('.page-header').html('Edit User');
            $('#user_mgmt_search').hide();
            $('.add_user').hide();
        }
        if ('<?php echo $showCreateForm; ?>') {
            $('.page-header').html('Add User');
            $('#create-form').show();
            $('#user_mgmt_search').hide();
            $('.add_user').hide();
        }
    });
    // function to change status of the user
    function statusChange(userId) {
        $.ajax({
            url: '<?php echo Yii::app()->createUrl('administrator/users/statuschange/userId/') ?>' + '/' + userId,
            type: 'GET',
            dataType: 'JSON',
            success: function(message) {
                $.fn.yiiGridView.update('user-grid');
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
    //function to delete user
    function deleteUser(userId) {
        $.ajax({
            url: '<?php echo Yii::app()->createUrl('administrator/users/delete/userId/') ?>' + '/' + userId,
            type: 'GET',
            dataType: 'JSON',
            success: function(message) {
                $.fn.yiiGridView.update('user-grid');
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
</script>
<!-- Navigation info -->
<?php echo CommonFunction::getBreadCrum(array( 
                                            array('name'=>'User','url'=>'/administrator/users/create'
                                             ))); ?>
<!-- END Navigation info -->
<!-- Page Header starts -->
<?php echo CommonFunction::getHeader('User Management'); ?>
<!-- Flash Message starts -->
<?php include Yii::app()->theme->basePath . '/inc/message.php'; // Configuration php file ?>
<!-- Flash Message ends -->
<!-- Page Header ends -->
<?php echo CHtml::button('Add User +', array('class' => 'btn btn-primary add_user pull-right')); ?>

<?php
Yii::app()->clientScript->registerScript('addNewUser', "
   $('.add_user').click(function(){
         $(':input','#user_mgmt').val('');
          $('#create-form').toggle(function(){
            $('.page-header').html('Add user');
           });
          $('#update-form').hide();
          $('#user_mgmt_search').hide();
          $('.add_user').hide();
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
<div id="create-form" style="display:none" >
    <?php
    if ($model != '')
        $this->renderPartial('_form', array('model' => $model, 'dropdownvalues' => $dropdownvalues, 'type' => 'create'));
    ?>
</div>
<!-- create form ends -->
<!-- update form starts -->
<div id="update-form">
    <?php
    if ($updateModel != '')
        $this->renderPartial('_form', array('model' => $updateModel, 'dropdownvalues' => $dropdownvalues, 'type' => 'update'));
    ?>
</div>
<!-- update form ends -->
<!-- List starts -->
<div class="app-grid">
    <?php
    $this->widget('EBootstrapGridView', array(
        'id' => 'user-grid',
        'afterAjaxUpdate' => 'function(){$(\'[data-toggle="tooltip"]\').tooltip({ html:true, trigger:\'hover\'})}',
        'dataProvider' => $listModel,
        'summaryText' => '',
        'columns' => array(
            array(
                'name' => 'Name',
                'header' => Yii::t('app', 'Name'),
                'value' => 'CommonFunction::tooltip($data["first_name"]." ".$data["last_name"],24)',
                'headerHtmlOptions' => array('width' => '20%'),
            ),
            array(
                'name' => 'Email ID',
                'header' => Yii::t('app', 'Email ID'),
                'value' => 'CommonFunction::tooltip($data["email_id"])',
                'htmlOptions' => array('class' => 'hidden-phone'),
                'headerHtmlOptions' => array('width' => '20%', 'class' => 'hidden-phone'),
            ),
            array(
                'name' => 'Organization',
                'header' => Yii::t('app', 'Organization'),
                'value' => 'CommonFunction::tooltip($data["org_name"],15)',
                'htmlOptions' => array('class' => 'hidden-phone'),
                'headerHtmlOptions' => array('width' => '15%', 'class' => 'hidden-phone'),
            ),
            array(
                'name' => 'Role',
                'header' => Yii::t('app', 'Role'),
                'value' => 'CommonFunction::tooltip($data["access_name"])',
                'htmlOptions' => array('class' => 'hidden-phone'),
                'headerHtmlOptions' => array('width' => '10%', 'class' => 'hidden-phone'),
            ),
            array(
                'name' => 'User Type',
                'header' => Yii::t('app', 'User Type'),
                'value' => 'CommonFunction::tooltip(AppConstants::$ROLES[$data["role_code"]])',
                'htmlOptions' => array('class' => 'hidden-phone'),
                'headerHtmlOptions' => array('width' => '10%', 'class' => 'hidden-phone'),
            ),
            array(
                'name' => 'Status',
                'header' => Yii::t('app', 'Status'),
                'value' => '($data["status"]==AppConstants::ACTIVE)?"Active":"Deactive"',
                'headerHtmlOptions' => array('width' => '10%'),
            ),
            array(
                'class' => 'EBootstrapButtonColumn',
                'template' => '{edit} {deactivate} {activate} {delete}',
                'header' => Yii::t('app', 'Actions'),
                'buttons' => array(
                    'edit' => array(
                        'label' => '',
                        'imageUrl' => Yii::app()->request->baseUrl . '/images/edit.png',
                        'url' => 'Yii::app()->createUrl("administrator/users/create", array("userId"=>$data["id"]))',
                        'visible' => '$data["id"]!=1',
                        'htmloptions' => array('style' => 'padding-left:10px;'),
                        'options' => array('title' => 'Edit','class' => 'editCls'),
                    ),
                    'deactivate' => array(
                        'label' => '',
                        'imageUrl' => Yii::app()->request->baseUrl . '/images/deactivate.png',
                        'url' => 'Yii::app()->createUrl("administrator/users/statuschange", array("userId"=>$data["id"]))',
                        'htmloptions' => array('style' => 'padding-left:10px;'),
                        'options' => array('title' => 'Deactivate','class' => 'deactivateCls'),
                        'visible' => '($data["id"]!=1 && $data["status"]==AppConstants::ACTIVE)?true:false',
                        'click' => 'function(){
                            if(confirm("Are you sure to deactivate this user?")){
                                  var url = $(this).attr("href");
                                  var userId = getURLParameter(url, "userId");
                                  statusChange(userId);  
                            }
                            return false;
                            }',
                    ),
                    'activate' => array(
                        'label' => '',
                        'imageUrl' => Yii::app()->request->baseUrl . '/images/activeicon1.png',
                        'url' => 'Yii::app()->createUrl("administrator/users/statuschange", array("userId"=>$data["id"]))',
                        'htmloptions' => array('style' => 'padding-left:10px;'),
                        'options' => array('title' => 'Activate','class' => 'activateCls'),
                        'visible' => '($data["id"]!=1 && $data["status"]==AppConstants::DEACTIVE)?true:false',
                        'click' => 'function(){
                            if(confirm("Are you sure to activate this user?")){
                                  var url = $(this).attr("href");
                                  var userId = getURLParameter(url, "userId");
                                  statusChange(userId);     
                            }
                            return false;
                            }',
                    ),
                    'delete' => array(
                        'label' => '',
                        'imageUrl' => Yii::app()->request->baseUrl . '/images/trash.png',
                        'url' => 'Yii::app()->createUrl("administrator/users/delete", array("userId"=>$data["id"]))',
                        'htmloptions' => array('style' => 'padding-left:10px;'),
                        'options' => array('title' => 'Delete', 'class' => 'deleteCls'),
                        'visible' => '$data["id"]!=1',
                        'click' => 'function(){
                            if(confirm("Are you sure to delete this user?")){
                                  var url = $(this).attr("href");
                                  var userId = getURLParameter(url, "userId");
                                  deleteUser(userId);     
                            }
                            return false;
                            }',
                    ),
                ),
                'htmlOptions' => array('class' => 'hidden-phone text-center'),
                'headerHtmlOptions' => array('class' => 'hidden-phone text-center', 'width' => '10%'),
            ),
        ),
        'pager' => array(
            'header' => '',
            'firstPageLabel' => '&lt;',
            'prevPageLabel' => 'PREV',
            'nextPageLabel' => 'NEXT',
            'lastPageLabel' => '&gt;',
        ),
        'emptyText' => Yii::t('app', 'No users found'),
        'htmlOptions' => array('class' => 'table-striped cover-div cover-div')
    ));
    ?>
</div>
<!-- List ends -->