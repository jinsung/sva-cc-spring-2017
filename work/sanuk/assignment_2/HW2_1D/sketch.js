var cnv;
var d;
var g;
var r;
var b;

function setup() {
  cnv = createCanvas(640, 640);
  cnv.mousePressed(changebg); // attach listener for
                                // canvas click only
  d = 10;
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(g);
  ellipse(width/2, height/2, d, d);
}

// this function fires with any click anywhere
function mousePressed() {
  d = d + 10;
}

// this function fires only when cnv is clicked
function changebg() {
  r = random(255);
  g = random(255);
  b = random(255);
}



