var myTimer = 200;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  background('black');

}

function draw() {
  // put drawing code here
myTimer-- ;

if (myTimer <= 0) {

  background(random(255), random(255), random(255));
  myTimer = 200;

}
}
