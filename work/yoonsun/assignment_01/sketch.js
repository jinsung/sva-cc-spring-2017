var buttonX;
var buttonY;
var buttonWidth;
var buttonHeight;
var pressed;

var r;
var g;
var b;
var a;

var size;
var x;
var y;

var p = 0;
var q = 0;
var r = 0;

function setup() {
	createCanvas(480,480);
	buttonWidth = 40;
	buttonHeight = 40;
	buttonX = width/2 - buttonWidth/2;
	buttonY = height/2 - buttonHeight/2;
}

function draw() {
	if(pressed) {
		
		r = random(250);
		g = random(250);
		b = random(250);
		a = random(250);
		size = random(70);
		x = random(width);
		y = random(height);

		stroke(0);
		fill(r,g,b,a);
		rect(x,y,size,size);

	} else {
		background(255);
	}

	if(pressed) {
		fill(255);
		stroke(0);
	} else {
		fill(255,0,0);
		stroke(0,0,0);
	}

	rect(buttonX, buttonY, buttonWidth, buttonHeight);
}

function mouseClicked () {
	if (mouseX > buttonX && mouseY > buttonY &&
		mouseY < (buttonWidth + buttonX) && mouseY < (buttonHeight + buttonY)) {

		if (pressed) {
			pressed = false;
		} else {
			pressed = true;
		}
	}
}