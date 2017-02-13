var circleX;
var circleY;
var circleSize;
function setup () {
	createCanvas(480, 480);	
	circleSize = 30;
	circleX = 10;
	circleY = 10;
	speedX = 2.0;
	speedY = 2.2;

}

function draw () {
	background(100);

	circleX = circleX + speedX;
	circleY = circleY + speedY;

	if (circleX > width || circleX <0) {
		speedX = speedX * -1;
	}
	if (circleY > height || circleY <0) {
		speedY = speedY * -1;
	}
	
	ellipse(circleX, circleY, circleSize)


}
