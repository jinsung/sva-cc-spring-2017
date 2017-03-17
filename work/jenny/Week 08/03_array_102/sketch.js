var particles = [];
var numOfParticles = 100;
var particleIndex = 0;

function setup(){
    createCanvas(800,800);
    colorMode(HSB, 255);
    noStroke();
    
    for (var i = 0; i < numOfParticles; i++){
        particles[i] = new Particle();
        particles[i].setup(0, 0, 300);
    }
}

function draw(){
    //var gravity = createVector(0, 0.1);
    //var wind = createVector(0.01, 0.0);
    background(0);
    fill(20,200,170);
    //particleIndex = particleIndex+1;
    particleIndex ++;
    if (particleIndex >= particles.length){
        particleIndex = 0;
    }

    particles[particleIndex].update(mouseX, mouseY);

    for (var i = 0; i < particles.length; i++){
        
        var index = (particleIndex + i) % particles.length;
        console.log("particleIndex");
        console.log("index: " + index);
        fill(index/particles.length * 255, 200, 200);
        particles[index].draw();
    }
}

//var x = 5%2; will make x equals 1 since the remainder of 5 divide 2 is 1.