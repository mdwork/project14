$(document).ready(function() {
    $('.link-toggle-js').on('click', function(e){
        e.preventDefault();
        $(this).parent().find('.sub-menu-js').slideToggle().end().end().toggleClass('active');
    });

    $('.bg-work-day-js').each(function(index, value){
        var dateCell = $(this).find('span').text();
        if(dateCell ==  '7') {
            $(this).addClass('bg_green');
        }
    });
});