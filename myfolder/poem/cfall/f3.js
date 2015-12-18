// $('.cloud1').hide();

var array = ['.s1-a1','.s1-a2','.s1-a3','.s1-a4'];


var random;

var randomSpring1 = function(){
    random = array[Math.floor(Math.random()*array.length)];
    return random;
}
console.log(randomSpring1());

$(randomSpring1()).hide();

// $('.next').click(function(){
//     $(randomSpring1()).hide();
// })