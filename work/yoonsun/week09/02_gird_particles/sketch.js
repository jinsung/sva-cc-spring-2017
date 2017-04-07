var ps;
var time;
function setup () {
	createCanvas(800, 800);
	time = 0;
	smooth();
	ps = new ParticleSystem();
	ps.setup(10);
}

function draw () {
	time++;
	background(100);
	ps.draw(time);
}