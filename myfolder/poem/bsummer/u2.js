var summer = ['ocean.png','natural.png','lake.png','earth.png','huge.png','expect.png','to.png']

var count = 1;

$('.base').html("<img src =" + '"ocean.png"' + "/>");
$('.us1').show()
$('.base').click(function() {
  if (count == 0) {
    $('.us7').hide()
    $('.base').html("<img src =" + '"ocean.png"' + "/>");
    $('.us1').show()
    count = count + 1;
  } else if (count == 1){
    $('.us1').hide()
    $('.base').html("<img src =" + '"natural.png"' + "/>");
    $('.us2').show()
    count = count + 1;
  } else if (count == 2) {
    $('.us2').hide()
    $('.base').html("<img src =" + '"lake.png"' + "/>");
    $('.us3').show()
    console.log(count);
    count = count + 1;
  } else if (count == 3) {
    $('.us3').hide()
    $('.base').html("<img src =" + '"earth.png"' + "/>");
    $('.us4').show()
    count = count + 1;
    // count = 0;
  } else if (count == 4) {
    $('.us4').hide()
    $('.base').html("<img src =" + '"huge.png"' + "/>");
    $('.us5').show()
    count = count + 1;
  } else if (count == 5) {
    $('.us5').hide()
    $('.base').html("<img src =" + '"expect.png"' + "/>");
    $('.us6').show()
    count = count + 1;
  } else if (count == 6) {
    $('.us6').hide()
    $('.base').html("<img src =" + '"to.png"' + "/>");
    $('.us7').show()
    count = count + 1;
    count = 0;
  }
})


// var summer = ['ocean.png','natural.png','lake.png','earth.png','huge.png','expect.png','to.png']

// var count = 1;

// $('.base').html("<img src =" + '"ocean.png"' + "/>");
// $('.us1').show()
// $('.base').click(function() {
//   if (count == 0) {
//     $('.us7').hide()
//     $('.base').html("<img src =" + '"ocean.png"' + "/>");
//     $('.us1').show()
//     count = count + 1;
//   } else if (count == 1){
//     $('.us1').hide()
//     $('.base').html("<img src =" + '"natural.png"' + "/>");
//     $('.us2').show()
//     count = count + 1;
//   } else if (count == 2) {
//     $('.us2').hide()
//     $('.base').html("<img src =" + '"lake.png"' + "/>");
//     $('.us3').show()
//     console.log(count);
//     count = count + 1;
//   } else if (count == 3) {
//     $('.us3').hide()
//     $('.base').html("<img src =" + '"earth.png"' + "/>");
//     $('.us4').show()
//     count = count + 1;
//     // count = 0;
//   } else if (count == 4) {
//     $('.us4').hide()
//     $('.base').html("<img src =" + '"huge.png"' + "/>");
//     $('.us5').show()
//     count = count + 1;
//   } else if (count == 5) {
//     $('.us5').hide()
//     $('.base').html("<img src =" + '"expect.png"' + "/>");
//     $('.us6').show()
//     count = count + 1;
//   } else if (count == 6) {
//     $('.us6').hide()
//     $('.base').html("<img src =" + '"to.png"' + "/>");
//     $('.us7').show()
//     count = count + 1;
//     count = 0;
//   } 
// })
