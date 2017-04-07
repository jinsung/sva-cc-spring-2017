function Circle(){
	this.setup = function (x, y, size){
		this.myX= x;
		this.myY= y;
		this.mySize= size;
	};

	this.draw = function (){
		ellipse(this.myX, this.myY, this.mySize);
	};
}