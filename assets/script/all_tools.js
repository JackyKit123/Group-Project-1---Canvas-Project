    currentFunction = new Pencil();

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
    $('#drawing-bat').on('click', () => {
        currentFunction = new DrawingBat();
    });
    $('#drawing-pumpkin').on('click', () => {
        currentFunction = new DrawingPumpkin();
    });

    $('#clear-canvas').on('click', () => {
        if (confirm('Erase All will remove all your work and changes cannot be undone, Sure?')) {
            $('.canvas').clearCanvas();
            $('.canvas').removeLayers()
            $('#undo, #redo').prop('disabled', true).css({'color':'grey'})
            }
    });

    