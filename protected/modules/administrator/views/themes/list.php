<?php $type = $model->attributes['type']; ?>
<style>
    /*Theme-Heading change*/
    .Themeheading {
        /* IE9 SVG, needs conditional override of 'filter' to 'none' */
        background: -moz-linear-gradient(left, #ffffff 0%,<?php echo ($type != AppConstants::$THEME_COLORS['default']) ? $theme['header'] : '' ?> 93%); /* FF3.6+ */
        background: -webkit-gradient(linear, left top, right top, color-stop(0%,#ffffff), color-stop(93%,<?php echo ($type != AppConstants::$THEME_COLORS['default']) ? $theme['header'] : '' ?>)); /* Chrome,Safari4+ */
        background: -webkit-linear-gradient(left, #ffffff 0%,<?php echo ($type != AppConstants::$THEME_COLORS['default']) ? $theme['header'] : '' ?> 93%); /* Chrome10+,Safari5.1+ */
        background: -o-linear-gradient(left, #ffffff 0%,<?php echo ($type != AppConstants::$THEME_COLORS['default']) ? $theme['header'] : '' ?> 93%); /* Opera 11.10+ */
        background: -ms-linear-gradient(left, #ffffff 0%,<?php echo ($type != AppConstants::$THEME_COLORS['default']) ? $theme['header'] : '' ?> 93%); /* IE10+ */
        background: linear-gradient(to right, #ffffff 0%,<?php echo ($type != AppConstants::$THEME_COLORS['default']) ? $theme['header'] : '' ?> 93%); /* W3C */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='<?php echo ($type != AppConstants::$THEME_COLORS['default']) ? $theme['header'] : '' ?>',GradientType=1 ); /* IE6-8 */
    }
    /*Theme-Breadcrumb change*/
    .Theme-Breadcrumb li.active a {
        color: <?php echo $theme['header']; ?>;
    }
    /*Theme table*/
    .themehove .nav-dash li a:hover
    {
        background:<?php echo $theme['hover']; ?>;
        border:1px solid <?php echo $theme['hover']; ?>;
    }
    table .btn-group a,table .btn-group a:hover,table .btn-group a:focus {
        color: #FFFFFF !important;
    }
    .pagination ul > .active > a, .pagination ul > .active > a:hover, .pagination ul > .active > span {
        background-color: <?php echo $theme['link']; ?>;
        border: 1px solid <?php echo $theme['link']; ?>;
        color: #FFFFFF;
    }
    /*Theme pagesidebar*/
    #theme-sidebar #primary-nav li a:hover
    {
        background:<?php echo $theme['hover']; ?>;
    }

    #theme-sidebar #primary-nav li a.active{
        background: none repeat scroll 0 0 #555555;
        border-left: 5px solid <?php echo $theme['hover']; ?>;
    }
    #theme-sidebar #primary-nav li a
    {
        background:#888;
    }
    .Theme-Breadcrumb #nav-info > li.active a {
        color: <?php echo $theme['link']; ?>;
    }
    .nav-dash li a:hover
    {
        background:<?php echo $theme['hover']; ?>;
        border:1px solid <?php echo $theme['hover']; ?>
    }
    .input-prepend.theme .add-on {
        background: none repeat scroll 0 0 <?php echo $theme['button']; ?>;
        margin-top: 0;
    }

    .dataTables_paginate.paging_bootstrap.pagination ul li a {
        color: #848484;
    }

    .dataTables_paginate.paging_bootstrap.pagination ul li.active a {
        color: #fff;
    }
    .theme-edit img {
        background: none repeat scroll 0 0 <?php echo $theme['button']; ?>;
        padding: 4px;
    }
    .theme-deactivate img {
        background: none repeat scroll 0 0 #333333;
        padding: 4px;
    }

    #example-datatables td a {
        color:  <?php echo $theme['link']; ?>;
    }

</style>
<?php Yii::app()->getClientScript()->registerCssFile(Yii::app()->getAssetManager()->publish(Yii::app()->theme->basePath . '/css/themes.css')); ?>
<!-- Navigation info -->
<?php
echo CommonFunction::getBreadCrum(array(
    array('name' => 'Color Theme', 'url' => '/administrator/themes/create'),
));
?>
<!-- END Navigation info -->

<!-- Page Header starts -->
<?php echo CommonFunction::getHeader('Color Themes'); ?>
<!-- Flash Message starts -->
<?php include Yii::app()->theme->basePath . '/inc/message.php'; // Configuration php file     ?>
<!-- Flash Message ends -->
<!-- Page Header ends -->

<!-- create form starts -->
<div id="create-form">
    <?php
    $this->renderPartial('_form', array('model' => $model, 'type' => $type, 'org_name' => $org_name));
    ?>
</div>
<!-- create form ends -->

<!-- Page Content ---->

<div class="clearfix"></div>
<div class="Themeheading">
    <img alt="logo" src="<?php echo Yii::app()->getAssetManager()->publish(Yii::app()->theme->basePath . '/img/template/logo.png'); ?>">
</div>
<!-- Navigation info -->

<div class="clearfix"></div>
<aside class="nav-collapse collapse" id="theme-sidebar">
    <nav id="primary-nav">
        <ul>
            <li>
                <a href="#"><i class="icon-fire"></i>Dashboard</a>
            </li>
            <li>
                <a  href="#"><i class="icon-cog"></i>Applications</a>
            </li>
            <li>
                <a  href="#"><i class="icon-user"></i>Organisation</a>
            </li>
            <li>
                <a  href="#"><i class="icon-fire"></i>Role</a>
            </li>
            <li>
                <a class="active" href="#"><i class="icon-fire"></i>User</a>
            </li>
        </ul>    
    </nav>
</aside>
<div class="Theme-Breadcrumb">
    <ul id="nav-info" class="clearfix" style="display:block; margin-top:0; border-bottom:none; margin-bottom:0;">
        <li><a href="#"><i class="icon-home"></i></a></li>
        <li><a href="javascript:void(0)">User</a></li>
        <li class="active"><a href="#">List</a></li>
    </ul>
</div>
<!--Commenting since circle menus where not implemented -->

<!--<div class="themehover">
    <ul class="nav-dash">
        <li>
            <a class="active" title="" data-toggle="tooltip" href="javascript:void(0)" data-original-title="Users">
                <i class="icon-user"></i>
            </a>
        </li>
        <li>
            <a title="" data-toggle="tooltip" href="javascript:void(0)" data-original-title="Comments">
                <i class="icon-comments"></i> <span class="badge badge-success">3</span>
            </a>
        </li>
        <li>
            <a title="" data-toggle="tooltip" href="javascript:void(0)" data-original-title="Calendar">
                <i class="icon-calendar"></i> <span class="badge badge-inverse">5</span>
            </a>
        </li>
        <li>
            <a title="" data-toggle="tooltip" href="javascript:void(0)" data-original-title="Photos">
                <i class="icon-camera-retro"></i>
            </a>
        </li>
        <li>
            <a title="" data-toggle="tooltip" href="javascript:void(0)" data-original-title="Projects">
                <i class="icon-paper-clip"></i>
            </a>
        </li>
        <li>
            <a title="" data-toggle="tooltip" href="javascript:void(0)" data-original-title="Tasks">
                <i class="icon-tasks"></i> <span class="badge badge-warning">1</span>
            </a>
        </li>
        <li>
            <a title="" data-toggle="tooltip" href="javascript:void(0)" data-original-title="Reader">
                <i class="icon-book"></i>
            </a>
        </li>
        <li>
            <a title="" data-toggle="tooltip" href="javascript:void(0)" data-original-title="Settings">
                <i class="icon-cogs"></i>
            </a>
        </li>
    </ul>
</div>-->
<br /><div class="clearfix"></div>
<!-- Theme-tables-->
<div role="grid" class="dataTables_wrapper form-inline theme-table" id="example-datatables_wrapper"><div class="row-fluid"><div class="span6"><div id="example-datatables_length" class="dataTables_length"><label><select name="example-datatables_length" size="0" aria-controls="example-datatables"><option value="10" selected="selected">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select></label></div></div><div class="span6"><div class="dataTables_filter" id="example-datatables_filter"><label><div class="input-prepend theme"><span class="add-on"><i class="icon-search"></i></span><input type="text" aria-controls="example-datatables"></div></label></div></div></div><table class="table table-striped table-bordered table-hover dataTable" id="example-datatables" aria-describedby="example-datatables_info">
        <thead>
            <tr role="row"></th><th class="span1 hidden-phone sorting" role="columnheader" tabindex="0" aria-controls="example-datatables" rowspan="1" colspan="1" style="width: 44px;" aria-label="#: activate to sort column ascending">#</th><th class="sorting" role="columnheader" tabindex="0" aria-controls="example-datatables" rowspan="1" colspan="1" style="width: 400px;" aria-label=" Username: activate to sort column ascending"><i class="icon-user"></i> User Name</th><th class="hidden-phone hidden-tablet sorting" role="columnheader" tabindex="0" aria-controls="example-datatables" rowspan="1" colspan="1" style="width: 400px;" aria-label=" Email: activate to sort column ascending"><i class="icon-bolt"></i> Action</th></tr>
        </thead>

        <tbody role="alert" aria-live="polite" aria-relevant="all">
            <?php for ($i = 1; $i <= 5; $i++) { ?>
                <tr class="odd">

                    <td class="span1 hidden-phone "><?php echo $i; ?></td>
                    <td class=" "><a href="javascript:void(0)">username<?php echo $i; ?></a></td>
                    <td class="hidden-phone hidden-tablet "><div class="btn-group">
                            <a class="theme-edit" title="" data-toggle="tooltip" href="javascript:void(0)" data-original-title="Edit"><img alt="" src="<?php echo Yii::app()->request->baseUrl; ?>/images/edit.png"></a>
                            <a class="theme-deactivate" title="" data-toggle="tooltip" href="javascript:void(0)" data-original-title="Delete"><img alt="" src="<?php echo Yii::app()->request->baseUrl; ?>/images/deactivate.png"></a>
                        </div></td>

                </tr>
            <?php } ?>
        </tbody></table><div class="row-fluid"><div class="span5"><div class="dataTables_info" id="example-datatables_info"><strong>1</strong>-<strong>10</strong> of <strong>30</strong></div></div><div class="span7"><div class="dataTables_paginate paging_bootstrap pagination"><ul style="padding-right:10px;"><li class="prev disabled"><a href="javascript:void(0)"><i class="icon-chevron-left"></i> </a></li><li class="active"><a href="javascript:void(0)">1</a></li><li><a href="javascript:void(0)">2</a></li><li><a href="javascript:void(0)">3</a></li><li class="next"><a href="javascript:void(0)"> <i class="icon-chevron-right"></i></a></li></ul></div></div></div></div>

</div>  
<!-- END Page Content -->
