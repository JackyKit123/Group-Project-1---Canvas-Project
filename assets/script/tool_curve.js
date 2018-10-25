class DrawingCurveLine extends PaintFunction {
    constructor() {
        super();
        this.parameter = {
            layer: false,
            strokeWidth: strokeWidth,
            strokeStyle: strokeStyle,
            x1: 0, y1: 0,
        }
        this.drawCurveState = 0;
    }
    onMouseDown(coord, event) {
        if (this.drawCurveState == 0) {
            this.drawCurveState = 1;
            this.dragging = true;
            this.parameter.x1 = coord[0];
            this.parameter.y1 = coord[1];
        } else if (!this.dragging) {
            this.dragging = true;
            this.drawCurveState++;
        }
    }
    
    onMouseMove(coord, event) {
        if (this.dragging) {
            $('#canvas-draft').clearCanvas()
            this.draw(coord[0], coord[1], '#canvas-draft');
        }
    }

    onMouseUp(coord, event) {
        if (this.drawCurveState == 3) {
            resetUndo()
            $('#canvas-draft').clearCanvas()
            this.parameter.layer = true;
            this.dragging = false;
            this.draw(coord[0], coord[1], '#canvas-real');
            //reset
            this.parameter = {
                layer: false,
                strokeWidth: strokeWidth,
                strokeStyle: strokeStyle,
                x1: 0, y1: 0,
            }
            this.drawCurveState = 0
        } else if (this.dragging) {
            this.dragging = false;
            $('#canvas-draft').clearCanvas()
            this.draw(coord[0], coord[1], '#canvas-draft');
        }
    }

    onMouseLeave(coord, event) {
        if (this.dragging) {
            $('#canvas-draft').clearCanvas()
            this.draw(coord[0], coord[1], '#canvas-draft');
        }
    }

    onDoubleClick(coord, event) {
        if (this.drawCurveState == 2) {
            resetUndo()
            $('#canvas-draft').clearCanvas()
            this.parameter.layer = true;
            this.dragging = false;
            this.draw(coord[0], coord[1], '#canvas-real');
            //reset
            this.parameter = {
                layer: false,
                strokeWidth: strokeWidth,
                strokeStyle: strokeStyle,
                x1: 0, y1: 0,
            }
            this.drawCurveState = 0
        }
    }

    draw(x, y, which) {
        this.parameter.strokeStyle = strokeStyle;
        this.parameter.strokeWidth = strokeWidth;
        if (this.drawCurveState == 1) {
            this.parameter.x2 = x;
            this.parameter.y2 = y;
            $(which).drawLine(this.parameter);
        } else if (this.drawCurveState == 2) {
            this.parameter.cx1 = x;
            this.parameter.cy1 = y;
            $(which).drawQuadratic(this.parameter);
        } else {
            this.parameter.cx2 = x;
            this.parameter.cy2 = y;
            $(which).drawBezier(this.parameter);
        }
    }
}