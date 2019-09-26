var myState = 0;

function setup() {
  // put setup code here
  createCanvas (800, 800);

}

function draw() {
  // put drawing code here

switch (myState) {

case 0:
background(100);
textSize(24);
text('Today at the bank, some lady asked me to check her balance...', 40, 40);
break;


case 1:
background(100);
textSize(24);
text('So I pushed her over.', 40, 40);
break;

}


}

function mouseReleased() {
  myState++

  if (myState > 1) {
  myState = 0;

  }
}
