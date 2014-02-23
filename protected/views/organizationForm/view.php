<?php
$this->breadcrumbs=array(
	Yii::t('app', 'Organization Forms')=>array('index'),
);

$this->menu=array(
	array('label'=>Yii::t('app', 'Create OrganizationForm'), 'url'=>array('create')),
	array('label'=>Yii::t('app', 'Update OrganizationForm'), 'url'=>array('update', 'id'=>$model->organization_id)),
	array('label'=>Yii::t('app', 'Delete OrganizationForm'), 'url'=>'#', 'linkOptions'=>array('submit'=>array('delete','id'=>$model->organization_id),'confirm'=>'Are you sure you want to delete this item?')),
	array('label'=>Yii::t('app', 'Manage OrganizationForm'), 'url'=>array('index')),
);
?>

<h1><?php echo Yii::t('app', 'View OrganizationForm '); ?></h1>

<?php $this->widget('EBootstrapDetailView', array(
	'data'=>$model,
	'attributes'=>array(
		'organization_id',
		'organization_name',
		'customer_id',
		'distinguished_name',
	),
)); ?>
