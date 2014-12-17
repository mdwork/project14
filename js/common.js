$(document).ready(function() {
    $('.link-toggle-js').on('click', function(e){
        e.preventDefault();
        $(this).parent().find('.sub-menu-js').slideToggle().end().end().toggleClass('active');
    });

    $('.minical_day_12_16_2014').addClass('bg_yellow');
    $('.minical_day_12_10_2014').addClass('bg_yellow');

    $('.bg_yellow').on('click', function(){
        $('.wrap-popup').css({'left': $(this).offset().left,
            'top': $(this).offset().top});
    });
});