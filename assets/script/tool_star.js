class DrawingStar extends PaintFunction {
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
        const h = Math.abs(y1-y2);
        const w = Math.abs(x1-x2);
        const x = Math.min(x1,x2);
        const y = Math.min(y1,y2);
        if (which == '#canvas-draft') {
            var printLayer = false;
        } else {
            var printLayer = true;
        }
        $(which).drawPolygon({
            layer: printLayer,
            fillStyle: fillStyle,
            strokeStyle: strokeStyle,
            strokeWidth: strokeWidth,
            x: x, y: y,
            radius:  Math.PI * (h),
            rotate: x+y,
            height: h,
            width: w,
            sides: 5,
            concavity: 0.5,
            fromCenter: true,

        })

    }
}