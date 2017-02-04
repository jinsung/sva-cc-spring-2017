var myX;
var myY;
var mySize;
var myTargetX;
var myTargetY;

function setup () {
 	createCanvas(480, 400);
 	mySize = 50;
   	myX = random(width);
	myY = random(height);
	myTargetX = myX;
	myTargetY = myY;
	
	stroke(255);
	noStroke();
}

function draw() {
	background(0);
	var xDifferent = myTargetX - myX;
	var yDifferent = myTargetY - myY;
	var speeeeeed = 0.1;
	myX = myX + xDifferent * speeeeeed;
	myY = myY + yDifferent * speeeeeed;

	fill(100);

	ellipse(myX, myY, mySize, mySize);
}

function mouseClicked() {
	myTargetX = mouseX;
	myTargetY = mouseY;
}
