var r;
var g;
var b;




function setup () {
  createCanvas(500, 500);
  background(255);

}

function draw() {
  r = random(255);
  g = random(255);
  b = random(255);


  fill (r,g,b);
  
  stroke(255,0,0);

  if (mouseX < width/2 && mouseY < height/2) {
      fill(0,0,0)
      ellipse(mouseX, mouseY, 10, 10);
  } else {
      rect(mouseX, mouseY, 10, 10);
  }


  

}
