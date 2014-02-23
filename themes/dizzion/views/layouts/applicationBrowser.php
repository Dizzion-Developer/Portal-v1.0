<?php include Yii::app()->theme->basePath.'/inc/config.php'; // Configuration php file ?>
<?php include Yii::app()->theme->basePath.'/inc/top.php'; // Meta data and header ?>
<!-- Page Content -->
<div>
    <?php echo $content; ?>
</div>
<?php include Yii::app()->theme->basePath.'/inc/footer.php'; // Footer and scripts ?>
<?php include Yii::app()->theme->basePath.'/inc/bottom.php'; // Close body and html tags ?>
<script type="text/javascript">
    $(document).ready(function(){
        $('#mob-nav').addClass('hidden-phone');
        $('#mob-nav').removeClass('visible-phone');
    });
</script>