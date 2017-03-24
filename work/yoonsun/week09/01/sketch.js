var circles = [];
var numOfCircles = 100;
function setup () {
	createCanvas(500, 500);
	for (var i = 0; i < numOfCircles; i++) {
		var circle = new Circle();
		var randomX = Math.random() * width;
		var randomY = Math.random() * height;
		var randomSize = 10.0 + Math.random() * 10.0;
		circle.setup(randomX, randomY, randomSize);
		circles.push(circle);
	}
}

function draw() {
	background(100);
	fill(100, 200, 255);

	for (var i = 0; i < numOfCircles; i++) {
		circles[i].draw();
	}

	// please put for loop to draw all circles.
}