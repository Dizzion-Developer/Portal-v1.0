<?php
/*
 * Theme    : Main
 * Author   : Payoda
 * Created  : June 25, 2012
 * Version  : 1.0
 */
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="language" content="en" />

        <!-- bootstrap CSS framework -->
        <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->theme->baseUrl; ?>/css/bootstrap.css" />
        <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->theme->baseUrl; ?>/css/bootstrap-responsive.css" />

        <!-- SCSS framework -->
        <?php Yii::app()->getClientScript()->registerCssFile(Yii::app()->getAssetManager()->publish(Yii::app()->theme->basePath.'/css/screen.scss')); ?>
        <?php Yii::app()->getClientScript()->registerCssFile(Yii::app()->getAssetManager()->publish(Yii::app()->theme->basePath.'/css/print.scss')); ?>
        <!--[if lt IE 8]>
        <?php Yii::app()->getClientScript()->registerCssFile(Yii::app()->getAssetManager()->publish(Yii::app()->theme->basePath.'/css/ie.scss')); ?>
        <![endif]-->

        <!-- Core jQuery -->
        <?php Yii::app()->clientScript->registerCoreScript('jquery'); ?>

	<title><?php echo CHtml::encode($this->pageTitle); ?></title>
</head>

<body>

<div class="container" id="page">

        <div class="row"><!--Header-->
            <div class="span12">
                <div class="language"><?php $this->widget('LangBox'); ?></div>
                <div id="logo"><?php echo CHtml::encode(Yii::t('app', Yii::app()->name)); ?></div>
            </div>
        </div><!--Header-->

        <div class="row"><!--Menu-->
            <div class="span12">
            <?php $this->widget('EBootstrapNavigation',array(
			'items'=>array(
				array('label'=>Yii::t('app', 'Home'), 'url'=>array('/site/index')),
				array('label'=>Yii::t('app', 'About'), 'url'=>array('/site/page', 'view'=>'about')),
				array('label'=>Yii::t('app', 'Contact'), 'url'=>array('/site/contact')),
                                array('label'=>Yii::t('app', 'Sample Controls'), 'url'=>array('/site/sample')),
				array('label'=>Yii::t('app', 'Login'), 'url'=>array('/user/authentication/login'), 'visible'=>Yii::app()->user->isGuest),
				array('label'=>Yii::t('app', 'Logout ('.Yii::app()->user->name.')'), 'url'=>array('/user/authentication/logout'), 'visible'=>!Yii::app()->user->isGuest),
			),
		)); ?>
            </div>
        </div><!--Menu-->

        <div class="row"><!--Breadcrumbs-->
            <div class="span12 breadCrumb">

	<?php if(isset($this->breadcrumbs)):?>
		<?php $this->widget('EBootstrapBreadcrumbs', array(
			'links'=>$this->breadcrumbs,
		)); ?><!-- breadcrumbs -->
	<?php endif?>
            </div>
        </div><!--Breadcrumbs-->
        
        <?php
        if(Yii::app()->user->hasFlash('notice'))
            $this->widget('EBootstrapAlert', array('type' => 'success', 'message' => Yii::t('app', Yii::app()->user->getFlash('notice')), 'block' => true));
        else if(Yii::app()->user->hasFlash('error'))
            $this->widget('EBootstrapAlert', array('type' => 'error', 'message' => Yii::t('app', Yii::app()->user->getFlash('error')), 'block' => true));
        else
            $this->widget('EBootstrapFlashMessages');
        ?>
            <?php echo $content; ?>

	<div class="row"><!--footer-->
            <div class="span12" id="footer">
		Copyright &copy; <?php echo date('Y'); ?> by My Company.<br/>
		All Rights Reserved.<br/>
		<?php echo Yii::powered(); ?>
            </div>
	</div><!-- footer -->
</div><!-- page -->

<!-- bootstrap JS framework -->
<?php Yii::app()->clientScript->registerScriptFile(Yii::app()->theme->baseUrl.'/js/bootstrap.js'); ?>
<script src="<?php echo Yii::app()->request->baseUrl; ?>/js/common.js" type="text/javascript"></script>  
</body>
</html>