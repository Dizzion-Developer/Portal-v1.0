var iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?~_";

function handleRedirection(SearchText,SearchFilter,SiteURL){
    SearchTextEnc = urlencode(jQuery.trim(SearchText));    
    if(!findSpecialCharacter(SearchText) && SearchText!="Enter Application Names, Keywords..."){
        RedirectTo=SiteURL +'scores/*?search_page_filter='+SearchFilter+'&specialQ='+SearchTextEnc;        
    }else if(SearchText!="" && SearchText!="Enter Application Names, Keywords..."){
        RedirectTo=SiteURL +'scores/'+SearchTextEnc+'?search_page_filter='+SearchFilter;
    }else{
        RedirectTo=SiteURL +'scores/*?search_page_filter='+SearchFilter;        
    }
    window.location = RedirectTo;
    return false;
}

function findSpecialCharacter(data){
    
    for (var i = 0; i < data.length; i++) {
        if (iChars.indexOf(data.charAt(i)) != -1) {     
            return false;
        }
    }
    return true;
}

function strstr (haystack, needle, bool) {
    var pos = 0;

    haystack += '';
    pos = haystack.indexOf(needle);
    if (pos == -1) {
        return false;
    }else {
        if (bool) {
            return haystack.substr(0, pos);
        }else {
            return haystack.slice(pos);
        }
    }
}

function urlencode (str) {
    str = (str + '').toString();

    // Tilde should be allowed unescaped in future versions of PHP (as reflected below), but if you want to reflect current
    // PHP behavior, you would need to add ".replace(/~/g, '%7E');" to the following.
    return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').
    replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
}

function tick2(){
    jQuery('#newscategory div.viewNewsApps div.slide:first').slideUp( function () {
        jQuery(this).appendTo(jQuery('.newscategory div.viewNewsApps')).slideDown();
    });
}
x = setInterval(function(){
    tick2 ()
}, 10000);

