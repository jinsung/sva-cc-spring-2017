var red;
var green;
function setup() {
	createCanvas(1080, 1080);

}

function draw() {
	if ( mouseX < width / 2 ) {
		red++;
		green--;
	} else {
		red--;
		green++;
	}
	background(red, green, 0);

}