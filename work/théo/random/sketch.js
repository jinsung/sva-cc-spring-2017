// Example 4-7: Filling variables with random values

var r;
var g;
var b;
var a;

var size;
var x;
var y;

myRed = 0;

function setup() {
  createCanvas(1280, 1280);
  //background(myRed, 255, 0);

  myRed = myRed +2;
}

function draw() {
  // Each time through draw(), new random
  // numbers are picked for a new ellipse.
  r = random(10, 255);
  g = random(10, 200);
  b = random(20, 255);
  a = random(255);
  size = random(10, 20);
  x = random(width, 10);
  y = random(height, 20);

  // Use values to draw an ellipse
  fill(0, g, b, 10);
  stroke(myRed, 100, b, a);
  

  line(mouseX, mouseY, mouseX, pmouseY)

  line(x, mouseY, size, pmouseY)
  ellipse(mouseX, mouseY, size, pmouseY)


  myRed = myRed +2;



}
