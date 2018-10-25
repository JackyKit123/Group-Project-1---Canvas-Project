class Pencil extends PaintFunction {
    constructor() {
        super();
        this.parameter = {
            layer: true,
            strokeWidth: strokeWidth,
            strokeStyle: strokeStyle,
            x1: 0, y1: 0,
            closed: false,
        }
        this.pencilLength = 1;
    }
    onMouseDown(coord, event) {
        this.dragging = true;
        this.parameter.x1 = coord[0];
        this.parameter.y1 = coord[1];
    }

    onMouseMove(coord, event) {

        if (this.dragging) {
            this.pencilLength++;
            $('#canvas-draft').clearCanvas()
            this.draw(coord[0], coord[1], '#canvas-draft');
        }
    }

    onMouseUp(coord, event) {
        if (this.dragging) {
            this.pencilLength++;
            resetUndo();
            this.dragging = false;
            this.draw(coord[0], coord[1], '#canvas-real');
            $('#canvas-draft').clearCanvas()
            this.parameter = {
                layer: true,
                strokeWidth: strokeWidth,
                strokeStyle: strokeStyle,
                x1: 0, y1: 0,
                closed: false,
            }
            this.pencilLength = 1;
        }
    }

    onMouseLeave(coord, event) {
        if (this.dragging) {
            this.pencilLength++;
            this.dragging = false;
            $('#canvas-draft').clearCanvas()
            resetUndo();
            this.draw(coord[0], coord[1], '#canvas-real');
            this.parameter = {
                layer: true,
                strokeWidth: strokeWidth,
                strokeStyle: strokeStyle,
                x1: 0, y1: 0,
                closed: false,
            }
            this.pencilLength = 1;
        }
    }

    draw(x, y, which) {
        this.parameter.strokeStyle = strokeStyle
        this.parameter.strokeWidth = strokeWidth
        if (which == '#canvas-draft') {
            this.parameter.layer = false;
        } else {
            this.parameter.layer = true;
        }
        this.parameter[`x${this.pencilLength}`] = x
        this.parameter[`y${this.pencilLength}`] = y
        $(which).drawLine(this.parameter)
    }
}