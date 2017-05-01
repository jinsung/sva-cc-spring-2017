function ParticleSystem() {

  this.setup = function () {
    this.particles = [];
  }

  this.addParticle = function (x, y, amt) {
    for (var i=0; i<amt; i++) {
      var p = new Particle();
      p.setup(createVector(x, y));
      this.particles.push(p);
      var randomForce = createVector((Math.random() - 0.5), (Math.random() - 0.5));
      randomForce.mult(2.0);
      p.addForce(randomForce);
    }
  }

  this.draw = function () {
    //var gravity = createVector(0.0, 0.05);

    for (var i = 0; i < this.particles.length; i++) {
      var p = this.particles[i];
      if (p.isDead) {
        this.particles.splice(i, 1);
      } else {
        //p.addForce(gravity);
        p.update();
        p.draw();
      }
    }
  }

}
