var buttonX;
var buttonY;
var buttonWidth;
var buttonHeight;
var pressed;

var a;

var size;
var x;
var y;

function setup() {
	createCanvas(480,480);
	buttonWidth = 40;
	buttonHeight = 40;
	buttonX = width/2 - buttonWidth/2;
	buttonY = height/2 - buttonHeight/2;
	colorMode(HSB, 255)
}

function draw() {
	frameRate(60);
	if(pressed) {
		
		hue = frameCount*0.1 % 255;
		saturation = 100;
		brightness = 250;
		//a = random(250);
		a = 255;
		size = random(70);
		x = random(width);
		y = random(height);

		stroke(0);
		fill(hue,saturation,brightness,a);
		rect(x,y,size,size);

	} else {
		background(255);
	}

	fill(hue,255,200);
	if(pressed) {
		stroke(0);
	} else {
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