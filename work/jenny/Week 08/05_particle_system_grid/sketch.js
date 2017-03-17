var particleSystem;
var gap = 10;

function setup(){
    createCanvas(400, 800);
    colorMode(HSB, 255);
    noStroke();
    particleSystem = new ParticleSystem();
    particleSystem.setup(gap);
}

function draw(){
	background(0);
	fill(255);
	particleSystem.draw();
}
