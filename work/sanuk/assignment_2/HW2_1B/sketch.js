var r, g, b;

function setup() {
  createCanvas(720, 400);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(255);
  strokeWeight(50);
  stroke(r, g, b);
  fill(r, g, b, 255);
  ellipse(360, 200, 200, 200);
}


function mousePressed() {

  var d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {

    r = random(255);
    g = random(255);
    b = random(255);
  }
}