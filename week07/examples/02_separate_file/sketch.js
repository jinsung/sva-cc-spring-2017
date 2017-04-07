var ball;
var ball2;

function setup() {
  createCanvas(400, 400);
  ball = new Ball();
  ball.setup(10, 10, 20, 2, 1.8);
  ball2 = new Ball();
  ball2.setup(20, 300, 20, 2, 1.6);
}

function draw() {
  background(100);
  ball.move();
  ball.bounce(width, height);
  ball.draw();

  ball2.move();
  ball2.bounce(width, height);
  ball2.draw();
}
