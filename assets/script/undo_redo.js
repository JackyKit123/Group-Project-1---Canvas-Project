//first undo always remove the last element in the layer array
let undoIndex = -1;
$("#undo").on('click', function () {
    //only execute function if there is a layer to be removed
    if (Math.abs(undoIndex) <= $('#canvas-real').getLayers().length) {
        //only hiding the layer for now, not removing yet, incase of redo
        /*if condition is a special statement for removing pencil, removing layers within the same
        pencil(each pencil drawing has the same group, get .group[0] gets the group name, then setting
        the property for the pencil group with the same name to invisible*/
        if ($('#canvas-real').getLayer(undoIndex).groups[0]) {
            $('#canvas-real').animateLayerGroup($('#canvas-real').getLayer(undoIndex).groups[0], {
                visible: false
            }, 0);
            //specifically, for pencil, undoIndex moves until it exits the end of the group of pencil layer
            const group = $('#canvas-real').getLayer(undoIndex).groups[0]
            //typeof check is needed otherwise TypeError would be thrown, doesn't affect user experience, but bug should be avoided
            while (typeof $('#canvas-real').getLayer(undoIndex) !== 'undefined' && $('#canvas-real').getLayer(undoIndex).groups[0] == group) {
                undoIndex--;
            }
        } else {
            //simple removing layers for basic brushes
            $('#canvas-real').animateLayer(undoIndex, {
                visible: false
            }, 0);
            //undoIndex moves to next item
            undoIndex--;
        }
    }
    //disable the undo button if there is nothing more to be undone
    if (Math.abs(undoIndex) > $('#canvas-real').getLayers().length) {
        $('#undo').prop('disabled', true); 
    }
    //enable the redo button
    if (undoIndex < -1) {
        $('#redo').prop('disabled', false); 
    }
})

$("#redo").on('click', function () {
    //only execute function if there is an undo to be redone
    //-1 means there is 0 work to be undone
    if (undoIndex < -1) {
        //shift back to the previous hidden layer
        undoIndex++;
        //if true, pencil, else, normal
        if ($('#canvas-real').getLayer(undoIndex).groups[0]) {
            //reset pencil group to be visible
            $('#canvas-real').animateLayerGroup($('#canvas-real').getLayer(undoIndex).groups[0], {
                visible: true
            }, 0);
            //undoIndex moves to previous item
            const group = $('#canvas-real').getLayer(undoIndex).groups[0]
            while ($('#canvas-real').getLayer(undoIndex).groups[0] == group) {
                undoIndex++;
            }
            undoIndex--;
        } else {
            //undoIndex moves to previous item
            $('#canvas-real').animateLayer(undoIndex, {
                visible: true
            }, 0);
        }
        //disable the redo button if there is nothing more to be redone
        if (undoIndex == -1) {
            $('#redo').prop('disabled', true); 
        }
        //enable the undo button
        if (Math.abs(undoIndex) <= $('#canvas-real').getLayers().length) {
            $('#undo').prop('disabled', false); 
        }
    }
})

//call this function when a new item is drawn, removing all the undid layers
const resetUndo = () => {
    $('#undo').prop('disabled', false);
    $('#redo').prop('disabled', true);
    while (undoIndex < -1) {
        $('#canvas-real').removeLayer(-1);
        undoIndex++;
    }
}