$(document).ready(function() {
    $('.link-toggle-js').on('click', function(e){
        e.preventDefault();
        $(this).parent().find('.sub-menu-js').slideToggle().end().end().toggleClass('active');
    });

    $('.bg_yellow ').on('click', function(){

    });
});