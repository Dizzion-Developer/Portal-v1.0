<?php
$this->pageTitle=Yii::t('app', Yii::app()->name . ' - Sample Controls');
$this->breadcrumbs=array(
	Yii::t('app', 'Sample Controls'),
);
?>

<h1><?php echo Yii::t('app', 'Sample Controls'); ?></h1>

<div class="alert alert-success">
	Success Notification!!
</div>

<div class="alert alert-error">
	Error Notification!!
</div>

<div class="form">

	<div class="control-group">
                <?php echo CHtml::label('Text Field','name'); ?>
		<?php echo CHtml::textField('name'); ?>
	</div>
        <div class="control-group">
                <?php echo CHtml::label('Date Field','date'); ?>
		<?php $this->widget('zii.widgets.jui.CJuiDatePicker', array(
                                        'model' => $model,
                                        'attribute' => "date",
                                        'options' => array('dateFormat' => AppConstants::DATE_FORMAT),
                                        'htmlOptions' => array('readonly' => 'false', 'maxlength' => 10, 'class' => '', 'size' => '10')
                                    )); ?>
	</div>
	<div class="control-group">
                <?php echo CHtml::label('Editor','body'); ?>
                <?php $this->widget('application.extensions.editor.CKkceditor', array(
                    "model" => $model, # Data-Model
                    "attribute" => 'body', # Attribute in the Data-Model
                    "height" => '150px',
                    "width" => '98%',
                    "config" => array(
                        'toolbar' => array(
                            array('Undo', 'Redo', 'Bold', 'Italic', 'Underline', 'Strike', 'Link', 'Unlink'),
                            array('Smiley', 'Blockquote', 'TextColor', 'BGColor'),
                    )),
                ));
                ?>
        </div>
	<div class="control-group buttons">
                <?php echo CHtml::label('Primary Button','date'); ?>
		<?php echo CHtml::htmlButton('Submit', array('class' => 'btn btn-primary')); ?>
	</div>
    
        <div class="control-group buttons">
            <a href="http://twitter.github.com/bootstrap/base-css.html" target="_blank">Bootstrap Samples</a>
	</div>

</div>