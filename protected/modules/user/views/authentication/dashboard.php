<script type="text/javascript">
    if ('<?php echo CommonFunction::getRole(); ?>' != '<?php echo AppConstants::$ROLES['CUST']; ?>') {
        $(".homeMenu").show();
        $(".homeMenu").css('left', '78px');
    }

</script>

<?php if (count($app_info) > 0) { ?>
<div class="customer_header">
    <!-- Category navigation starts-->
    <?php $this->renderPartial('categoryNav', array('category_nav' => $category_nav)); ?>
    <!-- Navigation info -->
    <?php
    echo CommonFunction::getBreadCrum(array(
        array('name' => 'Application Dashboard', 'url' => '/user/authentication/dashboard'
        ), array('name' => 'All', 'url' => ''
        ),));
    ?>
    <!-- END Navigation info -->
<?php echo CommonFunction::getHeader('My Applications'); ?>
    <!-- Category navigation ends-->
</div>
 <!-- Search form starts-->

  <!-- Search form ends-->
    <div id ="app-dashboard">
        <div class="carousel remove-margin" id="example-carousel2">
            <!-- Carousel items -->
            <div class="carousel-inner">
                <?php
                for ($i = 0; $i < ceil(count($app_info) / 9); $i++) {
                    $active_class = ($i == 0) ? 'active' : '';
                    ?>

                    <div class="item <?php echo $active_class; ?>">
                        <?php
                        for ($j = $i * 9, $k = 0; ($k < 9 && $j < count($app_info)); $k++, $j++) {
                            $tile_class = AppConstants::$APP_TILE[0];  // By default one color for all tiles 
                            ?>
            <?php if ($app_info[$j]['type'] == 'Y') { ?>
                                <div onclick="window.location.href = '<?php echo Yii::app()->createUrl('user/authentication/application/appId/') . '/' . base64_encode($app_info[$j]['id']); ?>'" class="span3">
                                    <div class="dash-tile <?php echo $tile_class; ?> clearfix" style="background-color:<?php echo ($app_info[$j]['icon_color'] != '') ? $app_info[$j]['icon_color'] : ''; ?>">
                                        <div class="dash-tile-header"><?php echo $app_info[$j]['name']; ?>
                                        </div>
                                        <div class="dash-tile-icon"><?php echo $app_info[$j]['icon']; ?></div>
                                        <div class="dash-tile-desc"> <?php echo $app_info[$j]['description']; ?></div>
                                    </div>
                                </div>
            <?php } else { ?>
                                <a href = "<?php echo $app_info[$j]['url']; ?>" target="_blank" class="span3">
                                    <div class="dash-tile <?php echo $tile_class; ?> clearfix" style="background-color:<?php echo ($app_info[$j]['icon_color'] != '') ? $app_info[$j]['icon_color'] : ''; ?>">
                                        <div class="dash-tile-header"><?php echo $app_info[$j]['name']; ?>
                                        </div>
                                        <div class="dash-tile-icon"><?php echo $app_info[$j]['icon']; ?></div>
                                        <div class="dash-tile-desc"> <?php echo $app_info[$j]['description']; ?></div>
                                    </div>
                                </a>
            <?php } ?>
                    <?php } ?>
                    </div>

    <?php } ?>

            </div>

            <!-- Carousel nav -->
            <a data-slide="prev" href="#example-carousel2" class="carousel-control left">‹</a>
            <a data-slide="next" href="#example-carousel2" class="carousel-control right">›</a>
        </div>

    </div>
    <?php
} else { ?>
<div class ="no_application">
<div class="customer_header">
    <?php
    echo CommonFunction::getBreadCrum(array(
        array('name' => 'Application Dashboard', 'url' => '/user/authentication/dashboard'
        ), ));
    ?>
    <!-- END Navigation info -->
<?php echo CommonFunction::getHeader('My Applications'); ?>
    <!-- Category navigation ends-->
</div>
<?php
    echo "<div class='no-app'><span>" . AppConstants::NO_APP . "<span></div>";
}
?>
</div>