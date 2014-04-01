<script>
    $(document).ready(function() {

        if ('<?php echo $type; ?>' == '<?php echo AppConstants::$THEME_COLORS['default']; ?>')
            $('#reset').attr('disabled', true);
            
        $(document).on("click", "#theme-custom", function() {
            $('.custom_theme').toggle("slow");
        });
        
        $(document).on("click","#clear-org", function(){
           $('#ThemeSettingsForm_org_name').val('');
           $(this).hide();
        });

        var colorList = $('.theme-colors');
        $('li', colorList).removeClass('active');
        $('a[id=theme-<?php echo $type; ?>]').parent('li').addClass('active');

        if ('<?php echo $type; ?>' == '<?php echo AppConstants::$THEME_COLORS['custom']; ?>') {
            $('.custom_theme').show();
        }


        $('a', colorList).click(function(e) {
            var theme = $(this).attr('id');
            var theme_split = theme.split("-");
            var theme_color = theme_split[1];
            $('#ThemeSettingsForm_type').val(theme_color);
            if (theme_color != '<?php echo AppConstants::$THEME_COLORS['custom']; ?>') {
                $('.custom_theme').hide();
                applyDefaultColorThemes(theme_color);
            } else {
                customThemeColors();
            }
            if (theme_color == '<?php echo AppConstants::$THEME_COLORS['default']; ?>') {
                $('#reset').attr('disabled', true);
            } else {
                $('#reset').attr('disabled', false);
            }
            $('li', colorList).removeClass('active');
            $(this).parent('li').addClass('active');

        });

        $('#header-colorpicker').colorpicker().on('changeColor', function(ev) {
            applyTheme(ev.color.toHex(), '', '', '');
        });
        $('#hover-colorpicker').colorpicker().on('changeColor', function(ev) {
            applyTheme('', ev.color.toHex(), '', '');
        });
        $('#link-colorpicker').colorpicker().on('changeColor', function(ev) {
            applyTheme('', '', ev.color.toHex(), '');
        });
        $('#button-colorpicker').colorpicker().on('changeColor', function(ev) {
            applyTheme('', '', '', ev.color.toHex());
        });

        $(document).on('click', '#reset', function() {
            $('li', colorList).removeClass('active');
            $('a[id=theme-default]').parent('li').addClass('active');
            applyDefaultColorThemes('<?php echo AppConstants::$THEME_COLORS['default']; ?>');
            $('.custom_theme').find('input:text').val('');
            $('.custom_theme').hide();
            $('#ThemeSettingsForm_type').val('<?php echo AppConstants::$THEME_COLORS['default']; ?>');
        });

    });
    function applyTheme(header, hover, link, button) {
        if (header != '') {
            $('.Themeheading').css('background', header);
            $('.Themeheading').css('background', 'linear-gradient(to right, #ffffff 0%, ' + header + ' 93%');
            $('.Themeheading').css('background', '-moz-linear-gradient(left, #ffffff 0%, ' + header + ' 93%)');
            $('.Themeheading').css('background', '-webkit-gradient(linear, left top, right top, color-stop(0%,#ffffff), color-stop(93%,' + header + '))');
            $('.Themeheading').css('background', '-webkit-linear-gradient(left, #ffffff 0%, ' + header + ' 93%)');
            $('.Themeheading').css('background', '-o-linear-gradient(left, #ffffff 0%, ' + header + ' 93%)');
            $('.Themeheading').css('background', '-ms-linear-gradient(left, #ffffff 0%, ' + header + ' 93%)');
        }
        if (hover != '') {
            $(".nav-dash li a").hover(
                    function() {
                        $(this).css("background-color", hover);
                        $(this).css("border-color", hover);
                    },
                    function() {
                        $(this).css("background-color", "#DDDDDD");
                        $(this).css("border-color", "#DDDDDD");
                    });
            $('#theme-sidebar #primary-nav li a[class!=active]').hover(
                    function() {
                        $(this).css("background-color", hover);
                    },
                    function() {
                        $(this).css("background-color", "#888888");
                    });
            $('#theme-sidebar #primary-nav li a[class=active]').css('border-left', '5px solid ' + hover);
        }
        if (link != '') {
            $('#example-datatables_wrapper table a').css('color', link);
            $('#example-datatables_wrapper div li[class=active] a').css('background-color', link);
            $('#example-datatables_wrapper div li[class=active] a').css('border-color', link);
            $('.Theme-Breadcrumb #nav-info li[class=active] a').css('color', link);
        }
        if (button != '') {
            $('.input-prepend.theme .add-on').css('background', 'none repeat scroll 0 0 ' + button);
            $('.theme-edit img ').css('background', 'none repeat scroll 0 0 ' + button);
        }

    }

    function applyDefaultColorThemes(theme_color) {
        $.ajax({
            url: '<?php echo Yii::app()->createUrl('administrator/themes/getcolorcode/colorCode/') ?>' + '/' + theme_color,
            type: 'GET',
            success: function(code) {
                if (theme_color != '<?php echo AppConstants::$THEME_COLORS['default']; ?>') {
                    applyTheme(code, code, code, code);
                } else {
                    applyTheme('none', code, code, code);
                }
            }
        });
    }

    function customThemeColors() {
        var header = ($('#ThemeSettingsForm_header').val() != '') ? $('#ThemeSettingsForm_header').val() : 'none';
        var hover = ($('#ThemeSettingsForm_hover').val() != '') ? $('#ThemeSettingsForm_hover').val() : '<?php echo AppConstants::$THEME_COLOR_CODES['default']; ?>';
        var link = ($('#ThemeSettingsForm_link').val() != '') ? $('#ThemeSettingsForm_link').val() : '<?php echo AppConstants::$THEME_COLOR_CODES['default']; ?>';
        var button = ($('#ThemeSettingsForm_button').val() != '') ? $('#ThemeSettingsForm_button').val() : '<?php echo AppConstants::$THEME_COLOR_CODES['default']; ?>';
        applyTheme(header, hover, link, button);
    }
