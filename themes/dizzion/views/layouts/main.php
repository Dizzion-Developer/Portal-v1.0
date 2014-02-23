<?php include Yii::app()->theme->basePath.'/inc/config.php'; // Configuration php file ?>
<?php include Yii::app()->theme->basePath.'/inc/top.php'; // Meta data and header ?>
<?php include Yii::app()->theme->basePath.'/inc/nav.php'; // Navigation content ?>

<!-- Page Content -->
<div id="page-content">
    <!-- Navigation info -->
   <ul id="nav-info" class="clearfix">
        <li><a href="index.php"><i class="icon-home"></i></a></li>
        <li class="active"><a href="">Dashboard</a></li>
    </ul>
    <!-- END Navigation info -->

   <h3 class="page-header">Dashboard</h3>
    <div class="dash-tiles row-fluid">
        <!-- Column 1 of Row 1 -->
        <div class="span3">
            <!-- Total Users Tile -->
            <div class="dash-tile dash-tile-ocean clearfix">
                <div class="dash-tile-header">
                   Applications
                </div>
                <div class="dash-tile-icon"><i class="icon-desktop"></i></div>
                <div class="dash-tile-text">56</div>
            </div>
          </div>
        <!-- END Column 1 of Row 1 -->

        <!-- Column 2 of Row 1 -->
        <div class="span3">
            <!-- Total Sales Tile -->
            <div class="dash-tile dash-tile-flower clearfix">
                <div class="dash-tile-header">
                   Organizations
                </div>
                <div class="dash-tile-icon"><i class="glyphicon-building"></i></div>
                <div class="dash-tile-text">126</div>
            </div>
          </div>
        <!-- END Column 2 of Row 1 -->

        <!-- Column 3 of Row 1 -->
        <div class="span3">
            <!-- Popularity Tile -->
            <div class="dash-tile dash-tile-oil clearfix">
                <div class="dash-tile-header">
                   Role
                </div>
                <div class="dash-tile-icon"><i class="icon-group"></i></div>
                <div class="dash-tile-text">04</div>
            </div>
          </div>
        <!-- END Column 3 of Row 1 -->

        <!-- Column 4 of Row 1 -->
        <div class="span3">
            <!-- RSS Subscribers Tile -->
            <div class="dash-tile dash-tile-balloon clearfix">
                <div class="dash-tile-header">
                   Users
                </div>
                <div class="dash-tile-icon"><i class="icon-user"></i></div>
                <div class="dash-tile-text">738</div>
            </div>
         </div>
        <!-- END Column 4 of Row 1 -->
    </div>
   </div>
<!-- END Page Content -->

<?php include Yii::app()->theme->basePath.'/inc/footer.php'; // Footer and scripts ?>

<?php include Yii::app()->theme->basePath.'/inc/bottom.php'; // Close body and html tags ?>
