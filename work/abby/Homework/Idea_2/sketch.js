function setup () {
  createCanvas(580, 580);
}

function draw() {
  background (255, 197, 51);
  if (mouseIsPressed) {
    fill(255);
  } else {
    fill(0, 253, 197);
  }
  ellipse(mouseX, mouseY, 80, 80);
  noStroke();
}