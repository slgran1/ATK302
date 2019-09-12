var estonia;

function setup() {
  // put setup code here
createCanvas(800, 800);
estonia = loadFont("assets/Estonia.ttf")

}

function draw() {
  // put drawing code here
background (100);
textFont(estonia, 150);

fill (255, 0 ,0);
text ("hello world!", 20, 150);

}
