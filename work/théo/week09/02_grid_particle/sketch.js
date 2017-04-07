var ps;
function setup() {
	createCanvas(800, 500);
	time = 0;
	smooth();
	ps = new ParticleSystem();
	ps.setup(10);
}

function draw () {
	time++;
	background(220, 155, 0);
	ps.draw();

}