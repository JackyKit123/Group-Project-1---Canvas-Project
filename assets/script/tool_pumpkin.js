class DrawingPumpkin extends PaintFunction {
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
        let h = Math.abs(y1-y2);
        let w = Math.abs(x1-x2);
        let x = Math.min(x1,x2);
        let y = Math.min(y1,y2);
        h = w
            if (y2<y1) {
            y = y1 - h
            }
        if (which == '#canvas-draft') {
            var printLayer = false;
        } else {
            var printLayer = true;
        }
        $(which).drawImage({
            layer: printLayer,
            source: 'assets/img/pumpkin.png',
            x: x, y: y,
            height: h,
            width: w,
            fromCenter: false
        });
     }
}