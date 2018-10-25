//first undo always remove the last element in the layer array
let undoIndex = -1;
$("#undo").on('click', function () {
    //only execute function if there is a layer to be removed
    if (Math.abs(undoIndex) <= $('#canvas-real').getLayers().length) {
            //simple removing layers for basic brushes
            $('#canvas-real').animateLayer(undoIndex, {
                visible: false
            }, 0);
            //undoIndex moves to next item
            undoIndex--;
    }
    //disable the undo button if there is nothing more to be undone
    if (Math.abs(undoIndex) > $('#canvas-real').getLayers().length) {
        $('#undo').prop('disabled', true).css({'color':'grey'});
    }
    //enable the redo button
    if (undoIndex < -1) {
        $('#redo').prop('disabled', false).css({'color':'white'});
    }
})

$("#redo").on('click', function () {
    //only execute function if there is an undo to be redone
    //-1 means there is 0 work to be undone
    if (undoIndex < -1) {
        //shift back to the previous hidden layer
        undoIndex++;
            //undoIndex moves to previous item
            $('#canvas-real').animateLayer(undoIndex, {
                visible: true
            }, 0);
        }
        //disable the redo button if there is nothing more to be redone
        if (undoIndex == -1){
            $('#redo').prop('disabled', true).css({'color':'grey'});
        }
        //enable the undo button
        if (Math.abs(undoIndex) <= $('#canvas-real').getLayers().length) {
            $('#undo').prop('disabled', false).css({'color':'white'});
        }
})

//call this function when a new item is drawn, removing all the undid layers
const resetUndo = () => {
    $('#undo').prop('disabled', false).css({'color':'white'});
    $('#redo').prop('disabled', true).css({'color':'grey'});
    while (undoIndex < -1) {
        $('#canvas-real').removeLayer(-1);
        undoIndex++;
    }
}