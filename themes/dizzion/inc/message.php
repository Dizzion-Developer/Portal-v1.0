<div class="custom-flash-message" style="display:none">
    <div class="alert fade in alert-success"><a data-dismiss="alert" class="close" href="#">×</a>
        <span id="custom-flash-message"></span>
    </div>
</div>
<div class="custom-error-flash-message" style="display:none">
    <div class="alert fade in alert-error"><a data-dismiss="alert" class="close" href="#">×</a>
        <span id="custom-error-flash-message"></span>
    </div>
</div>
<?php
if (Yii::app()->user->hasFlash('notice'))
    $this->widget('EBootstrapAlert', array('type' => 'success', 'message' => Yii::t('app', Yii::app()->user->getFlash('notice')), 'block' => true));
else if (Yii::app()->user->hasFlash('error'))
    $this->widget('EBootstrapAlert', array('type' => 'error', 'message' => Yii::t('app', Yii::app()->user->getFlash('error')), 'block' => true));
else if (Yii::app()->user->hasFlash('exception'))
    $this->widget('EBootstrapAlert', array('type' => 'error', 'message' => Yii::t('app', Yii::app()->user->getFlash('exception')), 'block' => true));
else
    $this->widget('EBootstrapFlashMessages');
?>