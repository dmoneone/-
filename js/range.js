$(".range").mousemove(function (e) {
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
    var percent = val * 100;

    $(this).css('background-image',
        '-webkit-gradient(linear, left top, right top, ' +
        'color-stop(' + percent + '%, #efbc43), ' +
        'color-stop(' + percent + '%, #dfdfdf)' +
        ')');

    $(this).css('background-image',
        '-moz-linear-gradient(left center, #DF7164 0%, #DF7164 ' + percent + '%, #F5D0CC ' + percent + '%, #F5D0CC 100%)');
});