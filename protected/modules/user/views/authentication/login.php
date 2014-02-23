<div id="login-container"class="pull-right">
    <!-- Login Buttons -->
    <div id="login-buttons">
        <h5 class="page-header-sub">Login for Dizzion User</h5>
    </div>
    <div class="loginForm">
        <?php
        $form = $this->beginWidget('EBootstrapActiveForm', array(
            'id' => 'login_form',
            'enableClientValidation' => true,
            'clientOptions' => array(
                //'validateOnSubmit'=>true,
                //'hideErrorMessage'=>true,
                'validationDelay' => 0,
                'afterValidateAttribute' => 'js:showAttributeErrorTooltip',
            //'afterValidate'=>'js:showFormErrorTooltip',
            ),
            'horizontal' => true,
        ));
        ?>
        <div class="span2">
            <!-- Flash message starts -->
            <?php
            if (Yii::app()->user->hasFlash('notice'))
                $this->widget('EBootstrapAlert', array('type' => 'success', 'message' => Yii::t('app', Yii::app()->user->getFlash('notice')), 'block' => true));
            else if (Yii::app()->user->hasFlash('error'))
                $this->widget('EBootstrapAlert', array('type' => 'error', 'message' => Yii::t('app', Yii::app()->user->getFlash('error')), 'block' => true));
            else
                $this->widget('EBootstrapFlashMessages');
            ?>
        </div>
        <!-- Flash message ends -->

        <!-- Login form starts -->
        <div class="control-group">
            <?php echo $form->labelEx($model, 'username'); ?>
            <div class="controls">
                <?php echo $form->textField($model, 'username'); ?>
                <?php echo $form->error($model, 'username'); ?>
            </div>
        </div>

        <div class="control-group">
            <?php echo $form->labelEx($model, 'password'); ?>
            <div class="controls">
                <?php echo $form->passwordField($model, 'password'); ?>
                <?php echo $form->error($model, 'password'); ?>
            </div>
        </div>

        <div class="control-group">
            <div class="formControl">
                <?php echo $form->submitButton('Login'); ?>
            </div>
        </div>
        <!-- Login form ends -->

        <?php $this->endWidget(); ?>
    </div>

    <!-- END Login Form -->
</div>
<?php $newscount = count($news); ?>
<div  id="login-container1">
    <!-- Login Buttons -->
    <div id="login-buttons1">
        <h5 class="page-header-sub">Notification</h5>
    </div>
    <div class="vert simply-scroll-container">
        <div class="simply-scroll-back simply-scroll-btn simply-scroll-btn-up"></div>
        <div class="simply-scroll-forward simply-scroll-btn simply-scroll-btn-down disabled"></div>
        <div class="simply-scroll-clip">
            <div id="newscategory" class="slides_container newscategory simply-scroll-list" style="height: 706px;">
                <div class="region region-latest-news">
                    <div class="block block-iigfeedsview" id="block-iigfeedsview-storieslist">
                        <h2><none></none></h2>  
                        <?php for ($i = 0; $i < $newscount; $i++) { ?>	
                            <div class="content">
                                <div class="viewNewsApps">
                                    <div class="slide" style="display: block;">
                                        <div class="info">
                                            <div><a target="_blank" href="http://mysupport.dizzion.com/News/NewsItem/View/<?php echo $news[$i]->id; ?>"><?php echo $news[$i]->subject; ?></a></div>
                                            <p><?php
                                                $originalDate = $news[$i]->dateline;
                                                date_default_timezone_set('US/Mountain');
                                                echo date("F d, Y h:i A", strtotime($originalDate));                                                                                          
                                              ?></p>
                                        </div>
                                    </div>		
                                </div>
                            </div>
<?php } ?>  
                    </div>
                </div>
            </div></div></div> 
    <!-- END Login Form -->
</div>
