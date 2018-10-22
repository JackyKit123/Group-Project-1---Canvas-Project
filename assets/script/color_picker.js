let color_picker_dragging = false;
$('.picker_field').on('mousedown', function (e) {
  color_picker_dragging = true;
  setColor(e)
})
$('.picker_field').on('mousemove', function (e) {
  if (color_picker_dragging) setColor(e);
})
$('.picker_field').on('mouseup mouseleave', function () {
  color_picker_dragging = false;
})
$('.color-number').on('input', function (e) {
  $('.alpha_picker_slider').val($('.alpha_picker_number').val());
  $('.hue_picker_slider').val($('.hue_picker_number').val());
  setColor();
})
$('.color-slider').on('input', function () {
  $('.alpha_picker_number').val($('.alpha_picker_slider').val());
  $('.hue_picker_number').val($('.hue_picker_slider').val());
  setColor();
})
let l = "50%";
let s = "100%";
function setColor(e) {
  const h = $('.hue_picker').val()
  if (e) {
    l = (1 - e.offsetY / $('.picker_field').height()) * 100 + '%'
    s = e.offsetX / $('.picker_field').width() * 100 + '%'
    $('#selector').css({ bottom: l, left: s })
  }
  const a = $('.alpha_picker').val() / 100;
  $('.picker_field').css({ 'background-color': `hsla(${h},100%,50%,1)` })
  $('.color_preview').css({ 'background-color': `hsla(${h},${s},${l},${a})` })
}