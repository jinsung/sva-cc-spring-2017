var ball;

var gravity;
var wind;

function setup() {
  createCanvas(800, 400);
  ball = new Ball();
  var pos1 = createVector(10, 10);
  gravity = createVector(0, 0.1);
  wind = createVector(0.01, 0);
  ball.setup(pos1, 20, width, height);
}

function draw() {
  background(100);

  fill(255);
  ball.addForce(gravity);
  ball.addForce(wind);
  ball.update();
  ball.draw();
}
