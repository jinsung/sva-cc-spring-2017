var xPosition = 320;
var yPosition = 240;

function setup() {
  createCanvas(640, 480);
  noStroke();
}

function draw() {
  background(100);
  ellipseMode(CENTER);

  fill (240, 0, 0);
  ellipse(xPosition, yPosition, 100, 100);

  fill (220, 0, 0);
  ellipse(xPosition, yPosition, 80, 80);

  fill (200, 0, 0);
  ellipse(xPosition, yPosition, 60, 60);

  fill (180, 0, 0);
  ellipse(xPosition, yPosition, 40, 40);

  fill (160, 0, 0);
  ellipse(xPosition, yPosition, 20, 20);

  xPosition = xPosition + 1;
}
