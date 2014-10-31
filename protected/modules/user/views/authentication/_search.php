<script>
    $(document).on('click', '#search', function() {
        var dataString = "category_id="+$('#category_id').val()+"&AppName="+$('#AppInfoMasterForm_name').val();
        $.ajax({
            type: "POST",
            url: '<?php echo Yii::app()->createUrl('user/authentication/search'); ?>',
            data: dataString,
            success: function(message) {
                $('#app-dashboard').html(message);
            },
        });
        return false;
    });
</script>
<div class="formStructure">
    <?php
    $form = $this->beginWidget('EBootstrapActiveForm', array(
        'id' => 'app_dashboard_search',
        'horizontal' => true,
    ));
    ?>
    <div class="pull-right">
        <?php echo CHtml::hiddenField('category_id', 0, array('id' => 'category_id')); ?>
        <?php echo $form->textField($model, 'name', array('class' => 'example-typeahead', 'placeholder' => 'Search by name')); ?>
        <?php echo $form->submitButton('<i class="icon-search"></i>', array('name' => 'search', 'id' => 'search')); ?>
        <?php echo $form->error($model, 'name'); ?>
    </div>
    <div class="clearfix"></div>
    <?php $this->endWidget(); ?>
</div>
