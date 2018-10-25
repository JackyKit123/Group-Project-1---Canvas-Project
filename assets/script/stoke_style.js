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
<<<<<<< HEAD

    $('.stroke_dash_button').on('click',function () {
        clickCountDash++;
=======
    let clickCountArrow = 0;
    $('.stroke_dash_button').on('click',function () {
        clickCountDash++;
        setDash()
    });

    function setDash() {
>>>>>>> master
        if (clickCountDash % 2 == 0) {
            strokeDash = 0;
            $('.stroke_dash_button').css({'background':'transparent'});
            
        } else {
<<<<<<< HEAD
            strokeDash = [strokeWidth + 2];
=======
            strokeDash = [strokeWidth * 5];
            $('.stroke_dash_button').css({'background':'white'});
>>>>>>> master
        };
    }

    //Set arrow function
<<<<<<< HEAD
    let clickCountArrow = 0
    $('.stroke_arrow_button').click(function () {
        clickCountArrow++;
        if (clickCountArrow % 2 == 0) {
            strokeArrow = false;
=======
    $('.stroke_arrow_button').on('click',function () {
        clickCountArrow++;
        if (clickCountArrow % 2 == 0) {
            strokeArrow = false;
            $('.stroke_arrow_button').css({'background':'transparent'});
>>>>>>> master
        } else {
            strokeArrow = true;            
            $('.stroke_arrow_button').css({'background':'white'});
        }
    });
})