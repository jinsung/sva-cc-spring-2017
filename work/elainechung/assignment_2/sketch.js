

var nums = [100, 25, 46,72];
var i = 0
var lines = [0, 30, 60, 90, 120, 150, 
			180, 210, 240, 270, 300, 
			330, 360, 390, 420, 450, 
			480, 510, 540, 570, 600,
			630, 660, 690, 720, 750, 780 ]


function setup() {
  createCanvas(1200, 780);  
  stroke(255);     


  x = width/1.15
  y = height;


}

function draw() { 
  background(0); 

//ellipses
  for (var i = 0; i < 27; i++) {
  	stroke(255);
  	noFill();
  	ellipse(x, y, nums[i], nums[i]); 
  }
  
 // lines
  y = y - 2; 
  if (y < 0) { 
    y = height; 
  } 
 
  for (var i = 0; i < 27; i++) {
  	line(y, x, lines[i], lines[i]);  
  	line(x, y, lines[i], lines[i]); 
  	line(-x, -y, lines[i], lines[i]);
  	line(-y, -x, lines[i], lines[i]);  
  }

function mouseClicked() {}
}

