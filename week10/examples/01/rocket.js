function Rocket () {
  this.setup = function (loc) {
    this.loc = createVector(loc.x, loc.y);
    this.acc = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.size = 20;
    this.angle = 0;
  };

  this.addForce = function (speed) {
    var force = createVector(speed, 0);
    force.rotate(this.angle);
    this.acc.add(force);
  }

  this.rotate = function (value) {
    this.angle += value;
  }

  this.update = function () {
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.mult(0.98);
    this.acc.mult(0);
  };

  this.draw = function () {
    push();
    translate(this.loc.x, this.loc.y);
    rotate(this.angle);
    fill(255, 0, 0);
    noStroke();

    var rocketWidth = 20;
    var rocketHeight = 10;
    triangle(rocketWidth/2, 0,
             -rocketWidth/2, -rocketHeight/2,
             -rocketWidth/2, rocketHeight/2);
//    ellipse(this.loc.x, this.loc.y, this.size, this.size);
    pop();
  };
}
