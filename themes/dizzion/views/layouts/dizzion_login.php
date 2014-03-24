<?php include Yii::app()->theme->basePath . '/inc/config.php'; // Configuration php file       ?>
<!DOCTYPE html>
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">

        <title><?php echo $template['title'] ?></title>

        <meta name="description" content="<?php echo $template['description'] ?>">
        <meta name="robots" content="noindex, nofollow">
        <meta name="viewport" content="width=device-width,initial-scale=1">

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

        <?php Yii::app()->clientScript->registerScriptFile(Yii::app()->getAssetManager()->publish(Yii::app()->theme->basePath . '/js/vendor/jquery-1.9.1.min.js')); ?>
        <script>jQuery.noConflict();</script>
        <!-- Modernizr (Browser feature detection library) & Respond.js (Enable responsive CSS code on browsers that don't support them) -->
        <?php Yii::app()->clientScript->registerScriptFile(Yii::app()->getAssetManager()->publish(Yii::app()->theme->basePath . '/js/vendor/modernizr-2.6.2-respond-1.1.0.min.js')); ?>
        <?php Yii::app()->clientScript->registerScriptFile(Yii::app()->getAssetManager()->publish(Yii::app()->theme->basePath . '/js/vendor/bootstrap.min.js')); ?>
        <!--Commenting main.js since slim scroll stops working in latest news -->
        <?php //Yii::app()->clientScript->registerScriptFile(Yii::app()->getAssetManager()->publish(Yii::app()->theme->basePath . '/js/main.js')); ?>
        <script src="<?php echo Yii::app()->request->baseUrl; ?>/js/common.js" type="text/javascript"></script>  
        <script src="<?php echo Yii::app()->request->baseUrl; ?>/js/scroll1.js" type="text/javascript"></script>  
	<script src="<?php echo Yii::app()->request->baseUrl; ?>/js/scroll2.js" type="text/javascript"></script>  
    </head>

    <body class="loginPage">
        <div class="container-fluid">
            <!-- Login Container -->
            <div class="header">
                <div class="container">
                    <div class="headerLeft pull-left">
                        <img src="<?php echo Yii::app()->getAssetManager()->publish(Yii::app()->theme->basePath . '/img/template/logo.png'); ?>" alt="logo" class="logoImg">
                    </div>
                    <div class="headerRight pull-right">
                        <p>888-225-2974</p>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="loginContentHolder">
				<div class="loginImg">
					<img src="<?php echo Yii::app()->getAssetManager()->publish(Yii::app()->theme->basePath . '/img/template/loginBg.jpg'); ?>" alt="login">
				</div>
                <div class="container">

                   
                        <?php echo $content; ?>
                    

                    <!-- END Login Form -->
                </div>
               
              </div>
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="container-fluid">
            <div class="footer loginFooter">
                <p>Copyright &copy; 2013 Dizzion Inc.</p>
            </div>
        </div>
        <!-- END Login Container -->
    </body>
</html>
