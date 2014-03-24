<?php Yii::app()->clientScript->registerScriptFile(Yii::app()->getAssetManager()->publish(Yii::app()->theme->basePath . '/js/plugins.js')); ?>
<?php Yii::app()->clientScript->registerScriptFile(Yii::app()->getAssetManager()->publish(Yii::app()->theme->basePath . '/js/main.js')); ?>
<style type="text/css">
    html {overflow: hidden;} /*we don't need any scrolls for our html */

    #iframe { overflow: hidden;} /*this is to remove the scroll when not needed*/

    #iframe, iframe
    {
        width: 100%;
        height: 100%;
    }

</style>
<script type="text/javascript">
    $(document).ready(function() {
        $('#iframe').mouseenter(function(e) {
            e.stopPropagation();
            $('.slimScrollDiv').css('display', 'none');
        });
        $(document).bind('click', function(e) {
            var $clicked = $(e.target);

            if (!$clicked.parents().hasClass("quickMenu") && !$clicked.parents().hasClass("menuLink")) {
                $('#customer-app-list').hide();
                if ($('.slimScrollDiv').css('display') == 'block')
                    $('.slimScrollDiv').css('display', 'none');
            }

        });
        $('.slimScrollDiv').css('display', 'none');
        $('#app_title').html('<?php echo $app_name; ?>');
    });


    $('.menuLink').click(function(event) {
        $('.toggleMenu').toggle();
        showhideApplist();
    });

    $('.scrollable-menu').slimScroll({railVisible: true});
    $("#customer-app-list").html('<?php echo $app_menu ?>');
    $(".customer-app-list,.homeMenu").show();
    if ('<?php echo CommonFunction::getRole(); ?>' != '<?php echo AppConstants::$ROLES['CUST']; ?>') {
        $(".backMenu").show();
    }
    $(document).ready(function() {
            main();
    });

    function showhideApplist() {
        if ($('.slimScrollDiv').css('display') == 'none')
            $('.slimScrollDiv').css('display', 'block');
        else
            $('.slimScrollDiv').css('display', 'none');
    }

    function main()
    {
        $('iframe').attr('src', '<?php echo $url; ?>');
        resizeIframe();
    }

    function resizeIframe()
    {
        $("#iframe").height(WindowHeight() - getObjHeight(document.getElementById("topbar")));
    }

    function WindowHeight()
    {
        var de = document.documentElement;
        return self.innerHeight ||
                (de && de.clientHeight) ||
                document.body.clientHeight;
    }

    function getObjHeight(obj)
    {
        if (obj.offsetWidth)
        {
            return obj.offsetHeight;
        }
        return obj.clientHeight;
    }

</script>
<div style="height: 560px;" id="iframe">
    <iframe src=""> 
    &lt;/div&gt; 
    &lt;/body&gt;
    &lt;/html&gt;
    </iframe></div>
