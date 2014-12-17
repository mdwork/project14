$(document).ready(function() {
    $('.link-toggle-js').on('click', function(e){
        e.preventDefault();
        $(this).parent().find('.sub-menu-js').slideToggle().end().end().toggleClass('active');
    });

    $('.bg_yellow').on('click', function(){
        $('.wrap-popup').css({'left': $(this).offset().left,
            'top': $(this).offset().top});
    });
});