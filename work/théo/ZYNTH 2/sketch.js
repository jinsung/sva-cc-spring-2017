var drums1, drums2, analyzer;

var soundFileC
var soundFileCs
var soundFileD
var soundFileDs
var soundFileE
var soundFileF
var soundFileFs
var soundFileG
var soundFileGs
var soundFileA
var soundFileAs
var soundFileB
var myRed
var myGreen
var myBlue

var currentCircleSize = 0;
var targetCircleSize = 0;

function preload() {
drums1 = loadSound('Drums/drums1.mp3');
drums2 = loadSound('Drums/drums2.mp3');
soundFileC = loadSound('PianoNotes/C.note.mp3');
soundFileCs = loadSound('PianoNotes/Cs.note.mp3');
soundFileD = loadSound('PianoNotes/D.note.mp3');
soundFileDs = loadSound('PianoNotes/Ds.note.mp3');
soundFileE = loadSound('PianoNotes/E.note.mp3');
soundFileF = loadSound('PianoNotes/F.note.mp3');
soundFileFs = loadSound('PianoNotes/Fs.note.mp3');
soundFileG = loadSound('PianoNotes/G.note.mp3');
soundFileGs = loadSound('PianoNotes/Gs.note.mp3');
soundFileA = loadSound('PianoNotes/A.note.mp3');
soundFileAs = loadSound('PianoNotes/As.note.mp3');
soundFileB = loadSound('PianoNotes/B.note.mp3');
}

function setup() {
    createCanvas(1280, 720);
    myRed = 255;
    myGreen = 0;
    myBlue = 0;
  


  // create a new Amplitude analyzer
    analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
    analyzer.setInput(drums1);
    analyzer.setInput(drums2);
    analyzer.setInput(soundFileC);
    analyzer.setInput(soundFileCs);
    analyzer.setInput(soundFileD);
    analyzer.setInput(soundFileDs);
    analyzer.setInput(soundFileE);
    analyzer.setInput(soundFileF);
}

function keyPressed () {
    //DRUMS
    if (keyCode === 49) {
        drums1.loop();
        background(0);
        drums2.stop();
    }
    
    if (keyCode === 50) {
        drums2.loop();
        myRed = 255;
        myGreen = 255;
        myBlue = 255;
        drums1.stop();
    }
    
    //SCALE
    if (keyCode === 65) {
        soundFileC.play ()
        myRed = 255;
        myGreen = 200;
        myBlue = 0;
    }

    if (keyCode === 87) {
        soundFileCs.play ();
        myRed = 255;
        myGreen = 0;
        myBlue = 100;
    }
    
     if (keyCode === 83) {
        soundFileD.play ();
        myRed = 255;
        myGreen = 0;
        myBlue = 255;
    }
    
     if (keyCode === 69) {
        soundFileDs.play ();
        myRed = 255;
        myGreen = 0;
        myBlue = 255;
    }
    
     if (keyCode === 68) {
        soundFileE.play ();
        myRed = 0;
        myGreen = 255;
        myBlue = 255;
    }
    
     if (keyCode === 70) {
        soundFileF.play ();
        myRed = 255;
        myGreen = 0;
        myBlue = 0;
    }
    
     if (keyCode === 84) {
        soundFileFs.play ();
        myRed = 255;
        myGreen = 0;
        myBlue = 0;
    }
    
     if (keyCode === 71) {
        soundFileG.play ();
        myRed = 255;
        myGreen = 255;
        myBlue = 0;
        
    
    }
    
     if (keyCode === 89) {
        soundFileGs.play ();
        myRed = 255;
        myGreen = 0;
        myBlue = 255;
    }
    
     if (keyCode === 72) {
        soundFileA.play ();
        myRed = 255;
        myGreen = 0;
        myBlue = 0;
    }
    
     if (keyCode === 85) {
        soundFileAs.play ();
        myRed = 255;
        myGreen = 0;
        myBlue = 255;
    }
    
     if (keyCode === 74) {
        soundFileB.play ();
        myRed = 255;
        myGreen = 255;
        myBlue = 0;
    }
    
    
}

function draw() {
  //background(255);

  // Get the average (root mean square) amplitude
  var rms = analyzer.getLevel();
  targetCircleSize = 10+rms*100;
  noFill();
  stroke(myRed, myGreen, myBlue);
  var differentBtwCurrentAndTarget = targetCircleSize - currentCircleSize;
  // Draw an ellipse with size based on volume
  currentCircleSize += differentBtwCurrentAndTarget * 0.1;
  ellipse(mouseX, mouseY, currentCircleSize, currentCircleSize);
}
