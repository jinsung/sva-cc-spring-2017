var robot1;
var robot2;
var x; 
var y;

var targetX;
var targetY;
var backgroundColor;

function setup() {
  createCanvas(680, 480);

  x = width / 2;
  y = height;

  targetX = width/2;
  targetY = height/2;

  robot1 = new Robot();
  robot1.setup(500, 370, 180, 200);
  robot2 = new Robot();
  robot2.setup(180, 370, 180, 200);

}

function draw() {

  backgroundColor = calcDistance(targetX, targetY, mouseX, mouseY)
  background(backgroundColor);
  drawTarget(mouseX, mouseY, 20, 10);

  robot1.draw(mouseIsPressed);
  robot2.draw(mouseIsPressed);

  stroke(0);
  fill(255, 255, 102);

  rect(x, y, 50, 50);
  
  x = x - 2;
  if (x < 0) {
    x = width;
  }  
  
}

function calcDistance(x1, y1, x2, y2) {
  var diffX = x1 - x2;
  var diffY = y1- y2;
  var distance = Math.sqrt(diffX*diffX + diffY*diffY);
  return distance;
}

function drawTarget(x, y, rectSize, numOfrectangles) {
  for (var i = 0; i < numOfrectangles; i++) {
    var segment = i/numOfrectangles;
    fill(segment * 10);
    rectSize = rectSize - segment * rectSize;
    rect(x, y, rectSize, rectSize);
  }

}


  
 


