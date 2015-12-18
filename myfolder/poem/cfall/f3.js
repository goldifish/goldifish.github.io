var fall = ['night.png','today.png','years.png','stars.png','slowly.png','yellow.png','world.png','direction.png']

var count = 1;

$('.base').html("<img src =" + '"night.png"' + "/>");
$('.fs1').show()
$('.base').click(function() {
  if (count == 0) {
    $('.fs8').hide()
    $('.base').html("<img src =" + '"night.png"' + "/>");
    $('.fs1').show()
    count = count + 1;
  } else if (count == 1){
    $('.fs1').hide()
    $('.base').html("<img src =" + '"today.png"' + "/>");
    $('.fs2').show()
    count = count + 1;
  } else if (count == 2) {
    $('.fs2').hide()
    $('.base').html("<img src =" + '"years.png"' + "/>");
    $('.fs3').show()
    console.log(count);
    count = count + 1;
  } else if (count == 3) {
    $('.fs3').hide()
    $('.base').html("<img src =" + '"stars.png"' + "/>");
    $('.fs4').show()
    count = count + 1;
  } else if (count == 4) {
    $('.fs4').hide()
    $('.base').html("<img src =" + '"slowly.png"' + "/>");
    $('.fs5').show()
    count = count + 1;
  } else if (count == 5) {
    $('.fs5').hide()
    $('.base').html("<img src =" + '"yellow.png"' + "/>");
    $('.fs6').show()
    count = count + 1;
  } else if (count == 6) {
    $('.fs6').hide()
    $('.base').html("<img src =" + '"world.png"' + "/>");
    $('.fs7').show()
    count = count + 1;
  } else if (count == 7) {
    $('.fs7').hide()
    $('.base').html("<img src =" + '"direction.png"' + "/>");
    $('.fs8').show()
    count = count + 1;
    count = 0;
  }
})
