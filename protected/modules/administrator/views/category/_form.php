<div class="formStructure">
    <?php
    $form = $this->beginWidget('EBootstrapActiveForm', array(
        'id' => 'category_mgmt',
        'enableClientValidation' => true,
        'clientOptions' => array(
            'validateOnSubmit'=>true,
            //'hideErrorMessage'=>true,
            'validationDelay' => 0,
            'validateOnType' => true,
            'validateOnChange' => false,
            'afterValidateAttribute' => 'js:showAttributeErrorTooltip',
        //'afterValidate'=>'js:showFormErrorTooltip',
        ),
        'horizontal' => true,
    ));
    ?>
    <div class="control-group pull-left">
        <?php echo $form->labelEx($model, 'category_name'); ?>
        <div class="controls">
            <?php echo $form->textField($model, 'category_name'); ?>
            <?php echo $form->error($model, 'category_name'); ?>
        </div>
    </div>
     <?php echo $form->hiddenField($model, 'displayLength'); ?>
     <?php echo $form->hiddenField($model, 'displayStart'); ?>
    
    <div class="control-group">            
        <div class="formControls">
            <?php //echo $form->submitButtonSecondary('Cancel', array('name' => 'cancel', 'id' => 'cancel')); ?>
            <?php echo $form->submitButton(ucfirst($type), array('name' => $type, 'id' => $type,'class'=>'category-'.$type)); ?>
        </div>
        <?php $this->endWidget(); ?>
    </div>
</div>
