



function setup() {
	createCanvas(480,480);
	colorMode(HSB, 255);

}


function draw() {
	background(200);

	drawTarget(300,300, 800, 140);
	drawTarget(100,100, 500, 15);
	drawTarget(300,300, 300, 10);
	drawTarget(300,100, 200, 20);
}


function drawTarget ( x, y, circleSize, n) {



	var nCircle = n;

	for(var i = 0; i < nCircle; i++) {

	var segment = i/nCircle;

	fill(segment * mouseX, 120, 120);


	circleSize = circleSize - segment * circleSize;
	ellipse(x, y, circleSize, circleSize);
	}

}

