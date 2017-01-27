function setup () {
  createCanvas(640, 640);
  background(0);
}

function draw() {
  fill (mouseX / 3);
//  ellipse(mouseX, mouseY, 20, 20);
  ellipse(width/2, height/2, mouseX, mouseY);
}
