var particleSystem;

function setup() {
  createCanvas( 400, 400 );
  noStroke();

  particleSystem = new ParticleSystem();
  particleSystem.setup();
}

function draw() {
  background(100);
  if (mouseIsPressed) {
    particleSystem.addParticle(mouseX, mouseY, 10);
  }
  particleSystem.draw();
}
