var buttonX;
var buttonY;
var buttonWidth;
var buttonHeight;
var isButtonPressed = false;

var r;
var g;
var b;
var a;

var size;
var x;
var y;

function setup(){
  createCanvas(600,600);
  buttonWidth = 120;
  buttonHeight = 25;
  buttonX = width/2 - buttonWidth/2;
  buttonY = height/2 - buttonHeight/2;

}

function draw(){
  if (isButtonPressed) {
    
    

    r = random(255);
    g = random(255);
    b = random(255);
    a = random(255);
    size = random(20);
    x = random(width);
    y = random(height);
  
    noStroke();
    fill(r, g, b, a);
    ellipse(x, y, size, size);
  
  
  } else {
    background(94,145,247);
  }



  /background(backgroundColor);/

  if (isButtonPressed) {
    stroke(53,28,144);
    fill(16,255,147);
    rect(buttonX, buttonY, buttonWidth, buttonHeight);
  } else {
    stroke(255,178,42);
    fill(255,255,42);
    rect(buttonX, buttonY, buttonWidth, buttonHeight);
  }

  

  
}

function mouseClicked(){
  if(mouseX > buttonX && mouseY > buttonY &&
     mouseX < (buttonWidth+buttonX) && mouseY < (buttonHeight+buttonY)) {

    if (isButtonPressed) {
      isButtonPressed = false;
    } else {
      isButtonPressed = true;
    }


  }
}