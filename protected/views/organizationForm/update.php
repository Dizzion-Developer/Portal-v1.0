<?php
$this->breadcrumbs=array(
	Yii::t('app', 'Organization Forms')=>array('index'),
	$model->organization_id=>array('view','id'=>$model->organization_id),
	Yii::t('app', 'Update'),
);

$this->menu=array(
	array('label'=>Yii::t('app', 'Create OrganizationForm'), 'url'=>array('create')),
	array('label'=>Yii::t('app', 'View OrganizationForm'), 'url'=>array('view', 'id'=>$model->organization_id)),
	array('label'=>Yii::t('app', 'Manage OrganizationForm'), 'url'=>array('index')),
);
?>

<h1><?php echo Yii::t('app', 'Update OrganizationForm '); ?></h1>

<?php echo $this->renderPartial('_form', array('model'=>$model)); ?>