<?php
$this->breadcrumbs=array(
	Yii::t('app', 'Organization Forms')=>array('index'),
	Yii::t('app', 'Create'),
);

$this->menu=array(
	array('label'=>Yii::t('app', 'Manage OrganizationForm'), 'url'=>array('index')),
);
?>

<h1><?php echo Yii::t('app', 'Create OrganizationForm '); ?></h1>

<?php echo $this->renderPartial('_form', array('model'=>$model)); ?>