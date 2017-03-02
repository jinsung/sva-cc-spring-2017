var ball;
var ball2;

var gravity;
var wind;

function setup() {
  createCanvas(800, 400);
  ball = new Ball();
  var pos = createVector(10, 10);
  gravity = createVector(0, 0.1);
  wind = createVector(0.01, 0);
  ball.setup(pos.copy(), 2, width, height);

  ball2 = new Ball();
  ball2.setup(pos.copy(), 1, width, height);
}

function draw() {
  background(100);

  fill(255);
  ball.addForce(gravity);
  ball.addForce(wind);
  ball.update();
  ball.draw();

  fill(255, 0, 0);
  ball2.addForce(gravity)
  ball2.addForce(wind);
  ball2.update();
  ball2.draw();
}
