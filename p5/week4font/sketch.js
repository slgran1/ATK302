var estonia;
var x = 0;

function setup() {
  // put setup code here
createCanvas(800, 800);
estonia = loadFont("assets/Estonia.ttf")

}

function draw() {
  // put drawing code here
background (100);
textFont(estonia, 50);

fill (255, 255, 255);
text ("hello world!", x, 150);
x = x + 1;
if (x > width) {
  x = 0;
}

}
