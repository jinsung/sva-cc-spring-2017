function setup () {
	createCanvas(1280, 1280);
	mySize = 300;
	mySizee = 20;
	myRed = 100;
	myGreen = 250;
	myBlue = 20;
	mySize = 100;

}

function draw() {

	//background (0);
	
	line(pmouseX, pmouseY, mouseX +mySize, mouseY +mySize);
	stroke(myRed, myGreen, myBlue);

	ellipse(mouseX, mouseY, mySizee, mySizee);
	stroke(255, 15, 100);

	fill(100, myGreen, 10, 40);
	mySize = mySize -1;
	myRed = myRed +0.1;
	myBlue = myBlue +0.5;
	myGreen = myGreen -0.5;
	mySizee = + mySizee +0.2;
}


