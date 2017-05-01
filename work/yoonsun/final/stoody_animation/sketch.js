var stoody
var jellyfishA
var jellyfishB
var jellyfishC
var jellyfishD
var jellyfishE

function preload() {
    stoody = loadAnimation('assets/stoody_1.png', 'assets/stoody_8.png');
    
    jellyfishA = loadAnimation('assets/jellyfishA_1.png', 'assets/jellyfishA_8.png');
    
    jellyfishB = loadAnimation('assets/jellyfishB_1.png', 'assets/jellyfishB_8.png');
    
    jellyfishC = loadAnimation('assets/jellyfishC_1.png', 'assets/jellyfishC_8.png');
    
    jellyfishD = loadAnimation('assets/jellyfishD_1.png', 'assets/jellyfishD_8.png');
    
    jellyfishE = loadAnimation('assets/jellyfishE_1.png', 'assets/jellyfishE_8.png');
}

function setup() {
    createCanvas(700, 700);
}

function draw() {
    background(20, 50, 70);
    
    animation(jellyfishA, 100, 350);
    animation(jellyfishB, 200, 600);
    animation(jellyfishC, 500, 500);
    animation(jellyfishD, 500, 170);
    animation(jellyfishE, 200, 100);
    
    animation(stoody, mouseX, mouseY);
    
    if(mouseIsPressed) {
        stoody.play();
    } else {
        stoody.stop();
    }
}