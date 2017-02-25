var circleX;
var circleY;
var circleSpeedX;
var circleSpeedY;

var circleSize;

function setup() {
	createCanvas(400, 400);
	circleX = 10;
	circleY = 10;
	circleSpeedX = 2;
	circleSpeedY = 2.5;
	circleSize = 20;
}

function draw () {
	background(100);
	fill(0);
	moveCircle();
	checkEdges();
	drawCircle();
}

function moveCircle () {
	circleX += circleSpeedX;
	//circleX = circleX + circleSpeedX; (which means circle X +=circleSpeedX)
	circleY += circleSpeedY;
}

function checkEdges() {
	if (circleX < 0) {
		circleX = 0;
		circleSpeedX *= -1;
	} else if (circleX > width) {
		circleX = width;
		circleSpeedX *= -1;
	}

	if (circleY < 0) {
		circleY = 0;
		circleSpeedY *= -1;
	} else if (circleY > height) {
		circleY = height;
		circleSpeedY *= -1;
	}
}

function drawCircle() {
	ellipse(circleX, circleY, circleSize, circleSize);
}