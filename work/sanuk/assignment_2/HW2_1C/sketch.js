function setup() {
  createCanvas(1920, 1080);
  r = random(255);
  g = random(255);
  b = random(255);
}
function draw(){
  background(255);
  
  translate(width/2, height/2);
  scale(mouseX / 200, mouseY / 200);

  fill(r, g, b, 255);
  ellipse(100, 200, 200, 200);
}



function mousePressed() {

  var d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {

    r = random(255);
    g = random(255);
    b = random(255);
  }
}

