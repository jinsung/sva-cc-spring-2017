var red;
var green;
function setup() {
	createCanvas(480, 480);
	green = 0;
	red = 0;
}

function draw() {
	if (mouseX < width / 2) {
		red++;
		green--;
	} else {
		red--;;
		green++;
	}

	if (red >= 255) {
		red = 255;
	} else if (red <= 0) {
		red = 0;
	}

	if (green >= 255) {
		green = 255;
	} else if (green <= 0) {
		green = 0;
	}

	background (red, green, 0);

}