var song
var fft
const  doubleclickthresh = 250;
let lastclick = 0;


function preload() {
  song = loadSound('whats the use.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fft = new p5.FFT()
}

function draw() {
  background(0);
  let hue = frameCount  % 360; // Cycle through hues from 0 to 359
  let saturation = 100; // Set saturation value
  let brightness = 100; // Set brightness value
  
  
  let strokeColor = color(`hsb(${hue}, ${saturation}%, ${brightness}%)`);
  
  stroke(strokeColor);
  noFill()


  var wave  = fft.waveform()

  beginShape()
  for (var i = 0; i < width; i++) {
    var index = floor(map(i, 0, width, 0,  wave.length))

    var x = i 
    var y = wave[index] * 200 + height / 2
    vertex(x, y)

  }
  endShape()
  
  
  textSize(32);
  text('Click once to play or pause the song and twice to restart the song', 10, 30 )
  fill('red')


  










}

function mouseClicked() {
  if (millis() - lastclick < doubleclickthresh) {
    song.jump(0);
  } else {

    if (song.isPlaying()) {
      song.pause()
    }else{
      song.play()
    }
  }

  lastclick = millis();
}


