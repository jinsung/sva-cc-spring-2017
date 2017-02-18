
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

  move();
  bounce();
  drawCircle();
}

function move() {
  circleX = circleX + speedX;
  circleY = circleY + speedY;
}

function bounce() {
  if (circleX > width || circleX < 0) {
    speedX = speedX * -1;
  } else if (circleY > height || circleY < 0) {
    speedY = speedY * -1;
  }
}

function drawCircle() {
  ellipse(circleX, circleY, circleSize, circleSize);
}
