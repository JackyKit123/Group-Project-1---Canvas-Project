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

    $('html,.color_preview').on('click', (e) => {
        $('.stroke_width_container').slideUp("slow");
    })

    //Set width function
    $('.stroke_width_input_slider').on('input', function () {
        $('.stroke_width_input').val($('.stroke_width_input_slider').val());
        setstrokeWidth();
        setDash();
    })

    $('.stroke_width_input').on('input', function () {
        $('.stroke_width_input_slider').val($('.stroke_width_input').val());
        setstrokeWidth();
        setDash();
    })

    function setstrokeWidth(e) {
        strokeWidth = $('.stroke_width_input').val();
    }

    //Set dash function
    let clickCountDash = 0;
    let clickCountArrow = 0;
    $('.stroke_dash_button').on('click',function () {
        clickCountDash++;
        setDash()
    });

    function setDash() {
        if (clickCountDash % 2 == 0) {
            strokeDash = 0;
            $('.stroke_dash_button').css({'background':'transparent'});
            
        } else {
            strokeDash = [strokeWidth * 5];
            $('.stroke_dash_button').css({'background':'white'});
        };
    }

    //Set arrow function
    $('.stroke_arrow_button').on('click',function () {
        clickCountArrow++;
        if (clickCountArrow % 2 == 0) {
            strokeArrow = false;
            $('.stroke_arrow_button').css({'background':'transparent'});
        } else {
            strokeArrow = true;            
            $('.stroke_arrow_button').css({'background':'white'});
        }
    });
})