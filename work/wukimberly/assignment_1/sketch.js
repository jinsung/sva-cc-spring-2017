var xPosition = 40;
var yPosition = 460;

function setup() {
  createCanvas(680, 480);
}

function draw() {

  stroke(0);
  fill(100);

  rectMode(CENTER);
  rect(220, 240, 260, 240);


  rectMode(CENTER);
  
  stroke(0);
  fill(100);

  rect(220, 100, 20, 40);

  rectMode(CENTER);
  
  stroke(0);
  fill(100);

  rect(220, 405, 210, 90);

  rectMode(CENTER);
  
  stroke(0);
  fill(100);

  if (mouseIsPressed) {
    fill(255);
  } else {
    fill(100);
  }

  rect(220, 405, 150, 60);

  stroke(0);
  fill(90);

  rect(170, 440, 70, 40);

  stroke(0);
  fill(90);

  rect(270, 440, 70, 40);


  stroke(0);
  fill(255, 255, 0);

  if (mouseIsPressed) {
    fill(255, 255, 102);
  } else {
    fill(255);
  }

  ellipseMode(CENTER);
  ellipse(220, 80, 50, 50);


  ellipseMode(CENTER);

  stroke(0);
  fill(0);

   
  ellipse(270, 320, 20, 20);

  ellipse(170, 320, 20, 20);

  ellipseMode(CENTER);

  stroke(0);
  fill(255, 255, 102);

   if (mouseIsPressed) {
    fill(255, 255, 102);
  } else {
    fill(255);
  }


  ellipse(220, 405, 10, 10);

  ellipseMode(CENTER);

  stroke(0);
  fill(255, 255, 102);

  if (mouseIsPressed) {
    fill(255, 255, 102);
  } else {
    fill(255);
  }

  ellipse(200, 405, 10, 10);

  ellipseMode(CENTER);

  stroke(0);
  fill(255, 255, 102);

  if (mouseIsPressed) {
    fill(255, 255, 102);
  } else {
    fill(255);
  }

  ellipse(240, 405, 10, 10);

  ellipseMode(CENTER);

  stroke(0);
  fill(90);

  ellipse(110, 400, 40, 40);

  ellipseMode(CENTER);

  stroke(0);
  fill(90);

  ellipse(324, 400, 40, 40);

  ellipseMode(CENTER);

  fill (0);
  ellipse(xPosition, yPosition, 40, 40);

  xPosition = xPosition + 6;
 
}

