var myState = 0;
var timer = 0;

function setup() {
  // put setup code here
  createCanvas (800, 800);

}

function draw() {
  // put drawing code here

timer++;

if (timer >= 200){

  myState++;
  timer = 0;

}

if (myState > 1) {
  
  myState = 0;

}


switch (myState) {

case 0:
background(100);
textSize(24);
text('I\'m so good at sleeping...', 40, 40);
break;


case 1:
background(100);
textSize(24);
text('I can do it with my eyes closed.', 40, 40);
break;

}


}
