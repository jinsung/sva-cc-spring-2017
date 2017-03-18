function ParticleSystem() {

  this.setup = function (pixels) {
    this.particles = [];
    this.pixels = pixels;
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
        var d = pixelDensity();
        var pixelIndex = (parseInt(p.pos.x) + (parseInt(p.pos.y) * height) * d) * d * 4;
        var c = [this.pixels[pixelIndex], this.pixels[pixelIndex+1], this.pixels[pixelIndex+2]];
        p.separate(this.particles);
        p.update(c);
        //fill (pixels[pixelIndex], pixels[pixelIndex+1], pixels[pixelIndex+2], pixels[pixelIndex+3]);
        p.draw();
      }
    }
  }

}
