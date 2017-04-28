var particles = [];
var numOfParticles = 100;
var particleIndex = 0;

function setup() {
	createCanvas(1280, 1280);
	colorMode(HSB, 255);
	noStroke();
	for ( var i = 0; i < numOfParticles; i++) {
		particles[i] = new Particle();
		particles[i].setup(0, 0, 100);
	}
}

function draw () {
	background(100);
	fill(255);
	particleIndex ++;
	if (particleIndex >= particles.length) {
		particleIndex = 0
	};

	particles[particleIndex].update(mouseX, mouseY);


	for (var i = 0; i < numOfParticles; i++ ) {
		var index = (particleIndex + i) % particles.length;
		
		fill(0, 0, Math.sin(index/particles.length * Math.PI * 2) +1.0)/2 * 255);
		
		particles[index].draw();
	}
}