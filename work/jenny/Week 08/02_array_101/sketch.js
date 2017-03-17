var particles = [];
var numOfParticles = 100;

function setup(){
    createCanvas(400,400);
    
    for (var i = 0; i < numOfParticles; i++){
        particles[i] = new Particle();
        particles[i].setup(Math.random()* width, Math.random()* height);
    }
}

function draw(){
    //var gravity = createVector(0, 0.1);
    //var wind = createVector(0.01, 0.0);
    background(100);
    fill(50,200,150);
    for (var i = 0; i < numOfParticles; i++){
        particles[i].draw();
    }
}