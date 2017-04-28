function Rocket () {

  this.setup = function (loc) {
    this.loc = createVector(loc.x, loc.y);
    this.acc = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.size = 20;
    this.angle = 0;

    this.bullets = [];
  };

  this.addForce = function (speed) {
    var force = createVector(speed, 0);
    force.rotate(this.angle);
    this.acc.add(force);
  }

  this.rotate = function (value) {
    this.angle += value;
  }

  this.shot = function () {
    var bullet = new Bullet();
    bullet.setup(this.loc, this.angle);
    this.bullets.push(bullet);
  }

  this.update = function () {
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.mult(0.98);
    this.acc.mult(0);
    if (this.loc.x < 0) {
      this.loc.x = width;
    } else if (this.loc.x > width) {
      this.loc.x = 0;
    }
    if (this.loc.y < 0) {
      this.loc.y = height;
    } else if (this.loc.y > height) {
      this.loc.y = 0;
    }
    for (var i = this.bullets.length-1; i >= 0 ; i--) {
      this.bullets[i].update();
      if (this.bullets[i].isDead) {
        this.bullets.splice(i, 1);
      }
    }
  };

  this.draw = function () {
    push();
    translate(this.loc.x, this.loc.y);
    rotate(this.angle);
    fill(255, 0, 0);
    noStroke();

    triangle(this.size/2, 0,
             -this.size/2, -this.size/2,
             -this.size/2, this.size/2);
    pop();

    fill(255, 255, 255);
    stroke(0);
    for (var i = 0; i < this.bullets.length; i++) {
      this.bullets[i].draw();
    }
  };


}
