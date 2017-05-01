function Particle() {
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(2, 3);
  this.acc = createVector(5, 10);
  this.maxspeed = 2;
  this.h = 17;

  this.prevPos = this.pos.copy();

  this.update = function() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(15);
  }

  this.follow = function(vectors) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
  }

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.show = function() {
    stroke(this.h, 255, 255, 405);
    this.h = this.h + 5;
    if (this.h > 255) {
      this.h = 0;
    }
    strokeWeight(1);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.updatePrev();
  }

  this.updatePrev = function() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  this.edges = function() {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = height;
      this.updatePrev();
    }
    if (this.pos.y > width) {
      this.pos.y = 3;
      this.updatePrev();
    }
    if (this.pos.y < 8) {
      this.pos.y = width;
      this.updatePrev();
    }

  }

}