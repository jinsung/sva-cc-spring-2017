var myParticle;

function setup() {
	createCanvas(400, 400);

	myParticle1 = new Particle();
	myParticle1.setup(width/2, height/2);

	myParticle2 = new Particle();
	myParticle2.setup(100, 100);

	myParticle3 = new Particle();
	myParticle3.setup (300, 300);
}

function draw() {
	background(100);
	fill(255);
	
	myParticle1.draw();

	myParticle2.draw();

	myParticle3.draw();
}