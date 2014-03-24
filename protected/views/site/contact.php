<?php
$this->pageTitle=Yii::t('app', Yii::app()->name . ' - Contact Us');
$this->breadcrumbs=array(
	Yii::t('app', 'Contact'),
);
?>

<h1><?php echo Yii::t('app', 'Contact Us'); ?></h1>

<p>
If you have business inquiries or other questions, please fill out the following form to contact us. Thank you.
</p>

<div class="form">
<?php $form=$this->beginWidget('EBootstrapActiveForm', array(
	'id'=>'contact-form',
	'enableClientValidation'=>true,
	'clientOptions'=>array(
            'validateOnSubmit'=>true,
	),
        'horizontal' => true,
)); ?>

	<p class="note">Fields with <span class="required">*</span> are required.</p>

        <div class="control-group">
            <?php echo $form->labelEx($model,'name'); ?>
            <div class="controls">
                <?php echo $form->textField($model,'name'); ?>
                <?php echo $form->error($model,'name'); ?>
            </div>
        </div>

	<div class="control-group">
            <?php echo $form->labelEx($model,'email'); ?>
            <div class="controls">
                <?php echo $form->textField($model,'email'); ?>
                <?php echo $form->error($model,'email'); ?>
            </div>
	</div>

	<div class="control-group">
            <?php echo $form->labelEx($model,'subject'); ?>
            <div class="controls">
                <?php echo $form->textField($model,'subject',array('size'=>60,'maxlength'=>128)); ?>
                <?php echo $form->error($model,'subject'); ?>
            </div>
	</div>

	<div class="control-group">
            <?php echo $form->labelEx($model,'body'); ?>
            <div class="controls">
                <?php echo $form->textArea($model,'body',array('rows'=>6, 'cols'=>50)); ?>
                <?php echo $form->error($model,'body'); ?>
            </div>
	</div>

	<?php if(CCaptcha::checkRequirements()): ?>
            <div class="control-group">
                <?php echo $form->labelEx($model,'verifyCode'); ?>
                <div>
                    <?php $this->widget('CCaptcha'); ?>
                    <?php echo $form->textField($model,'verifyCode'); ?>
                </div>
                <div class="hint">Please enter the letters as they are shown in the image above.
                <br/>Letters are not case-sensitive.</div>
                <?php echo $form->error($model,'verifyCode'); ?>
            </div>
	<?php endif; ?>

	<div class="control-group buttons">
            <?php echo $form->submitButton('Login'); ?>
	</div>

<?php $this->endWidget(); ?>
    </form>
</div><!-- form -->