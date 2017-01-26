function setup() {
  createCanvas(640, 640);
  noStroke();
}

function draw() {
  background(100);
  ellipseMode(CENTER);

  fill (240, 0, 0);
  ellipse(mouseX, mouseY, 100, 100);

  fill (220, 0, 0);
  ellipse(mouseX, mouseY, 80, 80);

  fill (200, 0, 0);
  ellipse(mouseX, mouseY, 60, 60);

  fill (180, 0, 0);
  ellipse(mouseX, mouseY, 40, 40);

  fill (160, 0, 0);
  ellipse(mouseX, mouseY, 20, 20);
}
