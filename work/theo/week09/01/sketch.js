var circles = [];
var numOfCircles = 100;
function setup() {
	createCanvas(500, 500);
	for (var i = 0; i , i < numOfCircles; i++){
		var circle = new Circle();
		var randomX = Math.random() * width;
		var randomY = Math.random() * height;
		var randomSize = 10.0 + Math.random() * 10.0;
		circle.setup(randomX, randomY, randomSize);
		circles.push(circle);
	};
}

function draw () {
	background(100);
	for (var i = 0; i < numOfCircles; i++ ) {
		circles[i].draw();
	};
	//use for loop to draw all circles.
	
}