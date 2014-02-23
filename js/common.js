$(document).ready(function() {
    $('a').tooltip();

    var menuLinks = $('#primary-nav > ul > li > a');

// Initialize submenu number idicators
    menuLinks.filter(function() {
        return $(this).next().is('ul');
    }).each(function(n, e) {
        $(e).append('<span>' + $(e).next('ul').children().length + '</span>');
    });

// Accordion functionality
    menuLinks.click(function() {

        var link = $(this);

        if (link.next('ul').length > 0) {
            if (link.parent().hasClass('active') !== true) {
                if (link.hasClass('open')) {
                    link.removeClass('open').next().slideUp(250);
                }
                else {
                    $('#primary-nav li > a.open').removeClass('open').next().slideUp(250);
                    link.addClass('open').next().slideDown(250);
                }
            }

            return false;
        }

        return true;
    });
    // Initialize Colorpicker
    $('.input-colorpicker').colorpicker();
});

function showAttributeErrorTooltip(form, attribute, data, hasError) {
    var id = $('#' + attribute.inputID).attr('id')
    var errorId = id + '_em_';
    $('#' + id).tooltip('destroy');
    var errorText = $('#' + errorId).text();
    if (hasError && errorText != '') {
        $('#' + errorId).show();
        $('#' + id).tooltip({'trigger': 'focus,hover', 'placement': 'top', 'title': errorText});
    } else {
        $('#' + errorId).hide();
        $('#' + id).tooltip({'trigger': 'focus,hover', 'placement': 'top', 'title': ''});
        return true;
    }
}

function getURLParameter(url, name) {
    var val = (RegExp(name + '/' + '(.+?)(&|$)').exec(url) || [, null])[1];
    if (val == null)
        val = (RegExp(name + '=' + '(.+?)(&|$)').exec(url) || [, null])[1];
    return val;
}

