function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 100);
}

function draw() {
  background(200);
  var x = width/2;
  var y = height/2;
  var numOfCircles = mouseX;
  var size = 100;
  //noStroke();
  for (var i=0; i<numOfCircles; i+=1) {
    var zeroToOne = i/numOfCircles;
    stroke( 30 + i/numOfCircles * 50, 100, 50)
    fill(30 + i/numOfCircles * 50, 60, 80);
    var angle = zeroToOne * (Math.PI * (mouseY * 0.1));
    var spiralSize = 10 + i;
    x = width / 2 + Math.cos(angle) * spiralSize;
    y = height / 2 + Math.sin(angle) * spiralSize;
    ellipse(x, y, size, size);
  }
}
