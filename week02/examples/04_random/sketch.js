function setup () {
  createCanvas(640, 640);
  background(0);
}

function draw() {
  var rand = random(10);
  fill (rand * 10 + 100);
  ellipse(width/2 + rand, height/2 + rand, mouseX, mouseY);
}
