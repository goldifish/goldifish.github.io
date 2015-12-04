var ch = ["c_01.jpg", "c_02.jpg", "c_03.jpg", "c_04.jpg", "c_05.jpg", "c_06.jpg", "c_07.jpg", "c_08.jpg", "c_09.jpg", "c_10.jpg", "c_11.jpg"];


for (var increment = 0; increment < 100; increment++) {
//   $(".ch").append('<div class="five"></div>');
}

// var randomCat = ch[Math.floor(Math.random()*11)];

// $(".ch").append("<img src='"+ randomCat + "'>");
// $(".ch").css({"background-color" : "black"})



// $(".random1").click(function(){
//     var randomCat= ch[Math.floor(Math.random()*11)]
// });
    
    
var pattern = ["p_01.jpg", "p_02.jpg", "p_03.jpg", "p_04.jpg", "p_05.jpg", "p_06.jpg", "p_07.jpg", "p_08.jpg", "p_09.jpg", "p_10.jpg"];

    var randomPattern = pattern[Math.floor(Math.random()*10)];
    var randomPhoto = ch[Math.floor(Math.random()*10)];
    $('body').css('background-image', 'url(' + randomPattern + ')');
    $('.ch').css('background-image', 'url(' + randomPhoto + ')'); 

$('.ch').click(function() {
    // var randomPattern = pattern[Math.floor(Math.random()*11)];
    // var randomPhoto = ch[Math.floor(Math.random()*11)];
    // $('body').css('background-image', 'url(' + randomPattern + ')');
    // $('.ch').css('background-image', 'url(' + randomPhoto + ')');
    var randomPattern = pattern[Math.floor(Math.random()*10)];
    var randomPhoto = ch[Math.floor(Math.random()*10)];
    $('body').css('background-image', 'url(' + randomPattern + ')');
    $('.ch').css('background-image', 'url(' + randomPhoto + ')'); 
});

$('body').click(function() {
    // var randomPattern = pattern[Math.floor(Math.random()*11)];
    // var randomPhoto = ch[Math.floor(Math.random()*11)];
    // $('body').css('background-image', 'url(' + randomPattern + ')');
    // $('.ch').css('background-image', 'url(' + randomPhoto + ')');
    var randomPattern = pattern[Math.floor(Math.random()*10)];
    $('body').css('background-image', 'url(' + randomPattern + ')');
});

// $('body').hover(function() {
//   $(this).attr('src', '/folder/image2.jpg');
// }, function() {
//   $(this).attr('src', '/folder/image1.jpg');
// });


// var randomCat = pattern[Math.floor(Math.random()*10)];

// $(".ch").click(function(){
// $(".pattern").css({"background-color" : "black"})
// for (var increment = 0; increment < 100; increment++) {
// $(".pattern").append("<img src='"+ randomCat + "'>");
// }

// var randomCat = pattern[Math.floor(Math.random()*10)];

// $(".pattern").append("<img src='"+ randomCat + "'>");
// $(".pattern").css({"background-color" : "black"});
// })


// $(".p").click(function(){
// $(".p").css({"background" : "url("+randomCat+")"})}





// $(".ch").click(function(){
//     var randomCat= pattern[Math.floor(Math.random()*10)]
    
// $(".pattern").append("<img src='"+ randomCat + "'>");
// })

// })