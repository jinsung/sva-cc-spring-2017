function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  /*
   * boolean - true of false
   * &&, ||
   */

  stroke(0);
  noFill();
  // halfWidth, halfHeight ?
  rect(0, 0, width-1, height-1);
  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2);

  noStroke();
  fill(0);
  if (mouseX < width/2 && mouseY < height/2) {
    rect(0, 0, width/2, height/2);
  } else if (mouseX >= width/2 && mouseY < height/2) {
    rect(width/2, 0, width, height/2);
  } else if (mouseX < width/2 && mouseY >= height/2) {
    rect(0, height/2, width/2, height);
  } else {
    rect(width/2, height/2, width, height);
  }

}
