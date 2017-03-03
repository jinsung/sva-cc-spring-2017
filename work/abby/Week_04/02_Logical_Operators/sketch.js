
function setup() {
	createCanvas(480, 480);

}

function draw() {
	background(255);
	noFill();
	stroke(0);
	rect(0, 0, width-1, height-1);

	fill(0);
	if( mouseX < width/2 &&
		mouseY < height/2 ) {
		rect (0, 0, width/2, height/2);
	} else if (mouseX < width/2 &&
		mouseY > height/2) {
		rect (0, height/2, width/2, height/2);
	} else if (mouseX > width/2 &&
		mouseY < height/2) {
		rect (width/2, 0, width/2, height/2);
	} else {
		rect (width/2, height/2, width/2, height/2);
	}

}