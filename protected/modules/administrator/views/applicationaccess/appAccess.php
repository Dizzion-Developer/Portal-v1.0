<!-- Navigation info -->
<?php echo CommonFunction::getBreadCrum(array(
                                            array('name'=>'Role','url'=>'/administrator/applicationaccess/createappaccess'))); ?>
<!-- END Navigation info -->
<!-- Page Header starts -->
<?php echo CommonFunction::getHeader('Role Management'); ?>
<!-- Flash Message starts -->
<?php include Yii::app()->theme->basePath . '/inc/message.php'; // Configuration php file ?>
<!-- Flash Message ends -->
<!-- Page Header ends -->

<!-- Users tabs links -->
<ul data-toggle="tabs" class="nav nav-tabs" id="dash-example-tabs">
    <li class="<?php echo ($type == AppConstants::APP_ACCESS_MAPPING) ? 'active' : ''; ?>"><a href="<?php echo Yii::app()->createUrl('/administrator/applicationaccess/createappaccess') ?>">Role Assignment</a></li>
    <li class="<?php echo ($type == AppConstants::APP_ACCESS_NAME) ? 'active' : ''; ?>"><a href="<?php echo Yii::app()->createUrl('/administrator/applicationaccess/createappaccessname') ?>">Role</a></li>    
</ul>
<!-- END Users tabs links -->

<!-- User tabs content -->
<div class="tab-content">
    <!-- App access mapping Tab -->
    <div id="dash-example-tabs-admin" class="tab-pane <?php echo ($type == AppConstants::APP_ACCESS_MAPPING) ? 'active' : ''; ?>">
        <?php if ($type == AppConstants::APP_ACCESS_MAPPING) { 
           $this->renderPartial('mappingList',array('model'=>$model,'dataProvider'=>$dataProvider,'listModel'=>$listModel,'updateModel' => $updateModel,
                               'dropdownvalues'=>$dropdownvalues,'showCreateForm' => $showCreateForm,));
         } ?>
    </div>
    <!-- App access mapping Tab Ends -->

    <!-- App access Tab -->
    <div id="dash-example-tabs-mods" class="tab-pane <?php echo ($type == AppConstants::APP_ACCESS_NAME) ? 'active' : ''; ?>">
        <?php
        if ($type == AppConstants::APP_ACCESS_NAME) {
            $this->renderPartial('nameList', array('model' => $model, 'listModel' => $listModel, 'updateModel' => $updateModel,'showCreateForm'=>$showCreateForm));
        }
        ?>
    </div>
    <!--  App access Tab Ends -->
</div>