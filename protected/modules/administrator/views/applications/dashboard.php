<!-- Navigation info -->
<?php echo CommonFunction::getBreadCrum(array(
                                     array('name'=>'Admin Dashboard','url'=>'/administrator/applications/dashboard'))); ?>
<!-- END Navigation info -->
<?php echo CommonFunction::getHeader('Dashboard'); ?>
<div class="dash-tiles row-fluid">
    <!-- Column 1 of Row 1 -->
    <div class="span3" onclick="window.location.href = '<?php echo Yii::app()->createUrl('administrator/applications/create') ?>'">
        <!-- Total Users Tile -->
        <div class="dash-tile dash-tile-ocean clearfix">
            <div class="dash-tile-header">
                Applications
            </div>
            <div class="dash-tile-icon"><i class="icon-desktop"></i></div>
            <div class="dash-tile-text"><a href="#"><?php echo $data['appcount']; ?></a></div>
        </div>
    </div>
    <!-- END Column 1 of Row 1 -->

    <!-- Column 2 of Row 1 -->
    <div class="span3" onclick="window.location.href = '<?php echo Yii::app()->createUrl('administrator/organisations/create') ?>'" >
        <!-- Total Sales Tile -->
        <div class="dash-tile dash-tile-flower clearfix">
            <div class="dash-tile-header">                
                Organizations
            </div>
            <div class="dash-tile-icon"><i class="glyphicon-building"></i></div>
            <div class="dash-tile-text"><a href="#"><?php echo $data['orgcount']; ?></a></div>
        </div>
    </div>
    <!-- END Column 2 of Row 1 -->

    <!-- Column 3 of Row 1 -->
    <div class="span3" onclick="window.location.href = '<?php echo Yii::app()->createUrl('administrator/applicationaccess/createappaccessname') ?>'" >
        <!-- Popularity Tile -->
        <div class="dash-tile dash-tile-oil clearfix">
            <div class="dash-tile-header">                  
                Roles
            </div>
            <div class="dash-tile-icon"><i class="icon-group"></i></div>
            <div class="dash-tile-text"><a href="#"><?php echo $data['rolecount']; ?></a></div>
        </div>
    </div>
    <!-- END Column 3 of Row 1 -->
    <!-- Column 4 of Row 1 -->
    <div class="span3" onclick="window.location.href = '<?php echo Yii::app()->createUrl('administrator/users/create') ?>'">
        <!-- Popularity Tile -->
        <div class="dash-tile dash-tile-doll clearfix">
            <div class="dash-tile-header">                  
                Users
            </div>
            <div class="dash-tile-icon"><i class="glyphicon-parents"></i></div>
            <div class="dash-tile-text"><a href="#"><?php echo $data['usercount']; ?></a></div>
        </div>
    </div>
    <!-- END Column 4 of Row 1 -->
</div>