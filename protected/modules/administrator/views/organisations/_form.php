<div class="formStructure">
    <?php
    $form = $this->beginWidget('EBootstrapActiveForm', array(
        'id' => 'org_mgmt',
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
        <?php echo $form->labelEx($model, 'org_name'); ?>
        <div class="controls">
            <?php echo $form->textField($model, 'org_name'); ?>
            <?php echo $form->error($model, 'org_name'); ?>
        </div>
    </div>
    <div class="control-group pull-right">
        <?php echo $form->labelEx($model, 'customer_id'); ?>
        <div class="controls">
            <?php echo $form->textField($model, 'customer_id'); ?>
            <?php echo $form->error($model, 'customer_id'); ?>
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
    <div class="clearfix"></div>
    <div class="control-group">            
        <div class="formControls">
            <?php echo $form->submitButtonSecondary('Cancel', array('name' => 'cancel', 'id' => 'cancel')); ?>
            <?php echo $form->submitButton(ucfirst($type), array('name' => $type, 'id' => $type)); ?>
        </div>
        <?php $this->endWidget(); ?>
    </div>
</div>
