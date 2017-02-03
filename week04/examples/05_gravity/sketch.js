var circleX = 200;
var circleY = 0;

var speed = 0;

var gravity = 0.1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100);

  circleY = circleY + speed;
  speed = speed + gravity;

  stroke(0);
  fill(200);
  ellipse(circleX, circleY, 20, 20);

  if (circleY > height) {
    speed = speed * -0.95;
  }

}
