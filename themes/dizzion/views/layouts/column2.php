<?php
if (CommonFunction::getRole() == AppConstants::$ROLES['SA'] ||
        CommonFunction::getRole() == AppConstants::$ROLES['GA'])
    $this->beginContent('//layouts/adminMain');
else if (CommonFunction::getRole() == AppConstants::$ROLES['CUST'])
    $this->beginContent('//layouts/customerMain');
?>
<?php echo $content; ?>
<?php $this->endContent(); ?>