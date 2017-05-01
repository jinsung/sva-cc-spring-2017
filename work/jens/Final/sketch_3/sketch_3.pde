import processing.video.*;
Particle[] particles;

//PImage jens;
Capture jens;

void setup() {
  size(640, 480);
  jens = new Capture(this, width, height);
  jens.start();
  particles = new Particle [1000];
  for (int i = 0; i < particles.length; i++) {
    particles[i] = new Particle();
  }
  background(220);
}

void captureEvent(Capture video) {
  video.read();
}

void draw() {

  for (int i = 0; i < particles.length; i++) {
    particles[i].display();
    particles[i].move();
  }
}