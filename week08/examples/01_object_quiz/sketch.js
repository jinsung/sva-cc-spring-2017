var ball;

function setup() {
  createCanvas(400, 400);
  ball = new Ball();
  ball.setup(100, 100, 20);
}

function draw() {
  background(100);
  fill(255);
  ball.draw()
}
