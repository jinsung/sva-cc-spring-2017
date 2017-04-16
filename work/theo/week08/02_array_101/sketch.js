var particles = [];
var numOfParticles = 100;
function setup() {
	createCanvas(400,400);
	
	for ( var i = 0; i < numOfParticles; i++) {
		particles[i] = new Particle();
		//Math.random gives you random floating point number from 0 to 1
		particles[i].setup(Math.random() * width, Math.random() * height)
	}
}

function draw () {
	background(100);
	fill(255);
	for (var i = 0; i < numOfParticles; i++ ) {
		particles[i].draw();
	}
}