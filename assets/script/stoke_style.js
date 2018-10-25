$(function () {
    $('.stroke_width_container').hide();
    $('.stroke_dash_item, .stroke_arrow_item').hide();

    $('#drawing-line').on('click', e => {
        $('.stroke_dash_item, .stroke_arrow_item').slideDown();
    })

    $('button').not("#drawing-line").on('click', e => {
        $('.stroke_dash_item, .stroke_arrow_item').slideUp();
    })

    $('.stroke_width_button').on('click', (e) => {
        e.stopPropagation()
        if ($('.stroke_width_container').is(":visible")) {
            $('.stroke_width_container').hide();
        }
        $('.stroke_width_container').slideDown("slow");
    })

    $('.stroke_width_container').on('click', (e) => {
        e.stopPropagation()
    })

    $('html').on('click', (e) => {
        $('.stroke_width_container').slideUp("slow");
    })

    //Set width function
    $('.stroke_width_input_slider').on('input', function () {
        $('.stroke_width_input').val($('.stroke_width_input_slider').val());
        setstrokeWidth();
    })

    $('.stroke_width_input').on('input', function () {
        $('.stroke_width_input_slider').val($('.stroke_width_input').val());
        setstrokeWidth();
    })

    function setstrokeWidth(e) {
        strokeWidth = $('.stroke_width_input').val();
    }

    //Set dash function
    let clickCount = 0;

    // clickCount = (clickCount == 2) ? 0 : clickCount;
    $('.stroke_dash_button').on('click',function () {
        clickCount++;
        if (clickCount % 2 == 0) {
            strokeDash = 0;
        } else {
            strokeDash = [strokeWidth + 10];
        };
    });

    //Set arrow function
    $('.stroke_arrow_button').click(function () {
        clickCount++;
        if (clickCount % 2 == 0) {
            strokeArrow = false;
        } else if (clickCount % 2 == 1) {
            strokeArrow = true;            
        }
    });
})