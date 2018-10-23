class DrawingText extends PaintFunction {
    constructor() {
        super();
        
    }

    onMouseDown(coord, event) {
        this.dragging = true;
        this.mouseBeginX = coord[0];
        this.mouseBeginY = coord[1];        
    }

    onMouseMove(coord, event) {
    }

    onMouseUp(coord, event) {
        if (this.dragging) {
            this.mouseEndX = coord[0];
            this.mouseEndY = coord[1];
            resetUndo();
            this.draw(this.mouseBeginX, this.mouseBeginY, this.mouseEndX, this.mouseEndY, '#canvas-real');
            this.dragging = false;
            $('#canvas-draft').clearCanvas();
        }
    }

    /* onKeyDown(coord, event) {
        if(event.keydown) {
            this.draw(this.key, this.mouseBeginX, this.mouseBeginY);
        }
        
        if(event.keycode === 8) {
            resetUndo();
        } else if (event.keycode === 13) {
            this.drawText(this.mouseBeginX, this.mouseBeginY, '#canvas-real');
        } else {
            this.drawText(event.key, this.mouseBeginX, this.mouseBeginY, '#canvas-draft');
        }
    } */

    draw(x1, y1, x2, y2, which) {
        const x = Math.min(x1,x2);
        const y = Math.min(y1,y2);
        if (which == '#canvas-draft') {
            var printLayer = false;
        } else {
            var printLayer = true;
        }
        $(which).drawText({
            layer: printLayer,
            strokeStyle: this.strokeStyle,
            strokeWidth: this.strokeWidth,
            fontFamily: "Arial",
            fontSize: 40,
            text: "world",
            x: x, y: y,
        })
    }    
    
}



