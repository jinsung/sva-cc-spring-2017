function setup () {
	createCanvas(1280, 1280);
	mySize = 300;
	mySizee = 120;
	myRed = 10;
	myGreen = 25;
	myBlue = 200;
	mySize = 100;

}

function draw() {

	//background (0);
	
	ellipse(pmouseX, pmouseY, 50, 50);
	stroke(myRed, myGreen, myBlue);

	ellipse(mouseX, mouseY, mySizee, mySizee);
	stroke(255, 15, 100);

	fill(myRed, myGreen, 10, 40);
	mySize = mySize -1;
	myRed = myRed +0.1;
	myBlue = myBlue +0.5;
	myGreen = myGreen -0.5;
	mySizee = + mySizee +0.2;
}


