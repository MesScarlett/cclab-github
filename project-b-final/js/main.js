var song;
var amp = 1;
var spectrum;
var button;
let volHistory = [];
var button;
let playlist = [];
let r = 0;
let g = 0;
let b = 0;
let rChange = false;
let gChange = false;
let bChange = false;
let BChange = false;

function preload() {

  playlist[0] = loadSound("assets/music 1 bg.mp3");
  playlist[1] = loadSound("assets/music 2 piano.mp3");
  playlist[2] = loadSound("assets/music 3 rain.mp3");
  playlist[3] = loadSound("assets/music 4 guide.mp3");
  playlist[4] = loadSound("assets/music 5 baby.mp3");
  playlist[5] = loadSound("assets/music 6 active.mp3");


}

function setup() {
  angleMode(DEGREES);
  let cvs = createCanvas(700, 600);
  cvs.parent("canvas-container")
  playlist[0].play();
  amplitude = new p5.Amplitude();
  fft = new p5.FFT(0.8, 64);
  //button for music
  button1 = createButton("💡light💡");
  button1.mousePressed(music1);
  button1.position(350, 570);
  button2 = createButton("🎹piano🎹");
  button2.mousePressed(music2);
  button2.position(350, 600);
  button3 = createButton("💧rain💧");
  button3.mousePressed(music3);
  button3.position(350, 630);
  button4 = createButton("🔈guidance🔈");
  button4.mousePressed(music4);
  button4.position(350, 660);
  button5 = createButton("👶lullaby👶");
  button5.mousePressed(music5);
  button5.position(350, 690);
  button6 = createButton("😊active😊");
  button6.mousePressed(music6);
  button6.position(350, 720);

  //button for color change
  button7 = createButton("red-ish");
  button7.mousePressed(color1);
  button7.style('background-color', '#ff0000');
  button7.position(350, 460);
  button8 = createButton("green-ish");
  button8.mousePressed(color2);
  button8.style('background-color', '#00ff00');
  button8.position(350, 490);
  button9 = createButton("blue-ish");
  button9.mousePressed(color3);
  button9.position(350, 520);
  button9.style('color', '#ffffff');
  button9.style('background-color', '#0000ff');
  button10 = createButton("black");
  button10.mousePressed(color4);
  button10.position(350, 430);
  button10.style('color', ' #ffffff');
  button10.style('background-color', '#000000');


}

function music1() {
  if (playlist[0].isPlaying()) {
    playlist[0].pause();
  } else {
    playlist[0].play();
    playlist[1].pause();
    playlist[2].pause();
    playlist[3].pause();
    playlist[4].pause();
    playlist[5].pause();
  }
}
function music2() {
  if (playlist[1].isPlaying()) {
    playlist[1].pause();
  } else {
    playlist[1].play();
    playlist[0].pause();
    playlist[2].pause();
    playlist[3].pause();
    playlist[4].pause();
    playlist[5].pause();
  }
}
function music3() {
  if (playlist[2].isPlaying()) {
    playlist[2].pause();
  } else {
    playlist[2].play();
    playlist[1].pause();
    playlist[0].pause();
    playlist[3].pause();
    playlist[4].pause();
    playlist[5].pause();
  }
}
function music4() {
  if (playlist[3].isPlaying()) {
    playlist[3].pause();
  } else {
    playlist[3].play();
    playlist[1].pause();
    playlist[2].pause();
    playlist[0].pause();
    playlist[4].pause();
    playlist[5].pause();
  }
}
function music5() {
  if (playlist[4].isPlaying()) {
    playlist[4].pause();
  } else {
    playlist[4].play();
    playlist[1].pause();
    playlist[2].pause();
    playlist[3].pause();
    playlist[0].pause();
    playlist[5].pause();
  }
}
function music6() {
  if (playlist[5].isPlaying()) {
    playlist[5].pause();
  } else {
    playlist[5].play();
    playlist[1].pause();
    playlist[2].pause();
    playlist[3].pause();
    playlist[4].pause();
    playlist[0].pause();
  }
}

function color1() {
  if (!rChange) {
    rChange = true;
    BChange = gChange = bChange = false;
  }
}


function color2() {
  if (!gChange) {
    gChange = true;
    BChange = rChange = bChange = false;
  }
}


function color3() {
  if (!bChange) {
    bChange = true;
    BChange = rChange = gChange = false;
  }
}

function color4() {
  if (!BChange) {
    BChange = true;
    bChange = rChange = gChange = false;
  }
}

function draw() {
  console.log(rChange, gChange, bChange);
  if (rChange == true) {
    r = 30 + random(-10, 10); g = b = 3;
  }

  else if (gChange == true) {
    g = 30 + random(-10, 10); r = b = 3;
  }

  else if (bChange == true) {
    b = 30 + random(-10, 10); r = g = 3;
  }
  else if (BChange == true) {
    b = r = g = 0;
  }
  else {
    r = g = b = 0;
  }
  background(
    r, g, b, 100
  );
  FFT_visualize();
}

function FFT_visualize() {
  spectrum = fft.analyze();
  for (let i = 0; i < spectrum.length; i++) {
    let w = width / spectrum.length;
    let h = map(spectrum[i], 0, 255, 0, height);
    noStroke();
    circle(w * i, h, 10);
    circle(w * i, height - h, 10);
  }
}
