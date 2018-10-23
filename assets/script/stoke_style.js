$(function() {
    $('.strokeWidth_container').hide();
    if($('#drawing-circle, #drawing-polygon, #drawing-rectangle').on('click', e => {
        $('.strokeDashButton').slideDown();
    })) 
    $('.strokeDashButton').hide(); 
    
    if($('#drawing-line').on('click', e => {
        $('.strokeArrowButton, .strokeDashButton').slideDown();
    }))
    $('.strokeArrowButton, .strokeDashButton').hide();

    $('.strokeWidthButton').on('click', (e) => {
        e.stopPropagation()
        if ($('.strokeWidth_container').is(":visible")) {
            $('.strokeWidth_container').hide();
        }
        $('.strokeWidth_container').slideDown("slow");
    })

    $('.strokeWidth_container').on('click', (e) => {
        e.stopPropagation()
    })

    $('html').on('click', (e) => {
        $('.strokeWidth_container').slideUp("slow");
    }) 


    function setstrokeWidth (e) {
        strokeWidth = $('#strokeWidth').val();
    }

})