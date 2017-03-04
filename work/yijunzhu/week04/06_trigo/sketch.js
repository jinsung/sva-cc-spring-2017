var angle = 0;
var circleX = 0;
var circleY = 0;
var length = 100;


function setup() {
	createCanvas(480,480);

}


function draw() {

	background(200);

	var numberofCircles = 80;

	var twoPI = Math.PI * 2;

	for (var i = 0; i < numberofCircles; i++){

		var segAngle = i/numberofCircles;

		circleX = Math.cos(segAngle * twoPI) * length + width/2;
		circleY = Math.sin(segAngle * twoPI) * length + height/2;

		ellipse(circleX, circleY, 100, 100);
		
	}


}

