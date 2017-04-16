var myImage;

function preload() {
	myImage = loadImage("assets/image.png");
}

function setup() {
	createCanvas(500, 500);
	image(myImage, 0, 0, width, height);
	noStroke();
	loadPixels();

	rect ( 0, 0, width, height);

	var d = pixelDensity();
	var gap = 7;
	var size = 10;

	for (var py = 0; py < myImage.height; py += gap) {
		for (var px = 0; px < myImage.width; px += gap ) {
			var pixelIndex = ( px + (( py * myImage.height ) * d) ) * d * 4;
			

			ellipse(px + size/2, py+size/2, size, size);
		}
	}

}

function draw () {
	//background(100);

}