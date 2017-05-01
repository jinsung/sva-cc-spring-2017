var myImage;
var imageX;
var imageY;
var bugs = [];
var bg;

var isKeyPressed = false;

function preload() {
    bg = loadImage ("Assets/landscape.gif");
    
  myImage = createImg("Assets/birdy.gif");

}

function setup() {
  // Create the canvas
  createCanvas(900, 562);
  
  imageX = 0;
  imageY = height - myImage.height;
  for (var i=0; i<55; i++) {
    bugs.push(new Jitter());
  }
}

function keyPressed () {
    isKeyPressed = true;
  if (keyCode == UP_ARROW) {
    imageY -= 10;
  } else if (keyCode == LEFT_ARROW) {
    imageX -= 10;
  } else if (keyCode == RIGHT_ARROW) {
    imageX -= -10;
  } else if (keyCode == DOWN_ARROW) {
    imageY -= -10;
  }
}

function keyReleased () {
    isKeyPressed = false;
}

function drawBackground () {
  // Set colors
  fill(255, 238, 53);
  noStroke();

  // Cloud One
  //ellipse(740, 140, 60, 60);
  //ellipse(720, 110, 70, 70);
  //ellipse(770, 120, 40, 40);
  //ellipse(680, 120, 30, 30);
  //ellipse(690, 155, 50, 50);
  
  // Cloud Two
  //ellipse(240, 240, 40, 40);
  //ellipse(220, 210, 80, 80);
  //ellipse(270, 220, 60, 60);
  //ellipse(180, 220, 50, 50);
    
  // Cloud Three
  //ellipse(640, 380, 30, 30);
  //ellipse(620, 410, 60, 60);
  //ellipse(650, 420, 60, 60);
  //ellipse(590, 420, 30, 30);
  //ellipse(660, 390, 30, 30);
  //ellipse(690, 410, 50, 50);
}

function draw() {
    //imageMode(CENTER);
    background(213, 234, 245);
    image(bg, 0, 0);
    drawBackground();
    myImage.position(imageX, imageY);
    //image(myImage, imageX, imageY);
    for (var i=0; i<bugs.length; i++) {
      bugs[i].move();
      bugs[i].display();
    }
}

function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(5, 5);
  this.speed = 1;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}