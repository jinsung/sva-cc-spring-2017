function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  var gap = 10;
  noStroke();
  for (var i=0; i<width+gap; i+=gap) {
    var distance = abs(mouseX - i);
    fill(i/width * 255, distance, 0);
    rect(i, 0, gap, height);
    //stroke(i/width * 255, 0, 0);
    //line(i, 0, mouseX, height);


  }
}
