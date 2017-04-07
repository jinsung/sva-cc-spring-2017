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
    this.damping = 0.985;
    this.maxForce = 0.1;
    this.maxSpeed = 4;
  }

  this.addForce = function (force) {
    var f = force.copy().div(this.mass);
    this.acc.add(f);
  }

  this.separate = function (others) {
    var desiredSeparation = this.size * 0.5;
    var sumForce = createVector(0.0, 0.0);
    var count = 0;
    for (var i = 0; i < others.length; i++) {
      var distance = p5.Vector.dist(this.pos, others[i].pos);
      if ( distance > 0 && distance < desiredSeparation ) {
        var difference = p5.Vector.sub(this.pos, others[i].pos);
        difference.normalize();
        difference.div(distance); // Weight by distance
        sumForce.add(difference);
        count++;
      }
    }
    // Average -- divide by how many
    if ( count > 0 ) {
      sumForce.div(count);
    }

    // As long as the vector is greater than 0
    if (sumForce.mag() > 0) {
      sumForce.normalize();
      sumForce.mult(this.maxSpeed);
      sumForce.sub(this.vel);
      sumForce.limit(this.maxForce);
    }
    this.addForce(sumForce);
    //return sumForce;
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
    this.size = 3 + (color[0]/255) * 10.0;
  }

  this.draw = function (index) {
    push();
    fill(this.color[0], this.color[1], this.color[2]);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
    pop();
  }

}
