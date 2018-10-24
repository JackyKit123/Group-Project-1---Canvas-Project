let currentFunction;

$('#canvas-draft')
    .on('mousedown', e => {
        currentFunction.onMouseDown([e.offsetX, e.offsetY], e);
    })
    .on('mouseleave', e => {
        currentFunction.onMouseLeave([e.offsetX, e.offsetY], e);
    })
    .on('mouseenter', e => {
        currentFunction.onMouseEnter([e.offsetX, e.offsetY], e);
    })
$('html')
    .on('mouseup', e => {
        currentFunction.onMouseUp([e.offsetX, e.offsetY], e);
    })
    .on('mousemove', e => {
        currentFunction.onMouseMove([e.offsetX, e.offsetY], e);
    })
    .on('keydown', e => {
        if (e.shiftKey) {
        shiftPressing = true
        }
    })
    .on('keyup', e => {
        shiftPressing = false
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
}    