<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
?>
<!-- Page Header starts -->
<?php echo CommonFunction::getHeader('User Management'); ?>
<!-- create form starts -->
<div id="create-form" >
    <?php $this->renderPartial('_form', array('model' => $model, 'ldapuserlist'=> $ldapuserlist, 'dropdownvalues' => $dropdownvalues, 'type' => 'create')); ?>
</div>
<!-- create form ends -->