var xPosition;
var yPosition;
var zPosition;
var wPosition;

var myRed;
var myGreen;
var myBlue;

var circleRed;
var circleGreen;
var circleBlue;


var circleX = 20;
var circleY = 0;

var i 

var speed = 0;

var gravity = 0.1;

function setup() {
  createCanvas(1000, 400);
  circleRed = 255;
  circleGreen = 255;
  xPosition = 45;
  yPosition = 80;
  zPosition = 125;
  wPosition = 180;
}

function draw() {


  myRed = random(255);
  myGreen = random(255);
  myBlue = random(255);
  circleBlue = random(255);
  


  //var size = random(50)
  background(255);

  circleY = circleY + speed;
  speed = speed + gravity;

    if(circleY < height / 2){
        circleRed ++;
        circleGreen --;
     }else{
        circleRed --;
        circleGreen ++;
      }
  if(circleRed >= 255){
     circleRed = 255;
  }else if (circleRed <=  0){
   circleRed = 0;
  }
  if(circleGreen >= 255){
      circleGreen = 255;
  }else if (circleGreen <=  0){
      circleGreen = 0;
  }



  stroke(myRed, myGreen, myBlue);
  fill(circleRed, 0, circleGreen);
  ellipse(circleX, circleY, 20, 20);


  stroke(myBlue, myRed, myGreen);
  fill(circleRed, circleGreen, 0);
  ellipse(xPosition, circleY - 5, 30, 30);


  stroke(myRed, myBlue, myGreen);
  fill(50, circleRed, circleGreen);
  ellipse(yPosition, circleY - 10, 40, 40);


  stroke(myRed, myBlue, myGreen);
  fill(circleGreen*0.5, circleRed-100, circleGreen+50);
  ellipse(zPosition, circleY - 15, 50, 50);

  stroke(myRed, myBlue, myGreen);
  fill(circleRed, 10, circleRed*0.5);
  ellipse(wPosition, circleY - 20, 60, 60 );


  if (circleY > height - 50) {
    speed = speed * -0.95;
  }  
   
  xPosition = xPosition + 0.02;
  yPosition = yPosition + 0.06;
  zPosition = zPosition + 0.12;
  wPosition = wPosition + 0.2;

}


