var angle = 0;
var circleX = 0;
var CircleY = 0;
var length = 100;
function setup(){
    createCanvas (480,480);
}


function draw() {
    background(100);
    
    var numberOfCircles = 10;
    var twoPI = Math.PI * 2;
    //noStroke();
    for( 
        var index=0;
        index <numberOfCircles;
        index = index+1 
        ){
    	
        var segAngle = i/numberOfCircles;
        circleX = Math.cos(segAngle * twoPI) * length + width/2;
        CircleY = Math.sin(segAngle * twoPI) * length + height/2;

        ellipse(circleX, CircleY, 20, 10);
    }
    
}