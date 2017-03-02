function Ball() {
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
    ellipse(this.x, this.y, this.size, this.size);
  }
}
