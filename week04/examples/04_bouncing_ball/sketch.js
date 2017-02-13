var circleX = 10;
var circleY = 20;
var circleSize = 20;
var speedX = 2;
var speedY = 2.1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100);

  stroke(0);
  ellipse(circleX, circleY, circleSize, circleSize);
  circleX += speedX;
  circleY += speedY;

  if (circleX > width || circleX < 0) {
    speedX *= -1;
  } else if (circleY > height || circleY < 0) {
    speedY *= -1;
  }

}
