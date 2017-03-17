var xPosition = 40;
var yPosition = 460;

function setup() {
  createCanvas(680, 480);
}

function draw() {
  background(255);
  drawRobot(220, 200, 26, 40, mouseIsPressed);
  drawRobot(100, 200, 26, 40, mouseIsPressed);
  drawRobot(100, 150, 26*1.5, 40*1.5, mouseIsPressed);
}

function drawCircle() {
  fill (0);
  ellipse(xPosition, yPosition, 40, 40);

  xPosition = xPosition + 6;
}

function drawRobot(x, y, width, height, isOn) {
  rectMode(CENTER);

  drawBody(x, y, width, height, isOn);
  drawHead(x, y, width, height, isOn);
  drawArms(x, y, width, height);
  drawLegs(x, y, width, height);
}

function drawHead(x, y, width, height, isOn) {
  fill(90);
  rect(x, y - height * 0.25, width * 0.08, height * 0.1 );
  rect(x, y + height * 0.1, width, height * 0.6);
  if (isOn) {
    fill(255, 255, 102);
  } else {
    fill(255);
  }

  ellipse(x, y - height * 0.3, width * 0.2, width * 0.2);

  // eyes
  fill(0);
  var eyeSize = width*0.08;
  ellipse(x+width*0.2, y+height*0.3, eyeSize, eyeSize);
  ellipse(x-width*0.2, y+height*0.3, eyeSize, eyeSize);

}

function drawBody(x, y, width, height, isOn) {
  fill(90);
  rect(x, y+height*0.5, width*0.85, height*0.21);

  if (isOn) {
    fill(255);
  } else {
    fill(100);
  }

  var controllerHeight = y + height * 0.51;
  var controllerDotSize = width * 0.045;
  rect(x, controllerHeight, width * 0.57, height*0.15);

  if (isOn) {
    fill(255, 255, 102);
  } else {
    fill(255);
  }

  ellipse(x - width*0.09, controllerHeight, controllerDotSize, controllerDotSize);
  ellipse(x + width*0.09, controllerHeight, controllerDotSize, controllerDotSize);
  ellipse(x, controllerHeight, controllerDotSize, controllerDotSize);
}

function drawArms(x, y, width, height) {
  fill(90);
  var armGap = width*0.42;
  var armSize = width * 0.15;
  ellipse(x - armGap, y + height*0.5, armSize, armSize);
  ellipse(x + armGap, y + height*0.5, armSize, armSize);
}

function drawLegs(x, y, width, height) {
  fill(90);
  var legGap = width * 0.2;
  var legYPos = height * 0.6;
  var legWidth = width * 0.27;
  var legHeight = height * 0.1;
  rect(x-legGap, y + legYPos, legWidth, legHeight);
  rect(x+legGap, y + legYPos, legWidth, legHeight);
}
