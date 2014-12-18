/*polzunok*/
jQuery("#slider").slider({
    min: 0,
    max: 24,
    values: [0,24],
    range: true,
    stop: function(event, ui) {
        jQuery("input#minCost").val(jQuery("#slider").slider("values",0) + ':00');
        jQuery("input#maxCost").val(jQuery("#slider").slider("values",1) + ':00');

    },
    slide: function(event, ui){
        jQuery("input#minCost").val(jQuery("#slider").slider("values",0) + ':00');
        jQuery("input#maxCost").val(jQuery("#slider").slider("values",1) + ':00');
    }
});

jQuery("input#minCost").change(function(){
    var value1=jQuery("input#minCost").val();
    var value2=jQuery("input#maxCost").val();

    if(parseInt(value1) > parseInt(value2)){
        value1 = value2;
        jQuery("input#minCost").val(value1);
    }
    jQuery("#slider").slider("values",0,value1);
});


jQuery("input#maxCost").change(function(){
    var value1=jQuery("input#minCost").val();
    var value2=jQuery("input#maxCost").val();

    if (value2 > 24) { value2 = 24; jQuery("input#maxCost").val('24:00')}

    if(parseInt(value1) > parseInt(value2)){
        value2 = value1;
        jQuery("input#maxCost").val(value2);
    }
    jQuery("#slider").slider("values",1,value2);
});