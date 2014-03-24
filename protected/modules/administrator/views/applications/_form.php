<script type="text/javascript">
    $(document).ready(function() {
        var type = "<?php echo $type ?>";
        $('#' + type + '-form #AppInfoMasterForm_upload_image').click(function() {
            if ($('#AppInfoMasterForm_' + type + '_icon_chosen').val() == 'ICON') {
                if (confirm('You have already chosen an icon.Do you want to change it?')) {
                    return true;
                } else {
                    return false;
                }
            }
        });
        $('#' + type + '-form #AppInfoMasterForm_upload_image').change(function() {
            $('#AppInfoMasterForm_' + type + '_icon_chosen').val('IMG');
            $('.display-icon-name').html('');
        });
        $('.modalSelect').click(function() {
            if ($('#AppInfoMasterForm_' + type + '_icon_chosen').val() == 'IMG') {
                if (confirm('You have already chosen to upload icon.Do you want to change it?')) {
                    return true;
                } else {
                    return false;
                }
            }
        });
        // To show errors if file upload fails
        if ($('#' + type + '-form #AppInfoMasterForm_upload_image_em_').html() != '') {
            $('#' + type + '-form .uploadIcons').show();
        }
    })

</script>

<div class="formStructure">
    <?php
    $form = $this->beginWidget('EBootstrapActiveForm', array(
        'id' => 'app_mgmt',
        'enableClientValidation' => true,
        'clientOptions' => array(
            //'validateOnSubmit'=>true,
            //'hideErrorMessage'=>true,
            'validationDelay' => 0,
            'afterValidateAttribute' => 'js:showAttributeErrorTooltip',
        //'afterValidate'=>'js:showFormErrorTooltip',
        ),
        'horizontal' => true,
        'htmlOptions' => array('enctype' => 'multipart/form-data')
    ));
    ?>
    <div class="control-group pull-left">
        <?php echo $form->labelEx($model, 'name'); ?>
        <div class="controls">
            <?php echo $form->textField($model, 'name'); ?>
            <?php echo $form->error($model, 'name'); ?>
        </div>
    </div>
    <div class="control-group pull-right">
        <?php echo $form->labelEx($model, 'url'); ?>
        <div class="controls">
            <?php echo $form->textField($model, 'url'); ?>
            <p class="imgSpec">(Starts with http [or] https.Eg:'http://www.test.com')</p>
            <?php echo $form->error($model, 'url'); ?>
        </div>
    </div>
    <div class="clearfix"></div>
    <div class="control-group pull-left">
        <?php echo $form->labelEx($model, 'status'); ?>
        <div class="controls">
            <?php echo $form->dropDownList($model, 'status', array('A' => 'Active', 'D' => 'Deactive')); ?>
            <?php echo $form->error($model, 'status'); ?>
        </div>
    </div> 
    <div class="control-group pull-right">
        <?php echo $form->labelEx($model, 'category_id'); ?>
        <div class="controls">
            <?php
            echo $form->dropDownList($model, 'category_id', $dropdownvalues['category_id'], array(
                'prompt' => 'Select Category'));
            ?> 
            <?php echo $form->error($model, 'user_name'); ?>
        </div>
    </div>  
    <div class="clearfix"></div>
    <div class="control-group pull-left">
        <?php echo $form->labelEx($model, 'icon_color'); ?>
        <div class="controls">
            <div data-color="<?php echo isset($model->attributes['icon_color'])?$model->attributes['icon_color']:AppConstants::DEFAULT_APP_TILE_COLOR;?>" class="input-append input-colorpicker color">
                <?php echo $form->textField($model, 'icon_color', array('class' => 'input-mini','readOnly'=>true)); ?>
                <span class="add-on"><i style="background-color: <?php echo (isset($model->attributes['icon_color']) && $model->attributes['icon_color']!='')?$model->attributes['icon_color']:AppConstants::DEFAULT_APP_TILE_COLOR;?>"></i></span>
            </div>
        </div>
    </div>

    <div class="control-group pull-right">
        <?php echo $form->labelEx($model, 'description'); ?>
        <div class="controls">
            <?php echo $form->textArea($model, 'description'); ?>
            <?php echo $form->error($model, 'description'); ?>
        </div>
    </div>

    <div class="control-group pull-left">            
        <label class="control-label " for="AppInfoMasterForm_Icon">Icon</label>
        <div class="controls">
            <label class="changeIcon">
                <?php echo (isset($model->icon_name) && $model->icon_name != '' && $type == 'update') ? ApplicationsController::iconDisplay($model->icon_name, $model->icon_type) : '<i class="halflingicon-list-alt"></i>'; ?> <a id="change_default_icon">Change Icon</a>
            </label>
        </div>
    </div>
    <div class="clearfix"></div>
    <div class="uploadIcons">
        <div class="control-group pull-left">
            <?php echo $form->labelEx($model, 'upload_icon'); ?>
            <div class="controls">
                <?php echo $form->fileField($model, 'upload_image'); ?>
                <p class="imgSpec">(Image in jpg, png or gif format. File size max 2MB)</p>
                <?php echo $form->error($model, 'upload_image'); ?>
            </div>
        </div>
        <?php echo $form->hiddenField($model, $type . '_icon_type'); ?>
        <?php echo $form->hiddenField($model, $type . '_modal_icon_name'); ?>
        <?php echo $form->hiddenField($model, $type . '_icon_chosen'); ?>
        <div class="control-group iconSelectModal pull-right">
            <label class="control-label">(or)</label>
            <div class="controls">
                <a data-toggle="modal" href="#modal-icons" ><button class="modalSelect">Select Default Icon</button></a>
                <span class="imgUpload" style="display:none"><div id="<?php echo $type; ?>_modal_icon_name" class="display-icon-name"></div></span>
            </div>
        </div> 
    </div>
    <div class="clearfix"></div>   
    <div class="formControls">
        <?php echo $form->submitButtonSecondary('Cancel', array('name' => 'cancel', 'id' => 'cancel')); ?>
        <?php echo $form->submitButton(ucfirst($type), array('name' => $type, 'id' => $type)); ?>
    </div>
    <?php $this->endWidget(); ?>
</div>
