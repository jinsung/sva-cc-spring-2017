var particles = [];
var numOfParticles = 100;
var particleIndex = 0;

function setup() {
	createCanvas(700, 700);
	colorMode(HSB, 255);
	noStroke();

	for (var i = 0; i < numOfParticles; i++) {
		particles[i] = new Particle();
		// Math.random is going to give you random floating point number from 0 to 1;
		particles[i].setup(0, 0, 250);
	}
}

function draw() {
	background(100);
	fill(255);

	particleIndex ++;
	// particleIndex = particleIndex + 1;

	if (particleIndex >= particles.length) {
		particleIndex = 0;
	}

	particles[particleIndex].update(mouseX, mouseY);

	for (var i = 0; i < particles.length; i++) {
		var index = (particleIndex + i) % particles.length;
		// console.log("particleIndex" + particleIndex);
		// console.log("index: " + index);
		// fill(index/particles.length * 255, 255, 255);
		fill(0, 0, (Math.sin(index/particles.length * Math.PI * 2) + 1.0)/2 * 255);
		particles[i].draw();
	}
}