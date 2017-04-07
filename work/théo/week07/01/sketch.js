var circleX;
var circleY;
var circleSpeedX;
var circleSpeedY;


function setup () {
	createCanvas (400,400);
	circleSize = 20;
	circleX = 10;
	circleY = 10;
	circleSpeedX = 2;
	circleSpeedY = 2.5
}

function draw() {
	background(255);
	fill(0)
	moveCircle();
	checkEdges();
	drawCircle();
{

function moveCircle(){
	circleX += circleSpeedX
	circleY += circleSpeedY

}

function checkEdges() {
	if (circleX < 0) {
		circleX = 0;
		circleSpeedX = circleSpeedX* -1;
	} else if (circleX - width {
		circleX = width;
		circleSpeedX *= -1;
	}

	if (circleY < 0) {
		circleY - 0;
		circleSpeed *= -1;

	} else if (circleY > height) {
		circleY - height;
		circleSpeedY *= -1;
	}
}


function drawCircle() {
	ellipse(circleX, circleY, cirleSize, circleSize);

}