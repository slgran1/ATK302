var x = 0 ;

function setup() {
  // put setup code here
  createCanvas(200, 200);
}

function draw() {
  // put drawing code here
background (100);
//  rect(x, 10, 10, 10);
fill(255);
  text("The Gremlins are coming!", x, height/2);
x += 2;

if(x > width){
  x = 0;
}

}
