function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);

}


function draw(){
  background('#23A1FB');
  noStroke();


if (mouseIsPressed) {

fill ('#D5C100');
rect(0, 365, 720, 35);

fill ('#107400'); // trunk
rect(100, 100, 80, 400, 25, 25, 0, 0);

fill ('#107400'); //cactus arm 1
rect(26, 214, 150, 40, 25, 25, 25, 25);

fill ('#107400'); //cactus arm 2
rect(126, 225, 150, 40, 25, 25, 25, 25);

fill ('#107400'); //cactus arm 3
rect(245, 177, 30, 80, 25, 25, 25, 25);

fill('#FFE300'); // sun
ellipse(650, 72, 210, 210);


fill ('#5EC5E4') //body
rect (340, 240, 35, 100);

fill('#E4C15E'); //head
ellipse(358, 225, 50, 50);

fill (0); //eye 1
ellipse (370, 221, 5, 5);

fill (0); //eye 2
ellipse (354, 221, 5, 5);

fill (0); //mouth
rect (354, 233, 20, 3);

fill ('#5EC5E4'); //arm
rect (306, 256, 130, 10);

fill ('#5EC5E4'); //leg 1
rect (341, 325, 10, 80);

fill ('#5EC5E4'); //leg 2
rect (364, 325, 10, 80);

fill (0, 0, 0); //victim body
rect (477, 359, 100, 35);

fill('#E4C15E'); //victim head
ellipse(466, 355, 50, 50);

fill (0); //victim eye 1
ellipse (461, 352, 5, 5);

fill (0); //victim eye 2
ellipse (461, 340, 5, 5);

fill (0); //victim mouth
rect (473, 338, 3, 20);

fill (0, 0, 0); //victim leg 1
rect (574, 384, 80, 10);

fill (0, 0, 0); //victim leg 2
rect (574, 360, 80, 10);

fill ('#B2BBBD'); //glass
rect (429, 243, 33, 43);

fill ('#5EC5E4') //water
rect (433, 248, 25, 35);

fill (255);
text ("Water Man is a super hero that helps people who are stuck in the desert rehydrate.", 30, 30);
text ("He doesn't help them, he just refreshes them.", 30, 45);

} else {

  fill ('#D5C100');
  rect(0, 365, 720, 35);

  fill ('#107400'); // trunk
  rect(100, 100, 80, 400, 25, 25, 0, 0);

  fill ('#107400'); //cactus arm 1
  rect(26, 214, 150, 40, 25, 25, 25, 25);

  fill ('#107400'); //cactus arm 2
  rect(126, 225, 150, 40, 25, 25, 25, 25);

  fill ('#107400'); //cactus arm 3
  rect(245, 177, 30, 80, 25, 25, 25, 25);

  fill('#FFE300'); // sun
  ellipse(650, 72, 210, 210);

  fill (0, 0, 0); //victim body
  rect (477, 359, 100, 35);

  fill('#E4C15E'); //victim head
  ellipse(466, 355, 50, 50);

  fill (0); //victim eye 1
  ellipse (461, 352, 5, 5);

  fill (0); //victim eye 2
  ellipse (461, 340, 5, 5);

  fill (0); //victim mouth
  rect (473, 338, 3, 20);

  fill (0, 0, 0); //victim leg 1
  rect (574, 384, 80, 10);

  fill (0, 0, 0); //victim leg 2
  rect (574, 360, 80, 10);


}

}
