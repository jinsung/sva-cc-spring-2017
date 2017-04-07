var numOfParticles = 100;
var particleSystem;
var time;

function setup() {
  createCanvas( 540, 960 );
  colorMode(HSB, 255);
  noStroke();

  particleSystem = new ParticleSystem();
  particleSystem.setup(10);
}

function draw() {
  background(0);

  particleSystem.draw(frameCount);
}
