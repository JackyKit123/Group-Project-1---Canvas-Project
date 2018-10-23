    currentFunction = new Pencil();

    $('#drawing-rectangle').on('click', () => {
        currentFunction = new DrawingRectangle();
    });
    $('#drawing-line').on('click', () => {
        currentFunction = new DrawingStraightLine();
    });
    $('#pencil').on('click', () => {
        currentFunction = new Pencil();
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

    $('#clear-canvas').on('click', () => {
        if (confirm('Erase All will remove all your work and changes cannot be undone, Sure?')) {
            $('.canvas').clearCanvas();
            $('.canvas').removeLayers()
            $('#undo, #redo').prop('disabled', true);
            }
    });