function setup () {
  createCanvas(580, 580);
}

function draw() {
  if (mouseIsPressed) {
    fill(0, 253, 197);
    stroke(255);
    background (255, 197, 51);
  } else {
    fill(255, 197, 51);
    stroke(255);
    background (0, 253, 197);
  }
  ellipse(mouseX, mouseY, 80, 80);
  
}