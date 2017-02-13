var angle = 0;
var circleX = 0;
var circleY = 0;
var length = 10;
var circleSize = 380;


function setup() {
	createCanvas(window.innerWidth,window.innerHeight);
	colorMode(HSB, 255);
}


function draw() {

	background(200);

	var numberofCircles = 100;

	var twoPI = Math.PI * 2;

	length = 10;

	for (var i = 0; i < numberofCircles; i++){

		length = length + (i * mouseX * 0.0001);

		var segAngle = i/numberofCircles;

		var angle = segAngle *  (twoPI * mouseY * 0.1);

		stroke(segAngle * 255, 150, 200);
		fill(segAngle * 255, 150, 200);

		circleX = Math.cos(angle) * length + width/2;
		circleY = Math.sin(angle) * length + height/2;

		ellipse(circleX, circleY, circleSize, circleSize);
		
	}


}

