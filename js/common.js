$(document).ready(function() {
    $("form.inline :text").minical({
        inline: true
    });

    $('.link-toggle-js').on('click', function(e){
        e.preventDefault();
        $(this).parent().find('.sub-menu-js').slideToggle().end().end().toggleClass('active');
    });

    function dateWorks() {
        $('.minical_day_12_16_2014').addClass('bg_yellow');
        $('.minical_day_12_10_2014').addClass('bg_yellow');
        $('.minical_day_12_9_2014').addClass('bg_green');
        $('.minical_day_12_8_2014').addClass('bg_red');
    }
    dateWorks();

    $('.minical_prev').on('click', function(){
        $('.minical_day_12_16_2014').addClass('bg_yellow');
        $('.minical_day_12_10_2014').addClass('bg_yellow');
        $('.minical_day_12_9_2014').addClass('bg_green');
        $('.minical_day_12_8_2014').addClass('bg_red');

        dateWorks();
    });

    var wrapPopupCalendar = $('.wrap-popup');
    $('.bg_yellow, .bg_green').on('click', function(){
        wrapPopupCalendar.css({'left': $(this).offset().left + 35,
            'top': $(this).offset().top}).addClass('display');

        $('body').on('click', function(){
            wrapPopupCalendar.removeClass('display');

            wrapPopupCalendar.on('click', function(e) {
                e.stopPropagation();
            });
        })
    });
});