</script>

<div class="formStructure colorThemes">
    <?php
    $form = $this->beginWidget('EBootstrapActiveForm', array(
        'id' => 'category_mgmt',
        'enableClientValidation' => true,
        'clientOptions' => array(
            'validateOnSubmit' => true,
            //'hideErrorMessage'=>true,
            'validationDelay' => 0,
            'validateOnType' => true,
            'validateOnChange' => false,
            'afterValidateAttribute' => 'js:showAttributeErrorTooltip',
        //'afterValidate'=>'js:showFormErrorTooltip',
        ),
        'horizontal' => true,
    ));
    ?>
    <div class="form-horizontal pull-left">
        <div class="control-group ">
            <?php echo $form->labelEx($model, 'org_name'); ?>
            <div class="controls">
                <?php
                $this->widget('zii.widgets.jui.CJuiAutoComplete', array(
                    'name' => CHtml::activeName($model, 'org_name'),
                    'source' => Yii::app()->createUrl('administrator/themes/orgList'),
                    'value' => $org_name,
                    'options' => array(
                        'minLength' => '1',
                        'autocomplete' => 'on',
                        'attribute' => 'label',
                        'select' => 'js:function( event, ui ) {
                        $("#ThemeSettingsForm_org_name").val(ui.item.label);
                        $("#ThemeSettingsForm_org_id").val(ui.item.value);
                        $("#clear-org").show();
                        return false;
                  }',
                        'focus' => 'js:function(e, ui) {
                                         return false;
                                     }',
                        'change' => 'js:function (event, ui) {
                                        if(!ui.item){
                                            //http://api.jqueryui.com/autocomplete/#event-change -
                                            // The item selected from the menu, if any. Otherwise the property is null
                                            //so clear the item for force selection
                                            $("#ThemeSettingsForm_org_name").val("");
                                      }

            }',
                    ),
                    'htmlOptions' => array(
                        'style' => 'height:20px;',
                        'class' => '',
                        'placeholder' => "Search for Organization",
                    ),
                ));
                ?>
                <!-- Clear button -->
                <img src="<?php echo Yii::app()->request->baseUrl . '/images/close.png'; ?>" alt="clear" id="clear-org" />
                <!-- Clear button -->
                <?php echo $form->error($model, 'org_name'); ?>
            </div>
        </div>
    </div>

    <?php echo $form->hiddenField($model, 'org_id'); ?>
    <?php echo $form->hiddenField($model, 'type'); ?>
    <div class="form-horizontal pull-left">
        <div class="control-group">            
            <div class="formControls">
                <?php echo $form->submitButton('Proceed', array('name' => 'proceed', 'id' => 'proceed', 'class' => 'btn')); ?>
            </div>
        </div>
    </div>
    <div class="form-horizontal colorThemes pull-left">
        <div class="control-group ">
            <label for="example-input-mini" class="control-label" style="text-align:left">Themes</label>
            <div class="controls">
                <div class="Theme">
                    <ul class="theme-colors ">
                        <li class="active" >
                            <a title="" data-toggle="tooltip" id="theme-default" data-theme="default" class="theme-chosen themed-background-default1 themed-border-default1" href="javascript:void(0)" data-original-title="Default"></a>
                        </li>
                        <li>
                            <a title="" data-toggle="tooltip" id="theme-deepblue" data-theme="deepblue" class="theme-chosen themed-background-deepblue themed-border-deepblue" href="javascript:void(0)" data-original-title="DeepBlue"></a>
                        </li>
                        <li>
                            <a title="" data-toggle="tooltip" id="theme-deepwood" data-theme="deepwood" class="theme-chosen themed-background-deepwood themed-border-deepwood" href="javascript:void(0)" data-original-title="DeepWood"></a>
                        </li>
                        <li>
                            <a title="" data-toggle="tooltip" id="theme-deeppurple"  data-theme="deeppurple" class="theme-chosen themed-background-deeppurple themed-border-deeppurple" href="javascript:void(0)" data-original-title="DeepPurple"></a>
                        </li>
                        <li>
                            <a title="" data-toggle="tooltip" id="theme-deepgreen" data-theme="deepgreen" class="theme-chosen themed-background-deepgreen themed-border-deepgreen" href="javascript:void(0)" data-original-title="DeepGreen"></a>
                        </li>
                        <li>
                            <a title="" id="theme-custom" data-toggle="tooltip" data-theme="custom" class="theme-chosen themed-background-custom themed-border-custom" href="javascript:void(0)" data-original-title="CustomTheme " ></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="clearfix"></div>
    <div class="custom_theme" style="display:none;">
        <div class="Custom-Seperator">
            <h4>Custom Theme Options</h4>
        </div>
        <div class ="form-horizontal custom-theme-options">
            <div class="customheader pull-left">
                <div class="control-group">
                    <?php echo $form->labelEx($model, 'header'); ?>
                    <div class="controls">
                        <div id="header-colorpicker" data-color="<?php echo isset($model->attributes['header']) ? $model->attributes['header'] : AppConstants::DEFAULT_APP_TILE_COLOR; ?>" class="input-append input-colorpicker color">
                            <?php echo $form->textField($model, 'header', array('class' => 'input-mini', 'readOnly' => true)); ?>
                            <span class="add-on"><i style="background-color:<?php echo (isset($model->attributes['header']) && $model->attributes['header'] != '') ? $model->attributes['header'] : AppConstants::DEFAULT_APP_TILE_COLOR; ?>"></i></span>
                        </div>
                    </div>
                </div>
            </div>      
            <div class="customhover pull-left">  
                <div class="control-group ">
                    <?php echo $form->labelEx($model, 'hover'); ?>
                    <div class="controls">
                        <div id="hover-colorpicker" data-color="<?php echo isset($model->attributes['hover']) ? $model->attributes['hover'] : AppConstants::DEFAULT_APP_TILE_COLOR; ?>" class="input-append input-colorpicker color">
                            <?php echo $form->textField($model, 'hover', array('class' => 'input-mini', 'readOnly' => true)); ?>
                            <span class="add-on"><i style="background-color: <?php echo (isset($model->attributes['hover']) && $model->attributes['hover'] != '') ? $model->attributes['hover'] : AppConstants::DEFAULT_APP_TILE_COLOR; ?>"></i></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="customlink pull-left ">  
                <div class="control-group ">
                    <?php echo $form->labelEx($model, 'link'); ?>
                    <div class="controls">
                        <div id="link-colorpicker" data-color="<?php echo isset($model->attributes['link']) ? $model->attributes['link'] : AppConstants::DEFAULT_APP_TILE_COLOR; ?>" class="input-append input-colorpicker color">
                            <?php echo $form->textField($model, 'link', array('class' => 'input-mini', 'readOnly' => true)); ?>
                            <span class="add-on"><i style="background-color: <?php echo (isset($model->attributes['link']) && $model->attributes['link'] != '') ? $model->attributes['link'] : AppConstants::DEFAULT_APP_TILE_COLOR; ?>"></i></span>
                        </div>
                    </div>
                </div>
            </div>  

            <div class="custombutton pull-left">  
                <div class="control-group ">
                    <?php echo $form->labelEx($model, 'button'); ?>
                    <div class="controls">
                        <div id="button-colorpicker" data-color="<?php echo isset($model->attributes['button']) ? $model->attributes['button'] : AppConstants::DEFAULT_APP_TILE_COLOR; ?>" class="input-append input-colorpicker color">
                            <?php echo $form->textField($model, 'button', array('class' => 'input-mini', 'readOnly' => true)); ?>
                            <span class="add-on"><i style="background-color: <?php echo (isset($model->attributes['button']) && $model->attributes['button'] != '') ? $model->attributes['button'] : AppConstants::DEFAULT_APP_TILE_COLOR; ?>"></i></span>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </div>
    <div class="clearfix"></div>
    <div class="form-horizontal colorThemes">
        <div class="control-group">

            <div class="controls">
                <?php echo $form->submitButton('Save', array('name' => 'save', 'id' => 'save', 'class' => 'btn')); ?>
                <?php echo $form->submitButtonSecondary('Set to default', array('name' => 'reset', 'id' => 'reset', 'class' => 'btn')); ?>
            </div>
        </div>
    </div>
    <div class="clearfix"></div>
    <?php $this->endWidget(); ?>
</div>