function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 100, 250, 25);
}

function draw() {
  background(200);
  var x = width/2;
  var y = height/2;
  var numOfSquares = mouseX;
  var size = 10;
  for (var i=0; i<numOfSquares; i+=1) {
    var zeroToOne = i/numOfSquares;
    stroke( 30 + i/numOfSquares * 50, 100, 50)
    noStroke();
    fill(50 + i/numOfSquares * 50, 60, 80);
    //noFill();
    strokeWeight(2);
    var angle = zeroToOne * (Math.PI * (mouseY * 0.1));
    var spiralSize = 10 + i;
    x = width / 2 + Math.cos(angle) * spiralSize;
    y = height / 2 + Math.sin(angle) * spiralSize;
    rect(x, y, size, size);
  }
}