function setup() {
	createCanvas(480, 480);
}

function draw () {
	background(200);

	drawTarget(100, 100, 200, 10);
	drawTarget(300, 300, 100, 20);
	drawTarget(300, 100, 300, 5);

	rect(10, 10, 100, 100);
	ellipse(10, 100, 200, 300);
}

function drawTarget (x, y, circleSize, numOfCircles) {
	circleSize = 300;
	var numOfCircles = 10;

	for (var i = 0; i < numOfCircles; i++) {
		var segment = i/numOfCircles;
		fill(segment * 255);
		circleSize = circleSize - segment * circleSize;
		ellipse(x, y, circleSize, circleSize);
	}
}