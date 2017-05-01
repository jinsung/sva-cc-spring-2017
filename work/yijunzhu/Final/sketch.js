var video;
var wave;

//the moving x-position
var p = 1;



function setup(){
    createCanvas(960,240);
    background(100);
    
    //video
    pixelDensity(1);
    video = createCapture(VIDEO);
    video.size(320,240);
    
    //sound
    wave = new p5.Oscillator();
    wave.setType('sine');
    wave.start();
    wave.amp(1);
    wave.freq(440);
}



function draw(){
    
    video.loadPixels();

    
    var w = video.width;
    var h = video.height;
    
    //slit-scan effect
    copy(video, w/2, 0, 1, h, p, 0, 1, h);
    
    p ++;
    
    loadPixels();
    
    var sumOfDiff = 0;
    for (var i =0; i < 240; i ++){
        var indexA = ( (p - 1) + i * width) * 4;
        var indexB = ( p + i * width ) * 4;
        
        var colorValueA = pixels[indexA+0]+pixels[indexA+1]+pixels[indexA+2];
        var colorValueB = pixels[indexB+0]+pixels[indexB+1]+pixels[indexB+2];

        sumOfDiff += (colorValueB - colorValueA)/10;
    }
 
    if (p > width) {
        p = 1;
    }
    
    
// change oscillator frequency based on visual
//    var freq = map(sumOfDiff, 0, 183600, 40, 880);
    var freq = map(sumOfDiff, 0, 18360, 40, 880);
    wave.freq(freq);

//    var amp = map(sumOfDiff, 0, 18360, 1, .01);
//    wave.amp(amp);

}
