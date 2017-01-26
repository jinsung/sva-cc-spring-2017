function setup() {
  createCanvas(640, 640);
  noStroke();

}

function draw() {
  stroke(0);
  // 1
  background(100);
  line (mouseX, mouseY, mouseX , mouseY + 100);
  line (mouseX + 10, mouseY, mouseX + 10, mouseY + 100);
  line (mouseX + 20, mouseY, mouseX + 20, mouseY + 100);
  line (mouseX + 30, mouseY, mouseX + 30, mouseY + 100);

  // 2
  /*background(100);
  line (mouseX, mouseY, mouseX , mouseY + 100);
  line (mouseX + 10, mouseY, pmouseX + 10, pmouseY + 100);
  line (mouseX + 20, mouseY, pmouseX + 20, pmouseY + 100);
  line (mouseX + 30, mouseY, pmouseX + 30, pmouseY + 100);*/

  // 3
  /*strokeWeight(abs(mouseX - pmouseX));
  stroke(abs(mouseX - pmouseX)*3);
  line (mouseX, mouseY, pmouseX, pmouseY);*/

}
