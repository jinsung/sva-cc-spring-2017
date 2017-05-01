function Bullet () {
	this.setup = function (pos, angle) {
		
		this.rotation = angle;
		this.pos = pos.copy();
		this.vel = p5.Vector.fromAngle(angle);
		this.vel.mult(5);
		this.size = 5;
		this.isDead = false;
	}

	this.draw = function () {
		ellipse (this.pos.x, this.pos.y, this.size, this.size);
	}

	this.update = function () {
		this.pos.add(this.vel);

		if (this.pos.x < 0 || this.pos.x > width || 
			this.pos.y < 0 || this.pos.y > height) {
			this.isDead = true;
		}
	}

	this.hits = function (object) {
        var xGap = abs(object.x - this.pos.x);
        var yGap = abs(object.y - this.pos.y);
        if (xGap < (this.size + object.width/2) &&
            yGap < (this.size + object.height/2)) {
            return true;
        }
        return false;
    }
}