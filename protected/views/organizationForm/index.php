<?php
$this->breadcrumbs=array(
        Yii::t('app', 'Organization Forms'),
);

$this->menu=array(
        array('label'=>Yii::t('app', 'Create OrganizationForm'), 'url'=>array('create')),
);

Yii::app()->clientScript->registerScript('search', "
$('.search-button').click(function(){
        $('.search-form').toggle();
        return false;
});
$('.search-form form').submit(function(){
        $.fn.yiiGridView.update('organization-form-grid', {
                data: $(this).serialize()
        });
        return false;
});
");
?>

<h1><?php echo Yii::t('app', 'Manage Organization Forms '); ?></h1>

<?php echo CHtml::link(Yii::t('app', 'Advanced Search'),'#',array('class'=>'search-button')); ?>
<div class="search-form" style="display:none">
<?php $this->renderPartial('_search',array(
        'model'=>$model,
)); ?>
</div><!-- search-form -->
<div class="container grid">
<?php $this->widget('EBootstrapGridView', array(
        'id'=>'organization-form-grid',
        'dataProvider'=>$model->search(),
        'filter'=>$model,
        'columns'=>array(
		'organization_id',
		'organization_name',
		'customer_id',
		'distinguished_name',
                array(
                        'class'=>isset(Yii::app()->theme->name) ? 'EBootstrapButtonColumn' : 'zii.widgets.grid.CButtonColumn',
                ),
        ),
        'cssFile' => isset(Yii::app()->theme->name) ? false : true,
)); ?>
</div>