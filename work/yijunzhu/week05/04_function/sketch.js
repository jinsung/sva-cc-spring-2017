var targetX;
var targetY;



function setup() {
	createCanvas(480,480);
	colorMode(HSB, 255);
	targetX = width/2;
	targetY = height/2;

}


function draw() {
	color=calcDistance(targetX, targetY, mouseX, mouseY) ;

	background(color);

	drawTarget(targetX,targetY, 200, 10);
	drawTarget(mouseX,mouseY, 100, 5);


}

function calcDistance(x1,y1,x2,y2){
	var diffX = x1 - x2;
	var diffY = y1 - y2;
	var distance = Math.sqrt(diffX*diffX + diffY*diffY);
	return distance;

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

