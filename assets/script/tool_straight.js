class DrawingStraightLine extends PaintFunction {
    constructor() {
        super();
    }

    onMouseDown(coord, event) {
        this.dragging = true;
        this.mouseBeginX = coord[0];
        this.mouseBeginY = coord[1];
    }

    onMouseMove(coord, event) {
        if (this.dragging) {
            $('#canvas-draft').clearCanvas()
            this.mouseEndX = coord[0];
            this.mouseEndY = coord[1];
            this.draw(this.mouseBeginX, this.mouseBeginY, this.mouseEndX, this.mouseEndY, '#canvas-draft');
        }
    }

    onMouseUp(coord, event) {
        if (this.dragging) {
            this.mouseEndX = coord[0];
            this.mouseEndY = coord[1];
            resetUndo();
            this.draw(this.mouseBeginX, this.mouseBeginY, this.mouseEndX, this.mouseEndY, '#canvas-real');
            this.dragging = false;
            $('#canvas-draft').clearCanvas()
        }
    }

    draw(x1, y1, x2, y2, which) {
        if (which == '#canvas-draft') {
            var printLayer = false;
        } else {
            var printLayer = true;
        }
        const arrowRadius = Math.max(parseInt(strokeWidth * 2), 15);
        $(which).drawLine({
            layer: printLayer,
            strokeWidth: strokeWidth,
            strokeDash: [strokeDash],
            strokeStyle: strokeStyle,
            startArrow: strokeArrow,
            arrowRadius: arrowRadius,
            arrowAngle: 90,
            x1: x2, y1: y2,
            x2: x1, y2: y1,            
        })
    } 
}

