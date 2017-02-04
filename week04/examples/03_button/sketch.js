var buttonX;
var buttonY;
var buttonWidth;
var buttonHeight;
var backgroundColor = 200;
var isButtonPressed = false;

function setup() {
  createCanvas(400, 400);
  buttonWidth = 100;
  buttonHeight = 50;
  buttonX = width/2 - buttonWidth/2;
  buttonY = height/2 - buttonHeight/2;
}

function draw() {
  if (isButtonPressed) {
    backgroundColor = 0;
  } else {
    backgroundColor = 200;
  }
  background(backgroundColor);

  stroke(0);

  rect(buttonX, buttonY, buttonWidth, buttonHeight);
}

function mouseClicked() {
  if (mouseX > buttonX && mouseY > buttonY &&
      mouseX < (buttonWidth+buttonX) && mouseY < (buttonHeight+buttonY)) {

    if(isButtonPressed) {
      isButtonPressed = false;
    } else {
      isButtonPressed = true;
    }
  }
}