jQuery(document).ready(function(){
    jQuery('#currentPageSelect').msDropdown();
    jQuery('#perpagespinner').msDropdown();

    /*
     *Code block handle on focus and on blur actions on search text box for ie browsers.
     */
    jQuery('.search_input input').focus(function(){
        if(jQuery(this).val() == 'Enter Application Names, Keywords...'){
            jQuery(this).val('');
            jQuery(this).css("color","#333");
        }
    }).blur(function(){
        if(jQuery.trim(jQuery(this).val()) == ''){
            jQuery(this).val('Enter Application Names, Keywords...');
            jQuery(this).css("color","#666");
        }
    });
    
    /*
     *Populates the text box with the default value only if its value is empty.
     */
    if((jQuery('.search_input input').val() == '')){
        jQuery('.search_input input').val('Enter Application Names, Keywords...');
        jQuery(this).css("color","#666");
    }
    var count = jQuery('.pager').children().length;
    jQuery('.pager').width((jQuery('.pager li').outerWidth(true)*count));

    
    jQuery('.search_input input').focus(function(){
        if(jQuery(this).val() == 'Enter Application Names, Keywords...'){
            jQuery(this).val('');
            jQuery(this).css("color","#333");
        }
    }).blur(function(){
        if(jQuery(this).val() == ''){
            jQuery(this).val('Enter Application Names, Keywords...');
            jQuery(this).css("color","#666");
        }
    });

    jQuery('#search_helptext').click(function() {
        jQuery('.helpTextPopup').toggle();
        if(jQuery('.helpTextPopup').css('display')=='block') {
            jQuery('.helpTextPopup').position({
                of: jQuery("#search_helptext" ),
                my: 'right' + " " + 'top+15',
                at: 'right' + " " + 'top+15',
                collision: 'flip' + " " + 'flip'
            });
        }
    });

    // Set starting slide to 1
    var startSlide = 1;
    // Get slide number if it exists
    if (window.location.hash) {
        startSlide = window.location.hash.replace('#','');
    }
    
    jQuery('.pager-next a,.pager-last a,.pager-previous a,.pager-first a').text('.');
    enableSelectBoxes();
    
    jQuery("#newscategory").simplyScroll({
        customClass:'vert',
        orientation:'vertical',
        auto: false,
        speed: 10			
    });
    
    jQuery('.simply-scroll-clip').live('mouseenter',function(){
        if(x!= null && x!='undefined'){
            clearInterval(x); 
        }	
    });
    jQuery('.simply-scroll-clip').live('mouseleave',function(){
        if(x!= null && x!='undefined') {
            x = setInterval(function(){
                tick2 ()
            }, 10000);
        }	
    });
                                
    jQuery('#mainCarousel').slides({
        preload: true,
        preloadImage: 'images/loading.png',
        generatePagination: true,
        play: 10000,
        pause: 2500,
        hoverPause: true,
        // Get the starting slide
        start: startSlide,
        animationComplete: function(current){
            // Set the slide number as a hash
            //window.location.hash = '#' + current;
            if(current==1)
                jQuery('#appSliderHead h1').text('How does a Mobile App Introduce Risk?');
            else if(current==2)
                jQuery('#appSliderHead h1').text('Setting the Standard for Mobile App Security');
            else if(current==3)
                jQuery('#appSliderHead h1').text('Thinking about a New App?');
            else if(current==4)
                jQuery('#appSliderHead h1').text('Calling all App Developers');
        }
    });
    jQuery('#techno_slider').slides({
        preload: true,
        generateNextPrev: true,
        generatePagination: false
    });
                                
    jQuery('#latestAppCarousel').slides({
        preload: true,
        generateNextPrev: true
    });

    //jQuery('.vertical_rightInfo').rotate(-90);

    jQuery('.mainmenus li').click(function() {
        jQuery('.mainmenus li').removeClass('active');
        jQuery(this).addClass('active');
    });
    /* Search Results Page */
	
    jQuery('#radioOptions').buttonset();
    // jQuery('.vertical_rightInfo').rotate(-90);
    showLegendInfo();

    jQuery('.closeApp').click(function(){
        closeScoreAppInfo();
    });
        
    function populateContent(appId){                      
        var appName = jQuery('#applicationName');            
        var appCategory = jQuery('#applicationCategory');
        var appDeveloper = jQuery('#applicationDeveloper');
        var appDescription = jQuery('#applicationDescription');
        var appVersion = jQuery('#applicationVersion');
        var appInstalls = jQuery('#applicationInstalls');
        
        var dynamicName = jQuery('#'+appId+'_appName').attr('title');
        var dynamicCategory = jQuery('#'+appId+'_category').attr('title');
        var dynamicDeveloper = jQuery('#'+appId+'_developer').attr('title');
        var dynamicDescription = jQuery('#'+appId+'_appDesc').text();
        var dynamicVersion = jQuery('#'+appId+'_appVersion').text();
        var dynamicDownInstalls = jQuery('#'+appId+'_appInstalls').text();
        
        
        appName.text('Loading...');
        appCategory.text('Loading...');
        appDeveloper.text('Loading...');
        appDescription.text('Loading...');
        appVersion.text('Loading...');
        appInstalls.text('Loading...');
        
        appName.text(dynamicName);
        appCategory.text(dynamicCategory);
        appDeveloper.text(dynamicDeveloper);
        appDescription.text(dynamicDescription);
        appVersion.text(dynamicVersion);
        appInstalls.text(dynamicDownInstalls);
    }

    jQuery('.searchResultTable tbody tr').click(function(event) {
        if(this.id!="additionalControls"){
            closeScoreAppInfo();                
            populateContent(this.id);                
            jQuery('#activeTableRow').show();
            jQuery(this).find('.arrow_image').show();
            position(jQuery(this));
        }else{
            closeScoreAppInfo();
        }
    });
    jQuery('.searchResultTable tbody td.score').click(function(event) {
        event.stopPropagation();
        closeScoreAppInfo();
        jQuery('#scoreDetail').show();
        
        /*
         * Calculate the row ID and other scores - Shankar
         */
        
        var rowId = jQuery(this).parent().attr('id');
        var applicationName = jQuery('#'+rowId+'_appName').html();
        var safteyScore = jQuery('#'+rowId+'_safetyValue').html();
        var authenticityScore = jQuery('#'+rowId+'_authenticityValue').html();
        var privacyScore = jQuery('#'+rowId+'_privacyValue').html();
        var reliabilityScore = jQuery('#'+rowId+'_reliablilityValue').html();
        
        jQuery('#application_score').text(applicationName);
        jQuery('#safety_score').attr('title',safteyScore);
        jQuery('#authenticity_score').attr('title',authenticityScore);
        jQuery('#privacy_score').attr('title',privacyScore);
        jQuery('#reliability_score').attr('title',reliabilityScore);
        
        var safetyColor = jQuery('#'+rowId+' td.safety').attr('class').replace("score safety","");
        var authColor = jQuery('#'+rowId+' td.auth').attr('class').replace("score auth","");
        var privacyColor = jQuery('#'+rowId+' td.privacy').attr('class').replace("score privacy","");
        var reliabilityColor = jQuery('#'+rowId+' td.reliable').attr('class').replace("score last reliable","");
        
        jQuery('#safety_score').children('.bar').attr('class',safetyColor+" "+'bar');
        jQuery('#authenticity_score').children('.bar').attr('class',authColor+" "+'bar');
        jQuery('#privacy_score').children('.bar').attr('class',privacyColor+" "+'bar');
        jQuery('#reliability_score').children('.bar').attr('class',reliabilityColor+" "+'bar');
        
        jQuery(this).find('.scoreArrow').show();
        positionScore(jQuery(this));
        jQuery('#scoreDataTable tbody tr').each(function() {
            var pc = jQuery(this).children().last().attr('title');
            pc = pc > 5.0 ? 5.0 : pc;
            var ww = jQuery(this).children().last().width();
            var len = parseInt(ww, 10) * parseInt(pc, 10) / 100;
            
            var per = ((100/8) * (pc/0.5)-2);

            if(pc >= 3.5 && pc <= 4) {
                var per = ((100/9) * (pc/0.5)-2);
            }
            if(pc >= 4.5 && pc <= 5) {
                var per = ((100/10) * (pc/0.5)-2);
            }
            
            if(pc==0.0) {
                per = 1;
            }
            //            jQuery(this).children().last().children('.bar').animate({
            //                'width' : per + '%'
            //            }, 1500);
            jQuery(this).children().last().children('.bar').show();
            jQuery(this).children().last().children('.bar').css('width',per + '%');

        });
    });
    
    function scorePopup(event) {
        event.stopPropagation();
        closeScoreAppInfo();
        jQuery('#scoreDetail').show();
        jQuery(this).find('.scoreArrow').show();
        positionScore(jQuery(this));
    }
    
    function alterPaginationQueryString(e,a,callReference){        
        if(callReference == 'sorting'){
            var sortUrl = jQuery(a).children().attr('href');
            var query = sortUrl.split('?');
            var vars = query[1].split('&');
            e.preventDefault();
        }else if(callReference == 'spinnerChange'){
            var query = sortUrl.split('?');
            var vars = query[1].split('&');
        }
       
        var fullUrl = window.location.href.match(/^[^\#\?]+/)[0];
        var url = '';
        for (var i = 0; i < vars.length; i++){
            // Split key and value
            var pair = vars[i].split('=');
       
            // If the key matches our parameter, return the value
            if (pair[0] == "page"){
                pair[1]=0;
            // return pair[1];
            }
            if(i == (vars.length-1)){
                url +=pair[0]+"="+pair[1];
            }
            else{
                url +=pair[0]+"="+pair[1]+"&";
            }
        
        }
        var finalUrl = fullUrl+"?"+url;
        return finalUrl;
    }
    
    jQuery(".appNameHead,.categoryHead,.developerHead").click(function(e){
        window.location=alterPaginationQueryString(e,this,'sorting');
    });
    
    jQuery(".appNameHead a,.categoryHead a,.developerHead a").attr("title",""); //Empty the title of the table header
    
    /*
     * Overwrites the sorting image path to load the image from the custom theme folder
     */
    
    if (jQuery('th.active').length){
        if(jQuery('th.active a img').attr("title") == "sort descending"){
            jQuery('th.active a img').attr("src",Drupal.settings.pathToTheme.pathToTheme+'/images/arrow-desc.png');
        }else if(jQuery('th.active a img').attr("title") == "sort ascending"){
            jQuery('th.active a img').attr("src",Drupal.settings.pathToTheme.pathToTheme+'/images/arrow-asc.png');
        }
    }
    
    jQuery('div.scoreSelection').click(function(e){
        e.stopPropagation();
    });
    
    var htmlHeight = jQuery("body").outerHeight();
    var windowHeight = jQuery(window).outerHeight();
    if(htmlHeight<=windowHeight) {
        var diff = windowHeight - htmlHeight;
        var contHeight = jQuery('.mainContentHolder').outerHeight()+diff;
        jQuery('.mainContentHolder').css('height',contHeight);
    }
});

jQuery(document).click(function() {
    jQuery('div.selectOptions').hide();
    jQuery('div.helpTextPopup').hide();
});
    
function closeScoreAppInfo() {
    jQuery('.positionable').hide();
    jQuery('.arrow_image').hide();
    jQuery('.scoreArrow').hide();
    jQuery('.helpTextPopup').hide();
}

function position(elem) {
    jQuery("#activeTableRow").position({
        of: elem,
        my: 'right' + " " + 'top',
        at: 'right' + " " + 'top',
        collision: 'flip' + " " + 'flip'
    });
}

function positionScore(elem) {
    jQuery('#scoreDetail').position({
        of: elem,
        my: 'right-60' + " " + 'top',
        at: 'right' + " " + 'top',
        collision: 'flip' + " " + 'flip'
    });
}

function showLegendInfo() {
    jQuery( "#legendRerun" )
    .button()
    .click(function() {
        //some code
        })
    .next()
    .click(function() {
        var menu = jQuery( this ).parent().next().toggle().position({
            my: "left-70 top+14",
            at: "left bottom",
            of: this,
            collision: 'fit' + " " + 'fit'
        });
        jQuery( document ).one( "click", function() {
            menu.hide();
        });
        return false;
    })
    .parent()
    .buttonset()
    .next()
    .hide()
    .menu();
}

function strstr(haystack, needle, bool) { 
    var pos = 0;

    haystack += "";
    pos = haystack.indexOf(needle);
    if (pos == -1) {
        return false;
    } else {
        if (bool) {
            return haystack.substr(0, pos);
        } else {
            return haystack.slice(pos);
        }
    }
}

function StopReturnKey(e){
    //alert(e.keyCode);
    if (e.keyCode == 13) {
        e.preventDefault();
        return false;
    }
}


function advaceSearchFormSubmit(spinnerValue,perPageSpinnerValue){    
    jQuery("#app_name").val(jQuery.trim(jQuery("#app_name").val()));
    jQuery("#category").val(jQuery.trim(jQuery("#category").val()));
    jQuery("#developer").val(jQuery.trim(jQuery("#developer").val()));
    jQuery("#page_value").val(spinnerValue);
    jQuery("#per_page_value").val(perPageSpinnerValue);
    jQuery("#filterAdvance").submit();
}


function enableSelectBoxes(){
    jQuery('div.selectBox').each(function(){
        jQuery(this).children('span.selected').html(jQuery(this).children('div.selectOptions').children('span.selectOption:first').html());
        jQuery(this).attr('value',jQuery(this).children('div.selectOptions').children('span.selectOption:first').attr('value'));
					
        jQuery(this).children('span.selected,span.selectArrow').click(function(){
            if(jQuery(this).parent().children('div.selectOptions').css('display') == 'none'){
                jQuery(this).parent().children('div.selectOptions').css('display','block');
            }
            else {
                jQuery(this).parent().children('div.selectOptions').css('display','none');
            }

            if(jQuery('td.score_data').find('#score_selected').html()=='Select') {
                jQuery("td.slider_data .selectBox").children('div.selectOptions').css('display','none');
            }
            if(jQuery("td.slider_data .selectBox").hasClass('disabled')) {
                jQuery("td.slider_data .selectBox").children('div.selectOptions').css('display','none');
            }
        });
					
        jQuery(this).find('span.selectOption').click(function(){
            jQuery(this).parent().css('display','none');
            jQuery(this).closest('div.selectBox').attr('value',jQuery(this).attr('value'));
            jQuery(this).parent().siblings('span.selected').html(jQuery(this).html());            
            var selectId = jQuery(this).parent().parent().find('input').attr('id');
            if(selectId=="score_option"){
                jQuery('#score_option').val(jQuery(this).attr('value'));
            }else if(selectId=="slider_range"){                                
                jQuery('#slider_range').val(jQuery(this).attr('value'));
            }
            if(jQuery(this).html()=='Select') {
                jQuery('#slider_range1').html('None');
                jQuery( "td.slider_data .selectBox" ).css('opacity','0.3');
                jQuery("td.slider_data .selectBox").addClass('disabled');
            } else {                
                jQuery( "td.slider_data .selectBox" ).css('opacity','1');
                jQuery("td.slider_data .selectBox").removeClass('disabled');
            }
        });
    });				
}

/*
     * Code block validates the search box input
     */
function checkSearchBoxText(SearchText){
    SearchText = (SearchText!="Enter Application Names, Keywords...")?SearchText:'*';
    return SearchText;
};
