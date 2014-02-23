<?php include Yii::app()->theme->basePath.'/inc/config.php'; // Configuration php file ?>
<?php include Yii::app()->theme->basePath.'/inc/top.php'; // Meta data and header ?>
<!-- Page Content -->
<div id="page-content" class="errorPage">
    <div class="offset2 span8">
     <div class=" error-container">
        <div class="error-code"><i class="icon-warning-sign"></i></div>
           <div class="error-text">
			   <?php echo $content; ?>
			</div>
                
        </div>
     </div>
</div>
<?php include Yii::app()->theme->basePath.'/inc/footer.php'; // Footer and scripts ?>
<?php include Yii::app()->theme->basePath.'/inc/bottom.php'; // Close body and html tags ?>
