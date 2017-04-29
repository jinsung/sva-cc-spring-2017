var blocks = [];
function setup() {
	createCanvas(480,480);
    
}

function draw() {
	background(250);
    for (var i = 0; i < blocks.length; i++) {
        blocks[i].update();
        blocks[i].draw();
    }
    
}

function createBlock() {
    var b = new Block();
    b.setup();
    blocks.push(b);
}

function mousePressed () {
    createBlock();
}