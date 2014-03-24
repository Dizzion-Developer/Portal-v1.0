<!-- update form starts -->
<div class="create-form">
    <div class="formStructure">
        <?php
        $form = $this->beginWidget('EBootstrapActiveForm', array(
            'id' => 'update_app',
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
        <div class="control-group">
            <?php echo $form->labelEx($model, 'name'); ?>
            <div class="controls">
                <?php echo $form->textField($model, 'name'); ?>
                <?php echo $form->error($model, 'name'); ?>
            </div>
        </div>
        <div class="control-group">
            <?php echo $form->labelEx($model, 'url'); ?>
            <div class="controls">
                <?php echo $form->textField($model, 'url'); ?>
                <?php echo $form->error($model, 'url'); ?>
            </div>
        </div>
        <div class="control-group">
            <?php echo $form->labelEx($model, 'status'); ?>
            <div class="controls">
                <?php echo $form->dropDownList($model, 'status', array('A' => 'Active', 'D' => 'Deactive')); ?>
                <?php echo $form->error($model, 'status'); ?>
            </div>
        </div>
        <div class="control-group">
            <?php echo $form->labelEx($model, 'icon_name'); ?>
            <div class="controls">
                <?php echo $form->fileField($model, 'icon_name'); ?>
                <?php echo $form->error($model, 'icon_name'); ?>
            </div>
        </div>
        <div class="control-group">
            <div class="controls">
                <?php echo $form->hiddenField($model, 'icon_type'); ?>
                <?php echo $form->hiddenField($model, 'modal_icon_name'); ?>
            </div>
        </div>
        <div class="control-group iconSelectModal">
            <label class="control-label">(or)</label>
            <div class="controls">
                <a data-toggle="modal" href="#modal-icons" ><button class="span2 modalSelect">Select Default Icon</button></a>
                <span class="imgUpload" style="display:none"><div id="modal_icon_name"></div><i class="icon-remove"></i></span>
            </div>
        </div>     
        <div class="formControls">
            <div class="control-group">
                <div class="controls">
                    <?php echo CHtml::button('Update', array('submit' => array('/administrator/applications/update', 'appId' => $model->attributes['id']), 'class' => 'btn btn-primary', 'name' => 'update')); ?>
                </div>
            </div>
            <div class="control-group">
                <div class="controls">
                    <?php echo CHtml::button('Cancel', array('submit' => array('/administrator/applications/create'), 'class' => 'btn btn-secondary', 'name' => 'cancel')); ?>
                </div>
            </div>
        </div>

        <?php $this->endWidget(); ?>
    </div>
</div>
<!-- update form ends -->
