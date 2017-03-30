var position;
var circleSize = 20;
var speedVec;

function setup() {
  createCanvas(400, 400);
  position = createVector(100, 100);
  speedVec = createVector(2, 2.5);
}

function draw() {
  background(100);

  stroke(0);
  position.sub(speedVec);
  ellipse(position.x, position.y, circleSize, circleSize);
  

  if (position.x > width || position.x < 0) {
    speedVec.x *= -1;
  } else if (position.y > height || position.y < 0) {
    speedVec.y *= -1;
  }

}
