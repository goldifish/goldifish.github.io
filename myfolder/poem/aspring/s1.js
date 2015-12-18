var spring = ['flower.png','rose.png','eyes.png','sound.png','dress.png','sun.png','necessary.png','yourself.png']

var count = 1;

$('.base').html("<img src =" + '"flower.png"' + "/>");
$('.ss1').show()
$('.base').click(function() {
  if (count == 0) {
    $('.ss8').hide()
    $('.base').html("<img src =" + '"flower.png"' + "/>");
    $('.ss1').show()
    count = count + 1;
  } else if (count == 1){
    $('.ss1').hide()
    $('.base').html("<img src =" + '"rose.png"' + "/>");
    $('.ss2').show()
    count = count + 1;
  } else if (count == 2) {
    $('.ss2').hide()
    $('.base').html("<img src =" + '"eyes.png"' + "/>");
    $('.ss3').show()
    console.log(count);
    count = count + 1;
  } else if (count == 3) {
    $('.ss3').hide()
    $('.base').html("<img src =" + '"sound.png"' + "/>");
    $('.ss4').show()
    count = count + 1;
    // count = 0;
  } else if (count == 4) {
    $('.ss4').hide()
    $('.base').html("<img src =" + '"dress.png"' + "/>");
    $('.ss5').show()
    count = count + 1;
  } else if (count == 5) {
    $('.ss5').hide()
    $('.base').html("<img src =" + '"sun.png"' + "/>");
    $('.ss6').show()
    count = count + 1;
  } else if (count == 6) {
    $('.ss6').hide()
    $('.base').html("<img src =" + '"necessary.png"' + "/>");
    $('.ss7').show()
    count = count + 1;
  } else if (count == 7) {
    $('.ss7').hide()
    $('.base').html("<img src =" + '"yourself.png"' + "/>");
    $('.ss8').show()
    count = count + 1;
    count = 0;
  }
})
