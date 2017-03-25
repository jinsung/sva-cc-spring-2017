
function ParticleSystem () {
	this.setup = function (gap) {
		myRed = 140;
		this.particles = [];
		this.gap = gap;
		for (var y = 0; y < height; y += gap) {
			for (var x = 0; x < width; x+= gap) {
				this.addParticle( x, y);
			}
		}
	};

	this.addParticle = function (x, y) {
		var p = new Particle ();
		p.setup (x, y, this.gap);
		this.particles.push(p);
	};

	this.draw = function () {
		noStroke();
		fill(0, 255, 100);
		for (var i = 0; i < this.particles.length; i++) {
			this.particles[i].draw(time);
		}

	};
}