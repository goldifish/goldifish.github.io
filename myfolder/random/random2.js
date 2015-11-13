var pattern = ["p_01.jpg", "p_02.jpg", "p_03.jpg", "p_04.jpg", "p_05.jpg", "p_06.jpg", "p_07.jpg", "p_08.jpg", "p_09.jpg", "p_10.jpg"];


for (var increment = 0; increment < 100; increment++) {
  $(".pattern").append('<div class="pattern"></div>');
}

var randomCat = pattern[Math.floor(Math.random()*10)];

$(".pattern").append("<img src='"+ randomCat + "'>");
$(".pattern").css({"background-color" : "black"})



$(".random2").click(function(){
    var randomCat= pattern[Math.floor(Math.random()*10)]
    
$(".pattern").append("<img src='"+ randomCat + "'>");
$(".pattern").css({"background-color" : "white"})
})
