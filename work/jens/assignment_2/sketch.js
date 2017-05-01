var pulsingCicle = [];

function setup() {
  createCanvas(800, 600);
  for (var i=0; i<600; i++) {
    pulsingCicle.push(new Shake());
  }
}

function draw() {
   r = random(255);
   g = random(255);
   b = random(255);
   fill(r,g,b);
   noStroke;
  background(255, 195, 200);
 
  for (var i=0; i<pulsingCicle.length; i++) {
    pulsingCicle[i].move();
    pulsingCicle[i].display();
  }
}


function Shake() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = 12;

  this.move = function() {
    this.x += random(-5, 5);
    this.y += random(-50, 50);
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}