<div class="formStructure">
    <?php
    $form = $this->beginWidget('EBootstrapActiveForm', array(
        'id' => 'app_access_name',
        'enableClientValidation' => true,
        'clientOptions' => array(
            //'validateOnSubmit'=>true,
            //'hideErrorMessage'=>true,
            'validationDelay' => 0,
            'afterValidateAttribute' => 'js:showAttributeErrorTooltip',
        //'afterValidate'=>'js:showFormErrorTooltip',
        ),
        'horizontal' => true,
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
        <?php echo $form->labelEx($model, 'status'); ?>
        <div class="controls">
            <?php echo $form->dropDownList($model, 'status', array('A' => 'Active', 'D' => 'Deactive')); ?>
            <?php echo $form->error($model, 'status'); ?>
        </div>
    </div>
    <div class="clearfix"></div>
    <div class="control-group">            
        <div class="formControls">
            <?php echo $form->submitButtonSecondary('Cancel', array('name' => 'cancel', 'id' => 'cancel')); ?>
            <?php echo $form->submitButton(ucfirst($type), array('name' => $type, 'id' => $type)); ?>
        </div>
        <?php $this->endWidget(); ?>
    </div>
</div>
