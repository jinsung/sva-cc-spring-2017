var particles = [];
var numOfParticles = 100;
var particleIndex = 0;

function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 255);
  noStroke();
  for (var i = 0; i < numOfParticles; i++) {
    particles[i] = new Particle();
    particles[i].setup(0,0,300);
  }
}

function draw() {
  background(100);
  fill(255)
  //particleIndex = particleIndex+1;
  particleIndex++;
  if (particleIndex >= particles.length) {
    particleIndex = 0
  }

  particles[particleIndex].update(mouseX,mouseY);

  for (var i = 0; i < particles.length; i++) {

      var index = (particleIndex + i) % particles.length;

      fill(0, 0, Math.sin(index/particles.length * Math.PI * 2) + 1.0)/2 * 255);

      particles[index].draw();
  }

}
