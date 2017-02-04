var myRed;
var myGreen;
var myBlue;
var mySize;
var myX;
var myY;

function setup () {
	createCanvas(1080, 1080);
	background(255, 204, 0);
}

function draw() {
	myRed = random(5);
	myGreen = random(5);
	myBlue = random(255);

	mySize = random(20);
	myX = random(width);
	myY = random(height);

	fill(myRed, myGreen, myBlue);
	noFill();
	strokeWeight(2);
	stroke(15, 24, 280);
	rect(20, 20, 60, 60);

	rect(myX, myY, mySize, mySize);

}
