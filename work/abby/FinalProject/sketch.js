var myImage;

var imageX;
var imageY;

function preload() {
  myImage = loadImage("Assets/UnicornFinal-01.png");

}

function setup() {
  // Create the canvas
  createCanvas(1000, 500);
  background(213, 234, 245);

  imageX = 0;
  imageY = height - myImage.height;
    
}

function keyPressed () {
  if (keyCode == UP_ARROW) {
    imageY -= 10;
  }
}

function drawBackground () {
  // Set colors
  fill(255, 255, 255, 127);
  noStroke();

  // Cloud One
  ellipse(740, 140, 60, 60);
  ellipse(720, 110, 70, 70);
  ellipse(770, 120, 40, 40);
  ellipse(680, 120, 30, 30);
  ellipse(690, 155, 50, 50);
  
  // Cloud Two
  ellipse(240, 240, 40, 40);
  ellipse(220, 210, 80, 80);
  ellipse(270, 220, 60, 60);
  ellipse(180, 220, 50, 50);
    
  // Cloud Three
  ellipse(640, 380, 30, 30);
  ellipse(620, 410, 60, 60);
  ellipse(650, 420, 60, 60);
  ellipse(590, 420, 30, 30);
  ellipse(660, 390, 30, 30);
  ellipse(690, 410, 50, 50);
}

function draw() {
    imageMode(CENTER);
    background(213, 234, 245);
    drawBackground();
    image(myImage, imageX, imageY);
}
    
