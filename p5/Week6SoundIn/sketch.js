let mic;

function setup() {
  createCanvas(710, 200);

  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  background(200);

  // Get the overall volume (between 0 and 1.0)
  let vol = mic.getLevel();
  fill(127);
  stroke(0);

  // Draw an ellipse with height based on volume
  let h = map(vol, 0, 1, height, 0);
  let c = map(vol, 0, .1, 0, 255);
  fill(c);
  background(c, 0, 0);
  ellipse(width / 2, h - 25, 50, 50);
}


// you need to click the screen before the mic input will work.
function touchStarted() {
  getAudioContext().resume();
}
