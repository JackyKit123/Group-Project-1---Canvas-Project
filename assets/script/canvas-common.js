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

let strokeStyle = 'black';
let fillStyle = 'hsla(0,100%,100%,0)';
let strokeWidth = 1;
let strokeDash = 0;
let strokeArrow = false;
let dragging = false;

class PaintFunction {
    constructor() {
    }
    onMouseDown() { }
    onMouseMove() { }
    onMouseUp() { }
    onMouseLeave() { }
    onMouseEnter() { }
}    