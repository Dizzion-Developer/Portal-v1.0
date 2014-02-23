<?php include Yii::app()->theme->basePath.'/inc/config.php'; // Configuration php file ?>
<?php include Yii::app()->theme->basePath.'/inc/top.php'; // Meta data and header ?>
<?php include Yii::app()->theme->basePath.'/inc/nav.php'; // Navigation content ?>
<!-- Page Content -->
<div id="page-content">
    <?php echo $content; ?>
</div>
<?php include Yii::app()->theme->basePath.'/inc/footer.php'; // Footer and scripts ?>
<?php include Yii::app()->theme->basePath.'/inc/bottom.php'; // Close body and html tags ?>
