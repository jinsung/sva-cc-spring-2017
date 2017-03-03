function Particle() {
  this.setup = function(pos) {
    this.pos = pos.copy();
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.age = 0;
    this.size = 3;
    this.lifeSpan = 100;
    this.isDead = false;
    this.mass = Math.random() + 0.1 * 10.0;
  }

  this.addForce = function (force) {
    var f = force.copy().div(this.mass);
    this.acc.add(f);
  }

  this.update = function () {
//    this.addForce(this.wind);

    this.wind = createVector((Math.random() - 0.5) * 0.01, (Math.random() - 0.5) * 0.01);
    this.addForce(this.wind);
    this.age ++;
    if (this.age > this.lifeSpan) {
      this.isDead = true;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  this.draw = function (index) {

    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }

}
