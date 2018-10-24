$(function() {
    $('.stroke_width_container').hide();
    if($('#drawing-circle, #drawing-polygon, #drawing-rectangle').on('click', e => {
        $('.stroke_dash_button').slideDown();
    })) 
    $('.stroke_dash_button').hide(); 
    
    if($('#drawing-line').on('click', e => {
        $('.stroke_arrow_button, .stroke_dash_button').slideDown();
    }))
    $('.stroke_arrow_button, .stroke_dash_button').hide();

    $('.stroke_width_button').on('click', (e) => {
        e.stopPropagation()
        if ($('.sstroke_width_container').is(":visible")) {
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

    /* $('#stroke_width_input_slider').on('input', function(){
        $('#stroke_width_input_slider').val($('#stroke_width_input').val());
        setstrokeWidth();
    })
 */
    /* function setstrokeWidth (e) {
        if($('.stroke_width_container').is(":visible")) {

        }
        strokeWidth = $('#strokeWidth').val();
    } */

})