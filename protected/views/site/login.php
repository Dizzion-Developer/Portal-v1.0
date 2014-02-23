<?php
$this->pageTitle=Yii::t('app', Yii::app()->name . ' - Login');
$this->breadcrumbs=array(
	Yii::t('app', 'Login'),
);
?>

<h1><?php echo Yii::t('app', 'Login'); ?></h1>

<p>Please fill out the following form with your login credentials:</p>

<div class="form">
<?php $form=$this->beginWidget('EBootstrapActiveForm', array(
	'id'=>'login-form',
	'enableClientValidation'=>true,
	'clientOptions'=>array(
            'validateOnSubmit'=>true,
	),
        'horizontal' => true,
)); ?>

	<p class="note">Fields with <span class="required">*</span> are required.</p>

	<div class="control-group">
            <?php echo $form->labelEx($model,'username'); ?>
            <div class="controls">
		<?php echo $form->textField($model,'username'); ?>
		<?php echo $form->error($model,'username'); ?>
            </div>
	</div>

	<div class="control-group">
            <?php echo $form->labelEx($model,'password'); ?>
            <div class="controls">
                <?php echo $form->passwordField($model,'password'); ?>
                <?php echo $form->error($model,'password'); ?>
            </div>
            <p class="help-inline">
                    Hint: You may login with <tt>demo/demo</tt> or <tt>admin/admin</tt>.
            </p>
	</div>

	<div class="control-group rememberMe">                       
            <div class="controls">
                <?php echo $form->checkBox($model,'rememberMe'); ?>
		<?php echo $form->label($model,'rememberMe'); ?>
		<?php echo $form->error($model,'rememberMe'); ?>
            </div>
	</div>

	<div class="control-group buttons">
            <?php echo $form->submitButton('Login'); ?>
	</div>

<?php $this->endWidget(); ?>
</div><!-- form -->
