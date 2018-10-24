class DrawingPolygon extends PaintFunction {
    constructor() {
        super();
        this.parameter = {
            layer: true,
            closed: false,
            strokeWidth: strokeWidth,
            strokeStyle: strokeStyle,
            x1: 0, y1: 0,
        }
        this.polygonSide = 2;
        this.drawingPolygon = false;
    }
    onMouseDown(coord, event) {
        if (!this.drawingPolygon) {
            this.drawingPolygon = true;
            this.dragging = true;
            this.parameter.x1 = coord[0];
            this.parameter.y1 = coord[1];
        } else if (!this.dragging) {
            this.dragging = true;
            this.polygonSide++;
        }
    }
    
    onMouseMove(coord, event) {
        if (this.dragging) {
            $('#canvas-draft').clearCanvas()
            this.draw(coord[0], coord[1], '#canvas-draft');
        }
    }

    onMouseUp(coord, event) {
        if (this.dragging) {
            this.dragging = false;
            $('#canvas-draft').clearCanvas()
            this.draw(coord[0], coord[1], '#canvas-draft');
        }
    }

    onMouseLeave(coord, event) {
        if (this.dragging) {
            this.dragging = false;
            $('#canvas-draft').clearCanvas()
            this.draw(coord[0], coord[1], '#canvas-draft');
        }
    }

    onDoubleClick(coord, event) {
        if (this.drawingPolygon) {
            resetUndo()
            $('#canvas-draft').clearCanvas()
            this.drawingPolygon = false;
            this.dragging = false;
            this.draw(coord[0], coord[1], '#canvas-real');
            //reset
            this.parameter = {
                layer: true,
                closed: false,
                strokeWidth: strokeWidth,
                strokeStyle: strokeStyle,
                x1: 0, y1: 0,
            }
            this.polygonSide = 2;
        }
    }

    draw(x, y, which) {
        if (which == '#canvas-real') {
            this.parameter.layer = true;
            this.parameter.closed = true;
            this.parameter.strokeStyle = strokeStyle
            this.parameter.strokeWidth = strokeWidth
            $(which).drawLine(this.parameter)
        } else if (which == '#canvas-draft') {
        this.parameter.closed = false
        this.parameter.strokeStyle = strokeStyle
        this.parameter.strokeWidth = strokeWidth
        this.parameter.layer = false;
        this.parameter[`x${this.polygonSide}`] = x
        this.parameter[`y${this.polygonSide}`] = y
        $(which).drawLine(this.parameter)
        }
    }
}