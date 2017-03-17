function Ball() {
  this.position;
  this.acceleration;
  this.velocity;
  this.mass;
  this.canvasWidth;
  this.canvasHeight;

  this.setup = function(pos, mass, canvasWidth, canvasHeight) {
    this.position = pos.copy();
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.mass = mass;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight
  }

  this.addForce = function (force) {
    var f = force.copy().div(this.mass);
    this.acceleration.add(f);
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
    var size = this.mass * 10;
    ellipse(this.position.x, this.position.y, size, size);
  }
}
