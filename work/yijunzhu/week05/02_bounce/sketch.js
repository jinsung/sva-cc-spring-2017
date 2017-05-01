var circleX;
var circleY;
var circleSize;

var speedX;
var speedY;


function setup() {
	createCanvas(480,480);
	// colorMode(HSB, 255);
	circleSize = 30;
	circleX = 10;
	circleY = 10;

	speedX = 2.0;
	speedY = 2.2;
}


function draw() {
	background(200);

	moveCircle();
	checkHit();
	drawCircle();
}


function moveCircle () {
	circleX = circleX + speedX;
	circleY = circleY + speedY;
}


function checkHit () {
	if (circleX > width || circleX < 0) {
	speedX = speedX * -1;
	}

	if(circleY > height || circleY < 0) {
		speedY = speedY * -1;
	}
}


function drawCircle (){
		ellipse(circleX, circleY, circleSize);

}