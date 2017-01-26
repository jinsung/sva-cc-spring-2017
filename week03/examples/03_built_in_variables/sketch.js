var xPosition;
var yPosition;
var colorIncrease = 10;

function setup() {
  createCanvas(640, 480);
  noStroke();
  xPosition = width / 2;
  yPosition = height / 2;
}

function draw() {
  background(100);
  ellipseMode(CENTER);

  fill (frameCount + colorIncrease, 0, 0);
  ellipse(xPosition, yPosition, 100, 100);

  fill (frameCount + colorIncrease * 2, 0, 0);
  ellipse(xPosition, yPosition, 80, 80);

  fill (frameCount + colorIncrease * 3, 0, 0);
  ellipse(xPosition, yPosition, 60, 60);

  fill (frameCount + colorIncrease * 4, 0, 0);
  ellipse(xPosition, yPosition, 40, 40);

  fill (frameCount + colorIncrease * 5, 0, 0);
  ellipse(xPosition, yPosition, 20, 20);

  xPosition = xPosition + 1;
}
