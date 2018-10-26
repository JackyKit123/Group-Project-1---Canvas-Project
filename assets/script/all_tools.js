$(document).ready(function() {
  

    $('#drawing-rectangle').on('click', () => {
        currentFunction = new DrawingRectangle();
    });
    $('#drawing-line').on('click', () => {
        currentFunction = new DrawingStraightLine();
    });
    $('#drawing-curve').on('click', () => {
        currentFunction = new DrawingCurveLine();
    });
    $('#pencil').on('click', () => {
        currentFunction = new Pencil();
    });
    $('#drawing-polygon').on('click', () => {
        currentFunction = new DrawingPolygon();
    });
    $('#drawing-circle').on('click', () => {
        currentFunction = new DrawingCircle();
    });
    $('#drawing-star').on('click', () => {
        currentFunction = new DrawingStar();
    });
    $('#drawing-text').on('click', () => {
        currentFunction = new DrawingText();
    });
    $('#drawing-pumpkin').on('click', () => {
        currentFunction = new DrawingPumpkin();
    });
    $('#drawing-bat').on('click', () => {
        currentFunction = new DrawingBat();
    });

    $('#clear-canvas').on('click', () => {
        if (confirm('Erase All will remove all your work and changes cannot be undone, Sure?')) {
            $('.canvas').clearCanvas();
            $('.canvas').removeLayers()
            $('#undo, #redo').prop('disabled', true).css({'color':'grey'})
            }
    });

    $('#download').on('click',function() {
        const canvas = document.getElementById('canvas-real')
        $('#download').attr("href",canvas.toDataURL());
        })

    $('#sidebar button').on('click', function(){
        if ($(this).is("active"))
        $('#sidebar button').not(this).removeClass('active');
      else
        $(this).addClass('active');
      $('#sidebar button').not(this).removeClass('active');
    });

    currentFunction = new Pencil();
})