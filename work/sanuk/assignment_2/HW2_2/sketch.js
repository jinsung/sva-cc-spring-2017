var y = 100;

function setup() {
  createCanvas(720, 400);  
  frameRate(30);
  strokeWeight(50);
  stroke(255, 255);
}

function draw() { 
  background(0);  
  y = y - 1; 
  if (y < 0) { 
    y = height; 
  } 
  line(0, y, width, y);  
} 


