function setup () {
  createCanvas(640, 480);
  background (0);
  stroke(255);
}

function draw() {

}

function mousePressed() {
  pen();
}

function mouseDragged() {
  pen();
}

function pen() {
  line(pmouseX, pmouseY, mouseX, mouseY);
}
