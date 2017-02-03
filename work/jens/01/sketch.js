	
	var myTargetX;
	var myTargetY;
	var mySize;
	var myX = 10;
	var myY = 20;
function setup() {

	createCanvas(windowWidth, windowHeight);
	background (0);
	mySize = (20);
	myX = random (width);
	myY = random (height);
	myTargetX = myX;
	myTargetY = myY;
	noStroke ();

}

function draw() {


	background (0);
	var xDifferent = myTargetX - myX;
	var yDifferent = myTargetY - myY;
	var speed = 0.05;

	myX = myX + xDifferent * speed;
	myY = myY + yDifferent * speed;


	fill (255);

	ellipse (myX, myY, mySize, mySize);



}

function mouseClicked (){
	myTargetX = mouseX;
	myTargetY = mouseY;
}

