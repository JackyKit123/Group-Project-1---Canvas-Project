
$('.color_preview.fill').on('click', () => {
  if($('.color_picker_container.stroke').is(":visible")) {
    $('.color_picker_container.stroke').hide();
  }
  $('.color_picker_container.fill').slideDown("slow");
  
})
$('.color_preview.stroke').on('click', () => {
  if($('.color_picker_container.fill').is(":visible")) {
    $('.color_picker_container.fill').hide();
  }
  $('.color_picker_container.stroke').slideDown("slow");
})
$('html').on('click', (e) => {
  /* console.log(e.target) */
})

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
  $('.alpha_picker_slider.fill').val($('.alpha_picker_number.fill').val());
  $('.hue_picker_slider.fill').val($('.hue_picker_number.fill').val());
  $('.alpha_picker_slider.stroke').val($('.alpha_picker_number.stroke').val());
  $('.hue_picker_slider.stroke').val($('.hue_picker_number.stroke').val());
  setColor();
})
$('.color-slider').on('input', function () {
  $('.alpha_picker_number.fill').val($('.alpha_picker_slider.fill').val());
  $('.hue_picker_number.fill').val($('.hue_picker_slider.fill').val());
  $('.alpha_picker_number.stroke').val($('.alpha_picker_slider.stroke').val());
  $('.hue_picker_number.stroke').val($('.hue_picker_slider.stroke').val());
  setColor();
})
let l = "50%";
let s = "100%";
function setColor(e) {
  if($('.color_picker_container.fill').is(":visible")) {
  const h = $('.hue_picker.fill').val()
  if (e) {
    l = (1 - e.offsetY / $('.picker_field.fill').height()) * 100 + '%'
    s = e.offsetX / $('.picker_field.fill').width() * 100 + '%'
    $('.selector.fill').css({ bottom: l, left: s })
  }
  const a = $('.alpha_picker.fill').val() / 100;
  $('.picker_field.fill').css({ 'background-color': `hsla(${h},100%,50%,1)` })
  $('.color_preview.fill').css({ 'background-color': `hsla(${h},${s},${l},${a})` })
} else if ($('.color_picker_container.stroke').is(":visible")) {
  const h = $('.hue_picker.stroke').val()
  if (e) {
    l = (1 - e.offsetY / $('.picker_field.stroke').height()) * 100 + '%'
    s = e.offsetX / $('.picker_field.stroke').width() * 100 + '%'
    $('.selector.stroke').css({ bottom: l, left: s })
  }
  const a = $('.alpha_picker.stroke').val() / 100;
  $('.picker_field.stroke').css({ 'background-color': `hsla(${h},100%,50%,1)` })
  $('.color_preview.stroke').css({ 'background-color': `hsla(${h},${s},${l},${a})` })
}
}