$('.container').hover(function() {
	$(this).children('.hide').addClass('turnitgray');	
}, function() {
	$(this).children('.hide').removeClass('turnitgray');	
});

var clicked = false;
var x = event.clientX;
var y = event.clientY;

var purpleShape = '<div class="back"><div class="f"><div class= "purple"> </div><div class= "purple purplebottom"> </div></div><div class="f1"><div class= "purple"> </div><div class= "purple purplebottom"> </div></div></div>'

$('.container').mouseenter(function(event) {
	$('.container').append(purpleShape).css('position', 'fixed');
	console.log('hi')
})

// $('.back').hover(function() {
// 	$(this).children('.f').addClass('hide');	
// }, function() {
// 	$(this).children('.F').removeClass('hide');	
// });

