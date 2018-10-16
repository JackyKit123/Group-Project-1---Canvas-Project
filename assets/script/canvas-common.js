let currentFunction;

$('#canvas-draft')
    .mousedown(function(e){
        let mouseX = e.offsetX;
        let mouseY = e.offsetY;
        currentFunction.onMouseDown([mouseX,mouseY],e);
    })
    .mousemove(function(e){
        let mouseX = e.offsetX;
        let mouseY = e.offsetY;
        currentFunction.onMouseMove([mouseX,mouseY],e);
    })
    .mouseup(function(e){
        let mouseX = e.offsetX;
        let mouseY = e.offsetY;
        currentFunction.onMouseUp([mouseX,mouseY],e);
    })
    .mouseleave(function(e){
        let mouseX = e.offsetX;
        let mouseY = e.offsetY;
        currentFunction.onMouseLeave([mouseX,mouseY],e);
    })
    
    .mouseenter(function(e){
        let mouseX = e.offsetX;
        let mouseY = e.offsetY;
        currentFunction.onMouseEnter([mouseX,mouseY],e);
    });

class PaintFunction{
    constructor(){
        this.strokeStyle = 'black'
        this.fillStyle = 'white';
        this.strokeWidth = 1;
    }
    onMouseDown(){}
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}
}    