var spring = ['window.png','white.png','early.png','years.png','snow.png']

var count = 1;

$('.base').html("<img src =" + '"window.png"' + "/>");
$('.ws1').show()
$('.base').click(function() {
  if (count == 0) {
    $('.ws5').hide()
    $('.base').html("<img src =" + '"window.png"' + "/>");
    $('.ws1').show()
    count = count + 1;
  } else if (count == 1){
    $('.ws1').hide()
    $('.base').html("<img src =" + '"white.png"' + "/>");
    $('.ws2').show()
    count = count + 1;
  } else if (count == 2) {
    $('.ws2').hide()
    $('.base').html("<img src =" + '"early.png"' + "/>");
    $('.ws3').show()
    console.log(count);
    count = count + 1;
  } else if (count == 3) {
    $('.ws3').hide()
    $('.base').html("<img src =" + '"years.png"' + "/>");
    $('.ws4').show()
    count = count + 1;
    // count = 0;
  } else if (count == 4) {
    $('.ws4').hide()
    $('.base').html("<img src =" + '"snow.png"' + "/>");
    $('.ws5').show()
    count = count + 1;
    count = 0;
  }
})



// var winter = ['window.png','white.png','early.png','years.png','snow.png']

// var count = 1;

// $('.base').html("<img src =" + '"window.png"' + "/>");
// $('.ws1').show()
// $('.base').click(function() {
//   if (count == 0) {
//     $('.ws5').hide()
//     $('.base').html("<img src =" + '"window.png"' + "/>");
//     $('.ws1').show()
//     count = count + 1;
//   } else if (count == 1){
//     $('.ws1').hide()
//     $('.base').html("<img src =" + '"white.png"' + "/>");
//     $('.ws2').show()
//     count = count + 1;
//   } else if (count == 2) {
//     $('.ws2').hide()
//     $('.base').html("<img src =" + '"early.png"' + "/>");
//     $('.ws3').show()
//     console.log(count);
//     count = count + 1;
//   } else if (count == 3) {
//     $('.ws3').hide()
//     $('.base').html("<img src =" + '"years.png"' + "/>");
//     $('.ws4').show()
//     count = count + 1;
//     // count = 0;
//   } else if (count == 4) {
//     $('.ws4').hide()
//     $('.base').html("<img src =" + '"snow.png"' + "/>");
//     $('.ws5').show()
//     count = count + 1;
//     count = 0;
//   }
// })
