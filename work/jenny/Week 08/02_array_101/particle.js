function Particle(){
    this.setup = function(x,y){
        this.myX = x;
        this.myY = y;
    }

    this.draw = function(){
       
        ellipse(this.myX, this.myY, 10, 10);
    }
}