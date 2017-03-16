var myParticle;
var myParticle2;
function setup() {
	createCanvas(400,400);
	myParticle = new Particle();
	myParticle.setup(width/2, height/2);

	myParticle2 = new Particle;
	myParticle2.setup(10, 10);
}

function draw () {
	background(100);
	fill(255);
	myParticle.draw();
}