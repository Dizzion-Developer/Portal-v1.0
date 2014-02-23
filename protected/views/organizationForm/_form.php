<div class="form">

<?php $form=$this->beginWidget('EBootstrapActiveForm', array(
	'id'=>'organization-form-form',
	'enableAjaxValidation'=>false,
        'horizontal' => true,
)); ?>

	<p class="note">Fields with <span class="required">*</span> are required.</p>

	<div class="control-group">
            <?php echo $form->labelEx($model,'organization_name'); ?>
            <div class="controls">
                <?php echo $form->textField($model,'organization_name',array('size'=>50,'maxlength'=>50)); ?>
                <?php echo $form->error($model,'organization_name'); ?>
            </div>
	</div>

	<div class="control-group">
            <?php echo $form->labelEx($model,'customer_id'); ?>
            <div class="controls">
                <?php echo $form->textField($model,'customer_id'); ?>
                <?php echo $form->error($model,'customer_id'); ?>
            </div>
	</div>

	<div class="control-group">
            <?php echo $form->labelEx($model,'distinguished_name'); ?>
            <div class="controls">
                <?php echo $form->textField($model,'distinguished_name',array('size'=>50,'maxlength'=>50)); ?>
                <?php echo $form->error($model,'distinguished_name'); ?>
            </div>
	</div>

	<div class="control-group buttons">
            <?php echo $form->submitButton($model->isNewRecord ? 'Create' : 'Save'); ?>
	</div>

<?php $this->endWidget(); ?>

</div><!-- form -->