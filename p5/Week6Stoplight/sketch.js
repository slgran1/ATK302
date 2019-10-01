var myState = 0;
var timer = 500;


function setup() {
  // put setup code here
  createCanvas(800, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  // put drawing code here

  fill('Yellow');
  rect(width / 2, height / 2, 150, 500);

  timer--;

  if (timer <= 0) {
    myState++;
    timer = 500;
  }

  if (myState > 2) {
    myState = 0;
  }

  switch (myState) {

    case 0:
    background (100);
    fill('Yellow');
    rect(width / 2, height / 2, 150, 500);
    fill('grey');
    ellipse(width/2, height/2 - 150, 125, 125) //top light
    fill ('grey');
    ellipse(width/2, height/2, 125, 125) //middle light
    fill ('green');
    ellipse(width/2, height/2 + 150, 125, 125) //bottom light
      break;

    case 1:
    background (100);
    fill('Yellow');
    rect(width / 2, height / 2, 150, 500);
    fill('grey');
    ellipse(width/2, height/2 - 150, 125, 125) //top light
    fill ('orange');
    ellipse(width/2, height/2, 125, 125) //middle light
    fill ('grey');
    ellipse(width/2, height/2 + 150, 125, 125) //bottom light
      break;

    case 2:
    background (100);
    fill('Yellow');
    rect(width / 2, height / 2, 150, 500);
    fill('red');
    ellipse(width/2, height/2 - 150, 125, 125) //top light
    fill ('grey');
    ellipse(width/2, height/2, 125, 125) //middle light
    fill ('grey');
    ellipse(width/2, height/2 + 150, 125, 125) //bottom light
      break;

  }
}
