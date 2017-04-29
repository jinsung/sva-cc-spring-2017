var stoody

function preload() {
    stoody = loadAnimation('assets/stoody_1.png', 'assets/stoody_8.png') //open files or pngs
}

function setup() {
    createCanvas(700, 700);
    
}

function draw() {
    background(20, 50, 70);
   
    stoody.scale = 0.1;
    
    animation(stoody, mouseX, mouseY);
    
    if(mouseIsPressed) {
        stoody.play();
    } else {
        stoody.stop();
    }
}