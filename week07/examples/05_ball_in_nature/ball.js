function Ball() {
  this.position;
  this.acceleration;
  this.velocity;
  this.size;
  this.canvasWidth;
  this.canvasHeight;

  this.setup = function(pos, size, canvasWidth, canvasHeight) {
    this.position = pos;
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.size = size;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight
  }

  this.addForce = function (force) {
    this.acceleration.add(force);
  }

  this.update = function(width, height) {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
    this.bounce();
  }

  this.bounce = function() {
    if (this.position.x > this.canvasWidth) {
      this.position.x = this.canvasWidth;
      this.velocity.x *= -1;
    } else if( this.position.x < 0) {
      this.position.x = 0;
      this.velocity.x *= -1;
    }

    if (this.position.y > this.canvasHeight) {
      this.position.y = this.canvasHeight;
      this.velocity.y *= -1;
    } else if ( this.position.y < 0) {
      this.position.y = 0;
      this.velocity.y *= -1;
    }
  }

  this.draw = function() {
    ellipse(this.position.x, this.position.y, this.size, this.size);
  }
}
