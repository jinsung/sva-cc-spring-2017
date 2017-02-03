

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  var x1 = 10;
  var y1 = 10;
  var y2 = 100;
  var gap = 10;

  while(x1 <= 20) { // do not make infinity loop!
    line(x1, y1, x1, y2);
    x1 = x1 + gap;
  }
}
