<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
            <title><?php echo $template['title'] ?></title>
            <?php header('Cache-Control: max-age=900'); ?>
            <meta name="description" content="<?php echo $template['description'] ?>">
                <meta name="robots" content="noindex, nofollow">
                    <meta name="viewport" content="width=device-width,initial-scale=1">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
                        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
                            <!-- Stylesheets -->
                            <!--[if lt IE 9]>
                            <?php Yii::app()->getClientScript()->registerCssFile(Yii::app()->getAssetManager()->publish(Yii::app()->theme->basePath . '/css/ie.css')); ?>
                            <![endif]-->
                            <!-- The roboto font is included from Google Web Fonts -->
                            <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:400,400italic,700,700italic">

                                <?php Yii::app()->getClientScript()->registerCssFile(Yii::app()->getAssetManager()->publish(Yii::app()->theme->basePath . '/css/bootstrap.css')); ?>
                                <?php Yii::app()->getClientScript()->registerCssFile(Yii::app()->getAssetManager()->publish(Yii::app()->theme->basePath . '/css/plugins.css')); ?>
                                <?php Yii::app()->getClientScript()->registerCssFile(Yii::app()->getAssetManager()->publish(Yii::app()->theme->basePath . '/css/main.css')); ?>
                                <?php Yii::app()->getClientScript()->registerCssFile(Yii::app()->getAssetManager()->publish(Yii::app()->theme->basePath . '/css/style.css')); ?>
                                <?php Yii::app()->getClientScript()->registerCssFile(Yii::app()->getAssetManager()->publish(Yii::app()->theme->basePath . '/css/screen.scss')); ?>
                                <?php Yii::app()->getClientScript()->registerCssFile(Yii::app()->getAssetManager()->publish(Yii::app()->theme->basePath . '/css/dialogwarning.css')); ?>
                                <!-- Core jQuery -->
                                <?php Yii::app()->clientScript->registerCoreScript('jquery'); ?>
                                <?php //Yii::app()->clientScript->registerScriptFile(Yii::app()->getAssetManager()->publish(Yii::app()->theme->basePath . '/js/vendor/jquery-1.9.1.min.js')); ?>
                                <?php Yii::app()->clientScript->registerScriptFile(Yii::app()->getAssetManager()->publish(Yii::app()->theme->basePath . '/js/vendor/bootstrap.min.js')); ?>
                                <!-- Modernizr (Browser feature detection library) & Respond.js (Enable responsive CSS code on browsers that don't support them) -->
                                <?php Yii::app()->clientScript->registerScriptFile(Yii::app()->getAssetManager()->publish(Yii::app()->theme->basePath . '/js/vendor/modernizr-2.6.2-respond-1.1.0.min.js')); ?>
                                 <?php Yii::app()->clientScript->registerScriptFile(Yii::app()->getAssetManager()->publish(Yii::app()->theme->basePath . '/js/jquery-ui-1.8.9.js')); ?>
                                <?php Yii::app()->clientScript->registerScriptFile(Yii::app()->getAssetManager()->publish(Yii::app()->theme->basePath . '/js/idletimeout.js')); ?>
                                <?php Yii::app()->clientScript->registerScriptFile(Yii::app()->getAssetManager()->publish(Yii::app()->theme->basePath . '/js/idletimer.js')); ?>
                                <script src="<?php echo Yii::app()->request->baseUrl; ?>/js/common.js" type="text/javascript"></script>  
                                <!--Loading css based on organization -->
                                <?php
                                if (Yii::app()->session['theme'] == 'default') {
                                    Yii::app()->getClientScript()->registerCssFile(Yii::app()->getAssetManager()->publish(Yii::app()->theme->basePath . '/css/' . Yii::app()->session['theme'] . '.css'));
                                } else if (Yii::app()->session['theme'] == 'custom') {
                                    include Yii::app()->theme->basePath . '/css/custom.php';
                                } else {
                                    include Yii::app()->theme->basePath . '/css/colorThemes.php';
                                }
                                ?>
                                <!--Loading css based on organization -->
                                </head>
                               <script type="text/javascript">
                                    var timeout = <?php echo Yii::app()->getSession()->getTimeout(); ?>;
                                    var keep_alive_url = '<?php echo Yii::app()->createUrl('/site/keepalive'); ?>';
                                    var logout_url = '<?php echo Yii::app()->createUrl('/site/logout'); ?>';
                                </script>
                                <body<?php if ($template['layout'] == 'fixed') echo ' class="fixed"'; ?>>
                                    <!-- Page Container -->
                                    <div id="page-container">
                                        <!-- Header -->
                                        <header  class="navbar navbar-inverse<?php
                                        if ($template['header'] == 'fixed-top')
                                            echo ' navbar-fixed-top';
                                        else if ($template['header'] == 'fixed-bottom')
                                            echo ' navbar-fixed-bottom';
                                        ?>">
                                            <!-- Navbar Inner -->
                                            <div id="topbar" class="navbar-inner remove-radius remove-box-shadow">
                                                <!-- div#container-fluid -->
                                                <div class="container-fluid">
                                                    <!-- Mobile Navigation, Shows up  on smaller screens -->
                                                    <ul class="nav pull-right visible-phone visible-tablet" id="mob-nav">
                                                        <li class="divider-vertical remove-margin"></li>
                                                        <li>
                                                            <!-- It is set to open and close the main navigation on smaller screens. The class .nav-collapse was added to aside#page-sidebar -->
                                                            <a href="javascript:void(0)" data-toggle="collapse" data-target=".nav-collapse">
                                                                <i class="icon-reorder"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <!-- END Mobile Navigation -->

                                                    <!-- Logo -->
                                                    <?php
                                                    $logoDir = Yii::app()->basePath . AppConstants::LOGO_UPLOAD_PATH;
                                                    if (Yii::app()->session['logo'] != '' && file_exists($logoDir . Yii::app()->session['logo']))
                                                        $logo = Yii::app()->assetManager->publish($logoDir . Yii::app()->session['logo']);
                                                    else
                                                        $logo = Yii::app()->getAssetManager()->publish(Yii::app()->theme->basePath . '/img/template/logo.png');
                                                    ?>
                                                    <?php $dashboardUrl = (CommonFunction::getRole() == AppConstants::$ROLES['CUST']) ? 'user/authentication' : 'administrator/applications'; ?>
                                                    <a href="<?php echo Yii::app()->createUrl('/' . $dashboardUrl . '/dashboard'); ?>" class="brand"><img src="<?php echo $logo; ?>" alt="logo"></a>
                                                    <span class="slogan">Powered by Dizzion</span>
                                                    <!-- Loading Indicator, Used for demostrating how loading of widgets could happen, check main.js - uiDemo() -->
                                                    <div id="loading" class="hide pull-left"><i class="icon-certificate icon-spin"></i></div>

                                                    <!-- Application name-->
                                                    <span id="app_title"></span>
                                                    <!-- Application name-->
                                                    <!-- Header Widgets -->
                                                    <!-- You can create the widgets you want by replicating the following. Each one exists in a <li> element -->
                                                    <ul id="widgets" class="nav pull-right">
                                                        <li><i class="icon-user"></i></li>
                                                        <li><?php echo isset(Yii::app()->user->Displayname) ? Yii::app()->user->Displayname : ''; ?></li>
                                                        <li class="divider-vertical"></li>
                                                        <li class="userLogin"><?php echo CHtml::link('<i class="icon-off"></i>', array('/user/authentication/logout')) ?></li>
                                                    </ul>
                                                    <!-- customer app list menu starts-->
                                                    <div class="quickMenu pull-right customer-app-list" style="display:none" >
                                                        <div class="menuLink">
                                                            <a href="#">Quick Menu<b class="caret"></b></a>
                                                        </div>
                                                        <ul class="toggleMenu scrollable-menu" id="customer-app-list" style="display:none;">
                                                        </ul>
                                                    </div>
                                                    <div class="homeMenu pull-right" style="display:none" >
                                                        <a href="<?php echo Yii::app()->createUrl('/' . $dashboardUrl . '/dashboard'); ?>">Home</a>
                                                    </div>
                                                    <div class="backMenu pull-right" style="display:none" >
                                                        <a href="<?php echo Yii::app()->createUrl('/user/authentication/dashboard'); ?>">Back</a>
                                                    </div>
                                                    <!-- customer app list menu ends-->
                                                    <!-- END Header Widgets -->
                                                </div>
                                                <!-- END div#container-fluid -->
                                            </div>
                                            <!-- END Navbar Inner -->
                                        </header>
                                        <!-- END Header -->
                                        <!-- Session time out warning starts-->
                                        <div id="dialog" title="Your session is about to expire!">
                                                <p>
                                                   <span class="ui-icon ui-icon-alert" style="float:left; margin:0 7px 50px 0;"></span>
                                                    You will be logged off in <span id="dialog-countdown" style="font-weight:bold"></span> seconds.
                                                </p>

                                                <p>Do you want to continue your session?</p>
                                            </div>
                                        <!-- Session time out warning ends-->


                                        <!-- Inner Container -->
                                        <div id="inner-container">


<script type="text/javascript">
// setup the dialog
$("#dialog").dialog({
	autoOpen: false,
	modal: true,
	width: 400,
	height: 200,
	closeOnEscape: false,
	draggable: false,
	resizable: false,
	buttons: {		
		'Logout': {
                    class:"btn btn-secondary",
                    text:"Logout",                            
                    click:function(){
			// fire whatever the configured onTimeout callback is.
			// using .call(this) keeps the default behavior of "this" being the warning
			// element (the dialog in this case) inside the callback.
			$.idleTimeout.options.onTimeout.call(this);
		}
            },
                'Keep Session Active': {
                      class:"btn btn-primary",
                      text: "Keep Session Active",
                      click:  function(){
                    
			$(this).dialog('close');
                        location.reload(true);
                        
		}
            }
	}
});

// cache a reference to the countdown element so we don't have to query the DOM for it on each ping.
var $countdown = $("#dialog-countdown");

// start the idle timer plugin
$.idleTimeout('#dialog', 'div.ui-dialog-buttonpane button:first', {
        warningLength:120,
	idleAfter: timeout-120,
	pollingInterval: 2,
	keepAliveURL: keep_alive_url,
	serverResponseEquals: 'OK',
	onTimeout: function(){
		window.location = logout_url;
	},
	onIdle: function(){
		$(this).dialog("open");
	},
	onCountdown: function(counter){
		$countdown.html(counter); // update the counter
	}
});

</script>


