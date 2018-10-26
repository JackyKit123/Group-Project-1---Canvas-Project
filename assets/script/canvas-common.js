let currentFunction;
let clickTimer = null;
$('#canvas-draft')
    .on('touchstart mousedown', e => {
        e.preventDefault();
        e.target.focus({ preventScroll: true });
        if (clickTimer == null) {
            clickTimer = setTimeout(function () {
                clickTimer = null;
                currentFunction.onMouseDown([e.offsetX, e.offsetY], e);
            }, 200)
        } else {
            clearTimeout(clickTimer);
            clickTimer = null;
            currentFunction.onDoubleClick([e.offsetX, e.offsetY], e);
        }
    })
    .on('mouseleave', e => {
        currentFunction.onMouseLeave([e.offsetX, e.offsetY], e);
    })
    .on('mouseenter', e => {
        currentFunction.onMouseEnter([e.offsetX, e.offsetY], e);
    })
    .on('touchend', e => {
        currentFunction.onMouseUp([e.offsetX, e.offsetY], e);
    })
$('html')
    .on('mouseup', e => {
        currentFunction.onMouseUp([e.offsetX, e.offsetY], e);
    })
    .on('mousemove touchmove', e => {
        e.preventDefault();
        e.target.focus({ preventScroll: true });
        (e.type == 'touchmove') ?
            currentFunction.onMouseMove([e.offsetX - 200, e.offsetY - 108], e) :
            currentFunction.onMouseMove([e.offsetX, e.offsetY], e);
    })
    .on('keydown', e => {
        if (e.shiftKey) {
            shiftPressing = true
        }
        currentFunction.onKeyDown([e.offsetX, e.offsetY], e);
    })
    .on('keyup', e => {
        shiftPressing = false
        currentFunction.onKeyUp([e.offsetX, e.offsetY], e);
    })

let strokeStyle = 'black';
let fillStyle = 'hsla(0,100%,100%,0)';
let strokeWidth = 1;
let strokeDash = 0;
let strokeArrow = false;
let dragging = false;
let shiftPressing = false;

class PaintFunction {
    constructor() {
    }
    onMouseDown() { }
    onMouseMove() { }
    onMouseUp() { }
    onMouseLeave() { }
    onMouseEnter() { }
    onDoubleClick() { }
    onKeyDown() { }
    onKeyUp() { }
}    