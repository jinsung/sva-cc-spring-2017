var red;
var green;
function setup() {
  createCanvas(480, 480);
  green = 0;
  red = 0;

}

function draw() { 
   if (mouseX < width / 2 ) {
   	  red = red + 1;
   	  red++;
   	  green--;
   } else {
   	  red = 0;
   	  green = 255;	
   }
   	  
   


	background(red, green, 0);
}