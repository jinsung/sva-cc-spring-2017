function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);

  drawTarget(width/2, height/2, 10, 100);

  drawTarget(350, 300, 5, 80);

  drawTarget(100, 80, 7, 150);
}

function drawTarget(x, y, numOfCircles, targetSize, targetHue) {
  for (var i=numOfCircles; i>0; i--) {
    var step = i/numOfCircles; // range from 1 to 0.
    fill(step*255);
    var size = targetSize * step;
    ellipse(x, y, size, size );
  }
}
