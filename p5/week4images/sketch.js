var maine;

function setup() {
  // put setup code here
createCanvas(800, 800);
maine = loadImage("assets/maine.jpg");
}

function draw() {
  // put drawing code here
  image(maine, 0, 0, 250, 250);
}
