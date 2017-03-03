var xPosition;
var yPosition;
var xTargetPosition;
var yTargetPosition;

function setup() {
  createCanvas(640, 480);
  noStroke();
  xPosition = width / 2;
  yPosition = height / 2;
  xTargetPosition = xPosition;
  yTargetPosition = yPosition;
}

function draw() {
  //background(10, 10, 10, 10);
  background(10);
  fill (150);
  ellipse(xPosition, yPosition, 100, 100);

  var xDifferent = xTargetPosition - xPosition;
  var yDifferent = yTargetPosition - yPosition;
  var speed = 0.1;
  speed = 1.5; // spring
  xPosition = xPosition + xDifferent * speed;
  yPosition = yPosition + yDifferent * speed;
}

function mouseClicked() {
  xTargetPosition = mouseX;
  yTargetPosition = mouseY;
}
