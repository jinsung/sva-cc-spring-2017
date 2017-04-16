var numOfParticles = 100;
var ps;
var time;



function setup(){
    createCanvas(375,677);
    colorMode(HSB, 255);
    noStroke();
    ps = new ParticleSystem();
    ps.setup(20);
    
};

function draw(){
	
	
	background(0);
    s = "MERRY GO ROUND AND ROUND"
    textSize(23.1);
    textFont("HelveticaNeue");
    textStyle(BOLD);
    textAlign(CENTER);
    text(s, 0, height/2, 375, 677);
    textStyle(ITALIC);
    text(s, 0, 0, 375, 677);
    text(s, 0, 640, 375, 677);
    textStyle(NORMAL);
    text(s, 0, height/4, 375, 677);
    text(s, 0, 500, 375, 677);


    ps.draw(frameCount * 2); 
   
};

