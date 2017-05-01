function Partical() {


    this.setup = function (x, y) {
    	this.myX = x;
    	this.myY = y;
     
    }

    this.move = function() {
        var speed = 2.0
        this.mySpeedX = (Math.random() - 0.5) * speed;
    	this.mySpeedY = (Math.random() - 0.5) * speed;
        this.myX += this.mySpeedX;
        this.myY += this.mySpeedY;
    }

    this.draw = function() {
    	ellipse(this.myX, this.myY, 8, 8)
    }
}