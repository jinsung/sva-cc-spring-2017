var circle1;
var circle2;

function setup () {
	createCanvas (400,400);
	circle1 = new Circle();
	circle2 = new Circle();
	circle1.setup(10, 10, 2, 2.5);
	circle2.setup(40, 10, 4, 3.5);
}

function draw() {
	background(100);
	fill(0)
	circle1.moveCircle();
	circle1.checkEdges();
	circle1.drawCircle();
	fill(255, 0, 0);
	circle2.moveCircle();
	circle2.checkEdges();
	circle2.drawCircle();
}	

function Circle () {
	this.x;
	this.y; 
	this.speedX;
	this.speedY;

	this.size

	this.setup = function (x_, y_, speedX_, speedY_) {
		this.x = x_;
		this.y = y_;
		this.speedX = speedX_;
		this.speedY = speedY_;
		this.size = 20;
	}

	this.moveCircle = function() {
		this.x += this.speedX;
		this.y += this.speedY;
	}

	this.checkEdges = function() {
			if (this.x < 0) {
				this.x =0;
				this.speedX *= -1;
			} else if (this.x > width) {
				this.x = width;
				this.speedX *= -1;
			}

			if (this.y <0) {
				this.y =0;
				this.speedY *= -1;
			} else if (this.y > height) {
				this.y = height;
				this.speedY *= -1;
			}
			
	}
	this.drawCircle = function() {
		ellipse(this.x, this.y, this.size, this.size );
	}
}