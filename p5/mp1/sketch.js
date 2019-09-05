function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);

}


function draw(){
  background('#23A1FB');
  noStroke();

fill ('#D5C100');
rect(0, 365, 720, 35);

fill ('#107400'); // trunk
rect(100, 100, 80, 400, 25, 25, 0, 0);

fill ('#107400'); //cactus arm 1
rect(26, 214, 150, 40, 25, 25, 25, 25);

fill ('#107400'); //cactus arm 2
rect(126, 225, 150, 40, 25, 25, 25, 25);

fill('#FFE300'); // sun
ellipse(650, 72, 210, 210);


fill ('#5EC5E4') //body
rect (340, 240, 35, 100);

fill('#E4C15E'); //head
ellipse(358, 225, 50, 50);

fill ('#5EC5E4'); //arm
rect (306, 256, 100, 10);

fill ('#5EC5E4'); //leg 1
rect (341, 325, 10, 100);

fill ('#5EC5E4'); //leg 2
rect (364, 325, 10, 100);


fill(255);
text(mouseX + ',' + mouseY, 30, 30) ;

}



function mouseReleased() {
console.log(mouseX + ',' + mouseY)  ;
}
