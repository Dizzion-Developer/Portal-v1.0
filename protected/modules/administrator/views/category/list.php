<style>
    /*To make current page link disabled in pagination bar */
    .ui-state-disabled{
        pointer-events:none;
    }
</style>
<script type="text/javascript">
    $(document).ready(function() {
        if ('<?php echo ($updateModel != '') ? true : false; ?>') {
            $('.page-header').html('Edit Category');
            $('#create-form').css('display', 'none');
        }
        if ('<?php echo $showCreateForm; ?>') {
            $('.page-header').html('Add Category');
            $('#create-form').show();
        }
        
        //Setting page info if page is loaded after submit
        if ('<?php echo count($_GET); ?>' > 0) {
            var displayLength = '<?php echo (isset($_GET['iDisplayLength'])) ? $_GET['iDisplayLength'] : ''; ?>';
            var displayStart = '<?php echo (isset($_GET['iDisplayStart'])) ? $_GET['iDisplayStart'] : ''; ?>';
            $('#CategoryMasterForm_displayLength').val(displayLength);
            $('#CategoryMasterForm_displayStart').val(displayStart);
        }
    });

    function retainPagingInfo(aoData) {
        var displayLength = jQuery.grep(aoData, function(jsonInfo, i) {
            return jsonInfo.name == 'iDisplayLength';
        });
        var displayStart = jQuery.grep(aoData, function(jsonInfo, i) {
            return jsonInfo.name == 'iDisplayStart';
        });

        $('#CategoryMasterForm_displayLength').val(displayLength[0].value);
        $('#CategoryMasterForm_displayStart').val(displayStart[0].value);
    };


    $(window).bind("load", function() {
        $('#DataTables_Table_0_filter input[type=text]').attr("placeholder", "Search by category name");
    });

    // function to change status of the category
    function statusChange(categoryId) {
        $.ajax({
            url: '<?php echo Yii::app()->createUrl('administrator/category/statuschange/categoryId/') ?>' + '/' + categoryId,
            type: 'GET',
            dataType: 'JSON',
            success: function(message) {
                var table_id = $('#category table[id]').attr('id');
                $('#' + table_id).dataTable().fnDraw();
                $('.alert-block').hide();
                if (message.status == 'success') {
                    $(".custom-error-flash-message").hide();
                    $("#custom-flash-message").html(message.message);
                    $(".custom-flash-message").show();
                } else {
                    $(".custom-flash-message").hide();
                    $("#custom-error-flash-message").html(message.message);
                    $(".custom-error-flash-message").show();
                }
            }
        });
    }
    //Function to delete the category
    function deleteCategory(categoryId){
       $.ajax({
            url: '<?php echo Yii::app()->createUrl('administrator/category/delete/categoryId/') ?>' + '/' + categoryId,
            type: 'GET',
            dataType: 'JSON',
            success: function(message) {
                var table_id = $('#category table[id]').attr('id');
               // $('#' + table_id).dataTable().fnDraw();
                $('.alert-block').hide();
                if (message.status == 'success') {
                    $('#' + table_id).dataTable().fnDeleteRow();
                    $(".custom-error-flash-message").hide();
                    $("#custom-flash-message").html(message.message);
                    $(".custom-flash-message").show();
                } else {
                    $(".custom-flash-message").hide();
                    $("#custom-error-flash-message").html(message.message);
                    $(".custom-error-flash-message").show();
                }
            }
        });
    }
</script> 

<!-- Navigation info -->
<?php echo CommonFunction::getBreadCrum(array(
                                            array('name'=>'Application','url'=>'/administrator/category/create'), 
                                            array('name'=>'Category','url'=>'/administrator/category/create')
                                             )); ?>
<!-- END Navigation info -->

<!-- Page Header starts -->
<?php echo CommonFunction::getHeader('Category Management'); ?>
<!-- Flash Message starts -->
<?php include Yii::app()->theme->basePath . '/inc/message.php'; // Configuration php file  ?>
<!-- Flash Message ends -->
<!-- Page Header ends -->

<!-- create form starts -->
<div id="create-form">
    <?php
    if ($model != '')
        $this->renderPartial('_form', array('model' => $model, 'type' => 'add'));
    ?>
</div>
<!-- create form ends -->
<!-- update form starts -->
<div id="update-form">
    <?php
    if ($updateModel != '')
        $this->renderPartial('_form', array('model' => $updateModel, 'type' => 'update'));
    ?>
</div>
<!-- update form ends -->

<!-- List starts -->
<?php
$widget->run();
?>
<!-- List ends -->
