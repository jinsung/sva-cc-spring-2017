var jane;
var jane2;

function setup() {
  background(255);
  createCanvas(640, 640);
  fill(255,0,0);
  rect(20,20,16,16);
  jane = new Jane();
  jane.setup(10, 50, 20, 2, 2);
  jane2 = new Jane();
  jane2.setup(100, 10, 100, 10, 1.6);
}

function draw() {
  jane.move();
  jane.bounce(width, height);
  jane.draw();

  jane2.move();
  jane2.bounce(width, height);
  jane2.draw();
}

function Jane() {
  this.x;
  this.y;
  this.size;
  this.speedX;
  this.speedY;

  this.setup = function(x, y, size, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  this.move = function() {
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
  }

  this.bounce = function(width, height) {
    if (this.x > width || this.x < 0) {
      this.speedX = this.speedX * -1;
    } else if (this.y > height || this.y < 0) {
      this.speedY = this.speedY * -1;
    }
  }

  this.draw = function() {
    rect(this.x, this.y, this.size, this.size);
  }
}
