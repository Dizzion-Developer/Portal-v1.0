<div class="formStructure">
    <?php
    $form = $this->beginWidget('EBootstrapActiveForm', array(
        'id' => 'user_mgmt',
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
   
    <div class="control-group pull-left">
        <?php echo $form->labelEx($model, 'user_name'); ?>
        <div class="controls">
            <?php echo $form->dropDownList($model,'user_name', $dropdownvalues['ldap_userlist'], array(
            'prompt'=>'Select User',
            'disabled'=>($type=='update')?true:false,
            'ajax' => array(
            'type'=>'POST', 
            'dataType'=>'JSON',
            'url'=>CController::createUrl('loadobjectsid'),
            'data'=>array('user_name'=>'js:this.options[this.selectedIndex].text'),        
            'success' => 'js:function(html) {                
                   $("#UserMasterForm_user_sid").val(html.objectsid);                    
                   $("#UserMasterForm_first_name").val(html.firstname);                    
                   $("#UserMasterForm_last_name").val(html.lastname);                    
                   $("#UserMasterForm_email_id").val(html.email);  
                   $("#UserMasterForm_userName").val($("#user_mgmt #UserMasterForm_user_name option:selected").text());                    
                }'  
                ),
          )); 
    ?> 
            <?php echo $form->error($model, 'user_name'); ?>
        </div>
    </div>    
     <?php echo $form->hiddenField($model, 'userName'); ?>
 
    <div class="control-group pull-right">
        <?php echo $form->labelEx($model, 'user_sid'); ?>
        <div class="controls">
            <?php echo $form->textField($model, 'user_sid', array('readonly'=>true)); ?>
            <?php echo $form->error($model, 'user_sid'); ?>
        </div>
    </div>
    <div class="clearfix"></div>
    <div class="control-group pull-left">
        <?php echo $form->labelEx($model, 'first_name'); ?>
        <div class="controls">
            <?php echo $form->textField($model, 'first_name'); ?>
            <?php echo $form->error($model, 'first_name'); ?>
        </div>
    </div>
    
    <div class="control-group pull-right">
        <?php echo $form->labelEx($model, 'last_name'); ?>
        <div class="controls">
            <?php echo $form->textField($model, 'last_name'); ?>
            <?php echo $form->error($model, 'last_name'); ?>
        </div>
    </div>
    <div class="clearfix"></div>
     <div class="control-group pull-left">
        <?php echo $form->labelEx($model, 'email_id'); ?>
        <div class="controls">
            <?php echo $form->textField($model, 'email_id'); ?>
            <?php echo $form->error($model, 'email_id'); ?>
        </div>
    </div>
    
    <div class="control-group pull-right">
        <?php echo $form->labelEx($model, 'org_id'); ?>
        <div class="controls">
            <?php echo $form->dropDownList($model, 'org_id', $dropdownvalues['org_id'],array(
                    'prompt'=>'Select Organization',
                    'ajax' => array(
                    'type'=>'POST', 
                    'dataType'=>'JSON',
                    'url'=>CController::createUrl('getaccessname'),
                    'success' => 'js:function(html) {
                           $("#UserMasterForm_app_access_map_id").html(html.accessNames);
                           $("#UserMasterForm_role_code").html(html.userTypes);
                        }'  
                        ),
          )); ?>
            <?php echo $form->error($model, 'org_id'); ?>
        </div>
    </div>  
    <div class="clearfix"></div>
     <div class="control-group pull-left">
        <?php echo $form->labelEx($model, 'app_access_map_id'); ?>
        <div class="controls">
            <?php echo $form->dropDownList($model, 'app_access_map_id', !empty($dropdownvalues['app_access_map_id'])?$dropdownvalues['app_access_map_id']:array(), array('empty'=>'Select role')); ?>
            <?php echo $form->error($model, 'app_access_map_id'); ?>
        </div>
    </div>
    
     <div class="control-group pull-right">
        <?php echo $form->labelEx($model, 'role_code'); ?>
        <div class="controls">
            <?php echo $form->dropDownList($model, 'role_code',!empty($dropdownvalues['role_code'])?$dropdownvalues['role_code']:array(), array('empty'=>'Select user type')); ?>
            <?php echo $form->error($model, 'role_code'); ?>
        </div>
    </div>
    <div class="clearfix"></div>
    <div class="control-group pull-left">
        <?php echo $form->labelEx($model, 'status'); ?>
        <div class="controls">
            <?php echo $form->dropDownList($model, 'status', array('A' => 'Active', 'D' => 'Deactive')); ?>
            <?php echo $form->error($model, 'status'); ?>
        </div>
    </div>
    
    <div class="clearfix"></div>
     
    <div class="formControls">
        <?php echo $form->submitButtonSecondary('Cancel', array('name' => 'cancel', 'id' => 'cancel')); ?>
        <?php echo $form->submitButton(ucfirst($type), array('name' => $type, 'id' => $type)); ?>
    </div>
    <?php $this->endWidget(); ?>
</div>
