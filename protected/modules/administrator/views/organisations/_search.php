<div class="formStructure">
    <?php
    $form = $this->beginWidget('EBootstrapActiveForm', array(
        'id' => 'org_mgmt_search',
        'horizontal' => true,
    ));
    ?>
    <div class="pull-left">
        <?php echo $form->textField($model, 'org_name', array('class' => 'example-typeahead', 'placeholder' => 'Search by name')); ?>
        <?php echo $form->submitButton('<i class="icon-search"></i>', array('name' => $type, 'id' => $type)); ?>
        <?php echo $form->error($model, 'org_name'); ?>
    </div>
    <div class="clearfix"></div>
    <?php $this->endWidget(); ?>
</div>
