var myParticle;


function setup(){
    createCanvas(400,400);
    myParticle = new Particle();
    myParticle.setup(width/2, height/2);

    myParticle2 = new Particle();
    myParticle2.setup(100, 100);

    myParticle3 = new Particle();
    myParticle3.setup(320,300);
}

function draw(){
    //var gravity = createVector(0, 0.1);
    //var wind = createVector(0.01, 0.0);
    background(100);
    fill(255);
    myParticle.draw();

    myParticle2.draw();

    myParticle3.draw();
}