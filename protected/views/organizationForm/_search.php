<div class="wide form">

<?php $form=$this->beginWidget('EBootstrapActiveForm', array(
	'action'=>Yii::app()->createUrl($this->route),
	'method'=>'get',
        'horizontal' => true,
)); ?>

	<div class="control-group">
            <?php echo $form->label($model,'organization_id'); ?>
            <div class="controls"><?php echo $form->textField($model,'organization_id'); ?>
</div>
	</div>

	<div class="control-group">
            <?php echo $form->label($model,'organization_name'); ?>
            <div class="controls"><?php echo $form->textField($model,'organization_name',array('size'=>50,'maxlength'=>50)); ?>
</div>
	</div>

	<div class="control-group">
            <?php echo $form->label($model,'customer_id'); ?>
            <div class="controls"><?php echo $form->textField($model,'customer_id'); ?>
</div>
	</div>

	<div class="control-group">
            <?php echo $form->label($model,'distinguished_name'); ?>
            <div class="controls"><?php echo $form->textField($model,'distinguished_name',array('size'=>50,'maxlength'=>50)); ?>
</div>
	</div>

	<div class="control-group buttons">
            <?php echo $form->submitButton('Search'); ?>
	</div>

<?php $this->endWidget(); ?>

</div><!-- search-form -->