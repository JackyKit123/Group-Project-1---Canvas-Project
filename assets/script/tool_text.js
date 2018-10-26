class DrawingText extends PaintFunction {
    constructor() {
        super();
        this.parameter = {
            layer: true,
            fillStyle: fillStyle,
            strokeStyle: strokeStyle,
            strokeWidth: 2,
            x: 0, y: 0,
            fontSize: Math.max(strokeWidth,20),
            fontFamily: 'Verdana, sans-serif',
            fromCenter: false,
            text: '',
        }
    }

    onMouseDown(coord, event) {
        if (!($('#canvasInput')[0])) {
            let x = coord[0]
            let y = coord[1]
            this.parameter.x = x;
            this.parameter.y = y;
        $( "#canvas-mainboard" ).append( `<input type=text style="font-size:${Math.max(strokeWidth,20)}px;height:${Math.max(strokeWidth,20)}px;width:${Math.max(strokeWidth,20) * 10}px;top:${y}px; left:${x + 200}px; position:absolute" id="canvasInput">` );
        } else {
            $('#canvasInput').remove()
            let x = coord[0]
            let y = coord[1]
            this.parameter.x = x;
            this.parameter.y = y;
            $( "#canvas-mainboard" ).append( `<input type=text style="font-size:${Math.max(strokeWidth,20)}px;height:${Math.max(strokeWidth,20)}px;width:${Math.max(strokeWidth,20) * 10}px;top:${y}px; left:${x + 200}px; position:absolute" id="canvasInput">` );
        }
    }

    onKeyDown(coord, event) {
        if (event.keyCode == 13) {
            this.parameter.text = $('#canvasInput').val()
            resetUndo()
            $('#canvasInput').remove()
            this.parameter.fontSize = Math.max(strokeWidth, 20)
            $('#canvas-real').drawText(this.parameter)
        }
        if (event.keyCode == 27) {
            $('#canvasInput').remove()
        }
    }
}

$('#sidebar, #sidebar-2').on('click',e => {
    $('#canvasInput').remove()
})