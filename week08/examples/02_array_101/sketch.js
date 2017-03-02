var particles = [];
var numOfParticles = 300;

function setup() {
  createCanvas( 400, 400 );
  colorMode(HSB, 255);
  for (var i = 0; i < numOfParticles; i++) {
    particles[i] = new Particle();
    var px = Math.random() * width;
    var py = Math.random() * height;
    particles[i].setup(px, py, 20);
  }
}

function draw() {
  background(100);

  for (var i = 0; i < numOfParticles; i++) {
      fill(i/numOfParticles*100, 150, 250);
      particles[i].draw()
  }

}
