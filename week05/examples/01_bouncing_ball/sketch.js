var circleX = 10;
var circleY = 20;
var circleSize = 20;
var speedX = 2;
var speedY = 2.5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100);

  stroke(0);

  // Change poistion of circle
  circleX = circleX + speedX;
  circleY = circleY + speedY;

  // Check if circle reached an edge, reverse speed
  if (circleX > width || circleX < 0) {
    speedX *= -1;
  } else if (circleY > height || circleY < 0) {
    speedY *= -1;
  }

  // Display circle at circleX, and circleY position
  ellipse(circleX, circleY, circleSize, circleSize);
}
