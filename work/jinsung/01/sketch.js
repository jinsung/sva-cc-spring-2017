function setup() {
	createCanvas(640, 480);
	background(150);
	
	ellipseMode(CORNER);
	fill(0, 255, 0);
	ellipse(320, 240, 100, 100);

	ellipseMode(CORNERS);
	fill(0, 0, 255);
	ellipse(320, 240, 100, 100);
	
	ellipseMode(CENTER);
	fill(255, 0, 0);
	ellipse(320, 240, 100, 100);

}