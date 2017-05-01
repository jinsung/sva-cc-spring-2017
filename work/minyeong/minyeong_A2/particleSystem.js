function ParticleSystem () {
	this.setup = function (gap) {
		this.particles = [];
		this.gap = gap;
		for (var y = 5; y < height; y += gap) {
			for (var x = 10; x < width; x+= gap) {
				this.addParticle(x, y);
			}
		}
	}

	this.addParticle = function (x, y) {
		var p = new Particle ();
		p.setup (x, y, this.gap);
		this.particles.push(p);
	}

	this.draw = function () {
		noStroke();
		for (var i = 0; i < this.particles.length; i++) {
			this.particles[i].draw(time);
		}
	}
}