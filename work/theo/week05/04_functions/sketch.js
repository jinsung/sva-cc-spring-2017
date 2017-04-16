var targetX;
var targetY;

function setup () {
	createCanvas(480, 480);	
	targetX = width/2;
	targetY = height/2;
}

function draw() {
	backgroundColor = calcDistance (targetX, targetY, mouseX, mouseY) *0.5;
	background(backgroundColor);

	drawTarget (targetX, targetY, 200, 10)
	drawTarget (mouseX, mouseY, 10, 20);
}

function calcDistance(x1, y1, x2, y2) {
	var diffX = x1 - x2;
	var diffY = y1 - y2;
	var distance = Math.sqrt(diffX*diffX + diffY*diffY);
	return distance;
}


function drawTarget( x, y, circleSize, numOfCircles ) {
	circleSize = 300;
	var numOfCircles = 10;
	for (var i =0; i < numOfCircles; i++) {
		var segment = i/numOfCircles;
		fill(segment * 255);
		circleSize = circleSize - segment * circleSize;
		ellipse(x, y, circleSize, circleSize);
	}
}