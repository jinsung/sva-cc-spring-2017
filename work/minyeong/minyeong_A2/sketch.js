var ps;

var r;
var g;
var b;

function setup() {
	createCanvas(700, 700);

	time = 0;
	smooth();

	ps = new ParticleSystem();
	ps.setup(8);

	r = 100;
	g = 100;
	b = 200;
	
}

function draw () {
	time++;
	background(r, g, b);

	ps.draw();

	fill(100, 50, 150);

	if (mouseX < width / 2) {
		g++;
		r--;
	} else {
		g--;
		r++;
	}

	if (g > 255) {
		g = 255;
	} else if (g < 0) {
		g = 0;
	}

	if (r >= 255) {
		r = 255;
	} else if (r <+ 0){
		r = 0;
	}
}