
function setup() {
  createCanvas(800, 800);
  noStroke();
  background(0);
 }


function draw() {
  background(255);
  rectMode(CENTER);
  strokeWeight(2);

  ellipseMode(CENTER)
  fill (mouseX / 3);
  ellipse(width/2, height/2, mouseX/2, mouseY/2);
  ellipse(width/2, height/2, mouseX/4, mouseY/4);

  if (mouseIsPressed) {
    fill(255);
  } else {
    fill('rgb(0,255,0)');
  }

  ellipse (mouseX, mouseY, 100, 100);
  ellipse (mouseX, mouseY, 50, 50);


  fill('red')
  noStroke()
  ellipse (mouseX, mouseY, mouseX / 15, mouseY / 15);

   if (mouseIsPressed) {
    stroke('rgb(0,255,0)');
  } else {
      stroke('red');
  }

  line (mouseX + 10, mouseY + 30, mouseX + 10, mouseY + 80);
  line (mouseX + 10, mouseY - 30, mouseX + 10, mouseY - 80);
  line (mouseX - 10, mouseY + 30, mouseX - 10, mouseY + 80);
  line (mouseX - 10, mouseY - 30, mouseX - 10, mouseY - 80);
  line (mouseX + 30, mouseY + 10, mouseX + 80, mouseY + 10);
  line (mouseX - 30, mouseY + 10, mouseX - 80, mouseY + 10);
  line (mouseX + 30, mouseY - 10, mouseX + 80, mouseY - 10);
  line (mouseX - 30, mouseY - 10, mouseX - 80, mouseY - 10);
 


}