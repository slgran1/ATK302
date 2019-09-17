var song1;

function preload() {
  song1 = loadSound('assets/piano.mp3');
}

function setup() {
  // put setup code here

}

function draw() {
  // put drawing code here

}


function mouseReleased() {

  if (song1.isPlaying()) {
    song1.pause();
  } else {
    song1.play();

  }

}
