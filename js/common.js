$(document).ready(function() {
    $("form.inline :text").minical({
        inline: true
    });
    $("#slides").slides({

        loaded: function(){
            currentSlide( 1 );
        },
        playInterval: 10000,
        width: 842,
        height: 292
    });
    setTimeout(function(){
        $("#slides").slides("play");
    }, 5000);



    $(document).on('click', '.modal-btn', function(){
        $('#small-modal').arcticmodal();
    });

    $('.link-toggle-js').on('click', function(e){
        e.preventDefault();
        $(this).parent().find('.sub-menu-js').slideToggle().end().end().toggleClass('active');
    });

    /*set working days*/
    $('.minical_day_12_16_2014').addClass('bg_yellow');
    $('.minical_day_12_10_2014').addClass('bg_yellow');
    $('.minical_day_12_9_2014').addClass('bg_green');
    $('.minical_day_12_8_2014').addClass('bg_red');

    $("#calendar-js").load("calendar.html #calendar-ajax", function(){
        var wrapPopupCalendar = $('.popup-calendar'),
            orderBox = $('.order-service-box'),
            bgPopupCalendar = $('.bg-popup'),
            overviewPopup = $('.overview');

        $('.green-day').on('click', function(e){
            e.preventDefault();
            bgPopupCalendar.addClass('display');
            orderBox.addClass('display');
            overviewPopup.height($(document).height());
        });

        $('.bg_yellow, .bg_green').on('click', function(){
            wrapPopupCalendar.css({'left': $(this).offset().left + 35,
                                    'top': $(this).offset().top}).addClass('display');
            overviewPopup.addClass('display');
            bgPopupCalendar.addClass('display');

            $('.arcticmodal-close, .btn-cancel, .overview, .calendar-close').on('click', function(e){
                e.preventDefault();
                wrapPopupCalendar.removeClass('display');
                orderBox.removeClass('display');
                overviewPopup.removeClass('display').height(0);
                bgPopupCalendar.removeClass('display');
            });

            $('.feedback').on('click', function(){
                function interval() {
                    $('.arcticmodal-close, .arcticmodal-overlay, .arcticmodal-container').on('click', function (e) {
                        e.preventDefault();
                        wrapPopupCalendar.removeClass('display');
                        orderBox.removeClass('display');
                        bgPopupCalendar.removeClass('display');
                        overviewPopup.removeClass('display').height(0);
                        clearInterval(intervalClose);
                    });
                }
                var intervalClose = setInterval(interval, 50);
            });
        });
    });

    $('.modal-btn').on('click', function(e){
        e.preventDefault();
    });

    function sliderPolzunok(nameSlider, minTime, maxTime){
        nameSlider.slider({
            min: 0,
            max: 24,
            values: [0,24],
            range: true,
            stop: function(event, ui) {
                minTime.val(nameSlider.slider("values",0) + ':00');
                maxTime.val(nameSlider.slider("values",1) + ':00');

            },
            slide: function(event, ui){
                minTime.val(nameSlider.slider("values",0) + ':00');
                maxTime.val(nameSlider.slider("values",1) + ':00');
            }
        });

        minTime.change(function(){
            var value1=minTime.val();
            var value2=maxTime.val();

            if(parseInt(value1) > parseInt(value2)){
                value1 = value2;
                minTime.val(value1);
            }
            nameSlider.slider("values",0,value1);
        });

        maxTime.change(function(){
            var value1=minTime.val();
            var value2=maxTime.val();

            if (value2 > 24) { value2 = 24; maxTime.val('24:00')}

            if(parseInt(value1) > parseInt(value2)){
                value2 = value1;
                maxTime.val(value2);
            }
            nameSlider.slider("values",1,value2);
        });
    }

    var slider1 = $("#slider"),
        slider2 = $("#slider2"),
        minTime1 = jQuery("input#minCost"),
        minTime2 = jQuery("input#minCost2"),
        maxTime1 = jQuery("input#maxCost"),
        maxTime2 = jQuery("input#maxCost2");

    sliderPolzunok(slider1, minTime1, maxTime1);
    sliderPolzunok(slider2, minTime2, maxTime2);

    $('.fancybox').fancybox();

    $("#wrap-form-js").load("form.html #form-ajax");
});