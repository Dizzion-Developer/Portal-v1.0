<script type="text/javascript">
    $(document).ready(function() {
        $('#AppAccessForm_access_id').change(function() {
            if ($(this).val() != '') {
                $('#AppAccessForm_org_id').val('');
                $('#AppAccessForm_org_id').attr('disabled', false);
                $(".app_info_ids :input.activeChk").attr("disabled",true);
                $("#create,#update").attr("disabled", false);
                $(".custom-error-flash-message").hide();
            } else {
                $('#AppAccessForm_org_id').val('');
                $('#AppAccessForm_org_id').attr('disabled', true);
                $(".app_info_ids :input.activeChk").attr("disabled",true);
            }
        });
        
        if($('#AppAccessForm_org_id').val()!=''){
          $('#AppAccessForm_org_id').attr('disabled', false);
          if($('#AppAccessForm_org_id_em_').html()==''){
              $(".app_info_ids :input.activeChk").attr("disabled",false);
          }
        }
        
        if('<?php echo $type ?>'=='update'){
            $(".app_info_ids :input.activeChk").attr("disabled",false);
        }
        
        if('<?php echo $model->id ?>'==1){
            $('#AppAccessForm_access_id').attr('disabled',true);
            $('#AppAccessForm_org_id').attr('disabled', true);
        }
            
    });
</script>

<div class="formStructure">
    <?php
    $form = $this->beginWidget('EBootstrapActiveForm', array(
        'id' => 'app_access_map',
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
        <?php echo $form->labelEx($model, 'access_id'); ?>
        <div class="controls">
            <?php echo $form->dropDownList($model, 'access_id', $dropdownvalues['access_id'], array('empty' => 'Select role'));
            ?>
            <?php echo $form->error($model, 'access_id'); ?>
        </div>
    </div>
    <div class="control-group pull-right">
        <?php echo $form->labelEx($model, 'org_id'); ?>
        <div class="controls">
            <?php
            echo $form->dropDownList($model, 'org_id', $dropdownvalues['org_id'],
                                            array('empty' => 'Select organization name',
                'disabled' => true,
                'ajax' => array(
                    'type' => 'POST', //request type
                    'url' => CController::createUrl('accesscheck'),
                    'dataType' => 'json',
                    'success' => 'js:function(html){
                                                        if(html.status=="success"){
                                                            $(".custom-error-flash-message").hide();
                                                            $("#create,#update").attr("disabled",false);
                                                            if($("#AppAccessForm_org_id").val()!="")
                                                              $(".app_info_ids :input.activeChk").attr("disabled",false);
                                                            else
                                                              $(".app_info_ids :input.activeChk").attr("disabled",true);
                                                        }else{
                                                          $("#create,#update").attr("disabled",true);
                                                          $(".app_info_ids :input.activeChk").attr("disabled",true);
                                                          $(".alert-block").hide();
                                                          $("#custom-error-flash-message").html(html.message);
                                                          $(".custom-error-flash-message").show();
                                                        }
                                                        }',
                )
            ));
            ?>
            <?php echo $form->error($model, 'org_id'); ?>
        </div>
    </div>
    <div class="clearfix"></div>
    <div class="control-group pull-left">
        <?php echo $form->labelEx($model, 'app_info_ids'); ?>
        <div class="controls app_info_ids">
            <div class="multiSelect">
            <?php echo $form->iconCheckBoxList($model, 'app_info_ids', $dropdownvalues['app_info_ids'], array('disabled'=>true,
                                                                     'template'=>'{statusStart} {input} {icon} {label} {statusEnd}'),$dropdownvalues['icon_info'],$dropdownvalues['status_info']) ?>
                </div>
            <?php echo $form->error($model, 'app_info_ids'); ?>
        </div>
    </div>
    <?php echo $form->hiddenField($model,'selected_apps'); ?>
    <!--    <div class="control-group pull-right">
    <?php //echo $form->labelEx($model, 'status'); ?>
            <div class="controls">
    <?php //echo $form->dropDownList($model, 'status', array('A' => 'Active', 'D' => 'Deactive')); ?>
    <?php //echo $form->error($model, 'status'); ?>
            </div>
        </div>-->
    <div class="clearfix"></div>
    <div class="control-group">            
        <div class="formControls">
            <?php echo $form->submitButtonSecondary('Cancel', array('name' => 'cancel', 'id' => 'cancel')); ?>
            <?php echo $form->submitButton(ucfirst($type), array('name' => $type, 'id' => $type)); ?>
        </div>
        <?php $this->endWidget(); ?>
    </div>
</div>
