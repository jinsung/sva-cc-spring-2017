var backgroundColor = 200;
var isBackgroundBlack = false;

var buttonWidth = 100;
var buttonHeight = 20;

function setup(){
	createCanvas(480,480);
}


function draw() {

	if (isBackgroundBlack){
		backgroundColor = 0;
	}
	else {
		backgroundColor = 200;
	}

	background(backgroundColor);
	// noFill();
	stroke(0);
	rectMode(CENTER);
	rect(width/2, height/2, 100, 20);
}


function mousePressed () {
	if (mouseX > width/2 - buttonWidth/2 &&
		mouseX < width/2 + buttonWidth/2 &&
		mouseY > height/2 - buttonHeight/2 &&
		mouseY < height/2 + buttonHeight/2 ) {

		isBackgroundBlack = !isBackgroundBlack;
	}

}