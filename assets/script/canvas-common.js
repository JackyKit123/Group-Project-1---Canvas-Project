let currentFunction;

$('#canvas-draft')
    .mousedown(function (e) {
        currentFunction.onMouseDown([e.offsetX, e.offsetY], e);
    })
    .mouseleave(function (e) {
        currentFunction.onMouseLeave([e.offsetX, e.offsetY], e);
    })
    .mouseenter(function (e) {
        currentFunction.onMouseEnter([e.offsetX, e.offsetY], e);
    })
$('html')
    .mouseup(function (e) {
        currentFunction.onMouseUp([e.offsetX, e.offsetY], e);
    })
    .mousemove(function (e) {
        currentFunction.onMouseMove([e.offsetX, e.offsetY], e);
    })

class PaintFunction {
    constructor() {
        this.strokeStyle = 'black';
        this.fillStyle = 'hsla(0,100%,100%,0)';
        this.strokeWidth = 1;
        this.strokeDash = 0;
        this.strokeArrow = false;
        this.dragging = false;
    }
    onMouseDown() { }
    onMouseMove() { }
    onMouseUp() { }
    onMouseLeave() { }
    onMouseEnter() { }

    changeStrokeStyle(style) {
        this.strokeStyle = style;
    }
    changeFillStyle(style) {
        this.fillStyle = style;
    }
    changeStrokeWidth(width) {
        this.strokeWidth = width;
    }
    changeStrokeDash(boolean) {
        boolean ? this.strokeDash = this.strokeWidth * 10 : this.strokeDash = 0;
    }
    changeStrokeArrow(boolean) {
        this.strokeArrow = boolean;
    }
}    