var particales = [];
var numOfParticales = 100;

function setup() {
    createCanvas(1000, 1000);
    smooth();

    for (var i =0; i < numOfParticales; i ++) {
    	particales[i] = new Partical();
        particales[i].setup(Math.random()*width, Math.random()*height);
    }
}
function draw() {
    background(0);
    noStroke();
    fill(255);
    for (var i = 0; i < numOfParticales; i ++) {
        particales[i].move();
        particales[i].draw();

    }
   
   
}



