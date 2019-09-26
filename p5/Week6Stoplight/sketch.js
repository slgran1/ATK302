var myState = 0;
var timer = 500;


function setup() {
  // put setup code here
  createCanvas(800,800);
}

function draw() {
  // put drawing code here

  timer--;

  if (timer <= 0){
    myState++;
  }

  if (myState > 2){
    myState = 0;
  }

  switch (myState) {

    case 0:
    rectMode(CENTER);
    
    break;

    case 1:
    break;

    case 2:
    break;

  }
}
