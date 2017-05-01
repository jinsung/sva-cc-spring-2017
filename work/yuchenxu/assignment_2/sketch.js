
var ps;
var time;
var r = 10;
var g = 10;
var b = 10;
var isButtonPressed = false;


function setup(){
	createCanvas(800,800);
	smooth();

	time = 0;
	ps = new ParticleSystem();
	ps.setup(29);
}



function draw(){

	time = time + 0.2;
	background(5,0,60);

    fill(255,71,38,200);
    quad(623, 200, 597, 200, 585, 370, 635, 370);

	fill(255,71,38,200);
    quad(575, 420, 645, 420, 700, 650, 520, 650);

    fill(255,71,38,200);
    rect(593, 167, 33, 33);

    fill(255,71,38,200);
    rect(570, 370, 80, 50);


    noStroke;
    fill(255,71,38,200);
    triangle(600, 167, 620, 167, 610, 20);

    noStroke;
    fill(13);
    rect(10, 400, 200, 700);

    noStroke;
    fill(10);
    rect(100, 474, 300, 700);

    noStroke;
    fill(10);
    rect(300, 550, 300, 700);

    noStroke;
    fill(10);
    rect(500, 480, 400, 800);


    noStroke;
    fill(10);
    rect(700, 320, 400, 800);



	ps.draw(time);


    if (isButtonPressed){
        r = random(255);
        g = random(255); 
        b = random(255);
    } else{
        r = 10;
        g = 10;
        b = 10;
    }


    fill(130);
    quad(390, 700, 440, 700, 430, 680, 400, 680);
    noStroke;
    fill(70);
    rect(100, 700, 620, 200);
    noStroke;
    fill(90);
    rect(110, 710, 600, 80);
    noStroke;
    fill(130);
    rect(200, 430, 420, 250);
    noStroke;
    fill(r,g,b);
    rect(210, 440, 400, 230);
		
}

function mouseClicked(){
    if(isButtonPressed){
        isButtonPressed = false;
    } else {
        isButtonPressed = true;
    }
}


