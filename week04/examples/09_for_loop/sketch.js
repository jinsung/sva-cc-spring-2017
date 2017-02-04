

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  var y1 = 10;
  var y2 = 100;
  var gap = 10;

  for (var i=10; i<200; i+=gap) {
    line(i, y1, i, y2);
  }
}
