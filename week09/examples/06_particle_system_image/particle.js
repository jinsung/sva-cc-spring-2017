function Particle() {
  this.setup = function(pos) {
    this.pos = pos.copy();
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.age = 0;
    this.size = 5;
    this.lifeSpan = 10000;
    this.isDead = false;
    this.mass = Math.random() + 0.1 * 10.0;
    this.damping = 1.00;
  }

  this.addForce = function (force) {
    var f = force.copy().div(this.mass);
    this.acc.add(f);
  }

  this.update = function (color) {
    this.color = color;
    this.age ++;
    if (this.age > this.lifeSpan ||
        (this.pos.x < 0 || this.pos.x > width) ||
        (this.pos.y < 0 || this.pos.y > height) ) {
      this.isDead = true;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.vel.mult(this.damping);
  }

  this.draw = function (index) {
    push();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
    pop();
  }

}
