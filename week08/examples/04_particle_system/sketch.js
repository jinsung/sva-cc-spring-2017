var numOfParticles = 100;
var particleSystem;

function setup() {
  createCanvas( 400, 400 );
  colorMode(HSB, 255);
  noStroke();

  particleSystem = new ParticleSystem();
  particleSystem.setup(numOfParticles);
}

function draw() {
  background(100);

  particleSystem.draw();
}
