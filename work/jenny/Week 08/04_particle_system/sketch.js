var particleSystem;
var numOfParticles = 100;

function setup(){
    createCanvas(800, 800);
    colorMode(HSB, 255);
    noStroke();
    particleSystem = new ParticleSystem();
    particleSystem.setup(numOfParticles);
}

function draw(){
	background(100);
	fill(255);
	particleSystem.draw();
}
