var mouseX = 50;
var circleH = 10;
var r = 255;
var g = 0
var b = 0

function windowResized() {
   resizeCanvas(windowWidth, windowHeight)
   background(0);
}

function setup() {


   canvas = createCanvas(windowWidth, windowHeight);
   canvas.position(0, 0)
   canvas.style('z-index','-1')
   background(0);
}

function draw() {
   noStroke();
   fill(r, g, b, 40);
   ellipse(mouseX, mouseY, 85, circleH);
   mouseX = mouseX + 1;
   circleH = circleH;
   r = r - 0.25
   g = g + 0.25
   b = b + 0.25
   if (r > 5) {
      r = r - 0.25}
   else{
      r = r + 1}
   if (g > 5) {
      g = g - 0.2}
   else{
      g = g + 1}
}

function mousePressed() {
   background(0);
   mouseX = 0;
   stroke(0, 0, 0, 0);
   r = 255
   g = 0

}