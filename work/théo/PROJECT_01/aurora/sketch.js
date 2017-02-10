var red;
var green;
var blue;
function setup () {
	createCanvas(1280,1280);	
	red = 0;
	green = 0;
	blue = 0;
	mySize = 60;
	fill(30)
	rect(0, 0, 1280, 1280)

}

function draw () {
	if( mouseX < width / 2 ) {
		green++;
		blue--;
	} else {
		green--;
		blue++;
	}

	if (green > 255) {
		green = 255;
	} else if (green < 0) {
		green = 0;
	
	}

	if (blue >= 255) {
		blue = 255;
	} else if ( blue <+ 0){
		blue = 0;
	
	}

	if(mouseX < width / 2) {
		mySize = 30;
	} else if (mySize <+ 30){
		mySize = 100;

	}

	//background;
	ellipse (mouseX, mouseY, mySize, pmouseY)
	line (mouseX, 100, pmouseX +100, pmouseY +10);
	noFill();
	ellipse(mouseX, mouseY, 20, 20);
	stroke(0, green, blue + 100);
}