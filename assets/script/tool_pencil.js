class Pencil extends PaintFunction {
    constructor() {
        super();
    }

    onMouseDown(coord, event) {
        resetUndo();
        this.layersNumOnPencilBegin = $('#canvas-real').getLayers().length + 1
        this.dragging = true;
        this.mouseBeginX = coord[0];
        this.mouseBeginY = coord[1];
    }

    onMouseMove(coord, event) {
        if (this.dragging) {
            this.mouseEndX = coord[0];
            this.mouseEndY = coord[1];
            this.draw(this.mouseBeginX, this.mouseBeginY, this.mouseEndX, this.mouseEndY);
            this.mouseBeginX = this.mouseEndX;
            this.mouseBeginY = this.mouseEndY;
        }
    }
    
    onMouseUp(coord, event) {
        this.dragging = false;
        }

    onMouseLeave(coord, event) {
        this.dragging = false;
    }

    draw(x1, y1, x2, y2) {
        $('#canvas-real').drawLine({
            layer: true,
            groups: [this.layersNumOnPencilBegin],
            strokeWidth: this.strokeWidth,
            strokeStyle: this.strokeStyle,
            x1: x1, y1: y1,
            x2: x2, y2: y2,
        })

    }
}