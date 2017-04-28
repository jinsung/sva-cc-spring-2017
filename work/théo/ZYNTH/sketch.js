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

var soundFileCm

var circles;

var isSoundPlaying;
var soundIndex;

function setup () {
    soundIndex = -1;
    createCanvas( 500, 500 );
    background (0);
    colorMode(HSB, 120); 
    isSoundPlaying = false;
    //SCALE
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
    // MAJOR CHORDS
    soundFileCm = loadSound('MajorChords/Cm.mp3');
    
    
    circles = new Circle();
    circles.setup();
    
      
}

function keyPressed () {
    isSoundPlaying = true;
    //SCALE
    if (keyCode === 65) {
        soundIndex = 0;
        soundFileC.play ();
        background (120, 120, 80);
        
    } else background (0);

    if (keyCode === 87) {
        soundFileCs.play ();
        background (110, 120, 80);
    }
    
     if (keyCode === 83) {
        soundFileD.play ();
        background (100, 120, 80);
    }
    
     if (keyCode === 69) {
        soundFileDs.play ();
        background (90, 120, 80);
        
    }
    
     if (keyCode === 68) {
        soundFileE.play ();
        background (80, 120, 80);
    }
    
     if (keyCode === 70) {
        soundFileF.play ();
        background (70, 120, 80);
    }
    
     if (keyCode === 84) {
        soundFileFs.play ();
        background (60, 120, 80);
    }
    
     if (keyCode === 71) {
        soundFileG.play ();
        background (50, 120, 80);
    
    }
    
     if (keyCode === 89) {
        soundFileGs.play ();
        background (40, 120, 80);
    }
    
     if (keyCode === 72) {
        soundFileA.play ();
        background (30, 120, 80);
    }
    
     if (keyCode === 85) {
        soundFileAs.play ();
        background (20, 120, 80);
    }
    
     if (keyCode === 74) {
        soundFileB.play ();
        background (10, 120, 80);
    }
    
    //MAJOR CHORDS
    
    if (keyCode === 90) {
        soundFileCm.play ();
        background (120, 80, 60);
        
    }
    
}

function keyReleased () {
    isSoundPlaying = false;
}

function draw () {
    noStroke();
    //ellipse(10, 100);
    circles.draw(soundIndex, isSoundPlayings);
    
}