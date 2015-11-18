1 < 2 // true

2 <= 1 // false`

1 <= 1 // true`

var x = 4,
    y = 6;

x < y // true

1 > 1 // false


$(window).mousemove(function(event) {
    var newTop = event.clientY + "px";
    var newLeft = event.clientX + "px";
    $(".p").css("top",newTop);
    $(".p").css("left",newLeft);
})

$(window).keypress(function(event){
    if (event.keyCode == 114 {
        $("p").css("background-color","red")
    if (event.keyCode == 103 {
        $("p").css("background-color","lime")
    if (event.keyCode == 98 {
        $("p").css("background-color","blue")
    })
})