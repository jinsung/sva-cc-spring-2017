var myX ;
var myY ;
var myTargetX;
var myTargetY;

function setup () {
	createCanvas(1280, 1280);
	mySize = 100;
	myX = random(width);
	myY = random(height);
	myTargetX = myX;
	myTargetY = myY;
	noStroke();
}

function draw() {

	background (0);
	var xDifferent = myTargetX - myX;
	var yDifferent = myTargetY - myY;
	var mySpeed = 0.3;

	myX = myX + xDifferent * mySpeed;
	myY = myY + yDifferent * mySpeed;

	fill(100);

	ellipse(myX, myY, mySize, mySize);
}

function mouseClicked() {
	myTargetX = mouseX;
	myTargetY = mouseY;

}