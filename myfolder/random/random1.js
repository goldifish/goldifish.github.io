var ch = ["c_01.jpg", "c_02.jpg", "c_03.jpg", "c_04.jpg", "c_05.jpg", "c_06.jpg", "c_07.jpg", "c_08.jpg", "c_09.jpg", "c_10.jpg", "c_11.jpg"];


for (var increment = 0; increment < 100; increment++) {
  $(".ch").append('<div class="five"></div>');
}

var randomCat = ch[Math.floor(Math.random()*11)];

$(".ch").append("<img src='"+ randomCat + "'>");
$(".ch").css({"background-color" : "black"})



$(".random1").click(function(){
    var randomCat= ch[Math.floor(Math.random()*11)]
    
$(".ch").append("<img src='"+ randomCat + "'>");
$(".ch").css({"background-color" : "black"})
})
