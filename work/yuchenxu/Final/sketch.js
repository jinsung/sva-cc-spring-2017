var squareSystem;
var gap = 30;
var r = 0;
var g = 0;
var b = 0;
var t = 0;
var isButtonPressed = false;
var isButtonPressed2 = false;
var isButtonPressed3 = false;
var isButtonPressed4 = false;
var isButtonPressed5 = false;
var squares = [];
var numOfParticles = 100;
var squareIndex = 0;
var red;
var blue;
var yellow;
var green;
var purple;
var selectedColor;

function setup(){
    createCanvas(1080,780);
    noStroke();
    squareSystem = new SquareSystem;
    squareSystem.setup(gap);
    selectedColor = color(255, 255, 255);
    red = color(255, 0, 0);
    blue = color(24,97,160);
    yellow = color (255,242,0);
    green = color (141,198,63);
    purple = color (102,45,145);
  
}


function draw(){
  	background(0);
    
    fill(blue);
    rect(950, 15, 29, 29);
    
    fill(red);
    rect(950, 45, 29, 29);
    
    fill(yellow);
    rect(950, 75, 29, 29);

    fill(green);
    rect(950, 105, 29, 29);
    
    fill(purple);
    rect(950, 135, 29, 29);
    
    
    var square = squareSystem.findNearest(mouseX, mouseY);
  
  	fill(255);
    squareSystem.draw();
    


    rectMode(CENTER)    
    fill(selectedColor);
    if (square) {
        rect(square.myX,square.myY,29,29);
    }
    
    
    

}


function mouseClicked(){
    if (mouseX > 935 &&
      mouseX < 965 &&
      mouseY > 0 &&
      mouseY < 30){
        isButtonPressed = true;
        selectedColor = blue;
      }
    else if (mouseX > 935 &&
      mouseX < 965 &&
      mouseY > 30 &&
      mouseY < 60){
        isButtonPressed2 = true;
        selectedColor = red;
        
      } 
    else if (mouseX > 935 &&
      mouseX < 965 &&
      mouseY > 60 &&
      mouseY < 90){
        isButtonPressed3 = true;
        selectedColor = yellow;
        
      }
    else if (mouseX > 935 &&
      mouseX < 965 &&
      mouseY > 90 &&
      mouseY < 120){
        isButtonPressed4 = true;
        selectedColor = green;
        
      }
    else if (mouseX > 935 &&
      mouseX < 965 &&
      mouseY > 120 &&
      mouseY < 150){
        isButtonPressed5 = true;
        selectedColor = purple;
        
      }
    var square = squareSystem.findNearest(mouseX, mouseY);
    square.changeColor(selectedColor);
}


