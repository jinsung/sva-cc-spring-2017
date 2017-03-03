var angle = 0;
var circleX = 0;
var circleY = 0;
var length = 10;
var circleSize = 100;

function setup() { 
	createCanvas(480, 480);
	colorMode(HSB, 255);
}

function draw () {
	background(0, 10, 150);
	var numberOfCircles = 100;
	var twoPI = Math.PI * 2;
	length = 10;
	for( var index = 0; index < numberOfCircles; index = index + 1) {
		length = length + (index * mouseX * 0.01);
		var segAngle = index/numberOfCircles;
		var angle = segAngle * (twoPI * mouseY * 0.1);
		stroke(segAngle * 255, 150, 200);
		fill(segAngle * 255, 150, 200);
		circleX = Math.cos(angle) * length + width/2;
		circleY = Math.sin(angle) * length + height/2;

		ellipse(circleX, circleY, circleSize, circleSize);
	}
}