var circleX;
var circleY;

var gravity = 0.1;
var speed = 0;

function setup() {
	createCanvas (480, 480);

	circleX = width/2;
	circleY = 0;
}

function draw() {
	background(100);
	circleY = circleY + speed;
	speed = speed + gravity;
	ellipse(circleX, circleY, 20, 20);

	if (circleY > height) {
		speed = speed * -0.9;
	}
}