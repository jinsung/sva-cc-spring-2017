
	var myX = 5;
	var myY = 5;
function setup() {

createCanvas(windowWidth, windowHeight);
background (0, 0, 255);
}

function draw() {

	myX = random (width);
	myY = random (height);

	noStroke ();
	fill (255,255,255,10);

	rect (myX, myY, myX, myY);



}