

function setup() {
    createCanvas(480, 480);
}

function draw() {
    background(200);
    drawTarget(100, 100, 200, 10);
    drawTarget(200, 200, 100, 20);
    drawTarget(300, 300, 150, 5);

    rect(10, 10, 100, 100);
    ellipse(10, 100, 200, 300);

}

function drawTarget( x, y, circleSize, numOfCircle ){
    circleSize = 300;
    var numOfCircle = 10;
    for (var i = 0; i < numOfCircle; i++){
        var segment = i/numOfCircle;
        fill(segment * 255);
        circleSize = circleSize - segment * circleSize;
        ellipse(x, y, circleSize, circleSize);
    }
}