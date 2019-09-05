function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);

}


function draw(){
  background('#23A1FB');
  noStroke();

fill ('#147600');
rect(0, 365, 720, 35);

fill('#FFFFFF'); // cloud
ellipse(110, 175, 203, 90);

fill ('#7D3300'); // trunk
rect(100, 100, 80, 400);

fill('#0BAE00'); // leaves
ellipse(100, 100, 100, 100);

fill('#0BAE00'); // leaves
ellipse(150, 150, 100, 100);

fill('#0BAE00'); // leaves
ellipse(200, 100, 100, 100);

fill('#0BAE00'); // leaves
ellipse(150, 80, 100, 100);

fill('#0BAE00'); // leaves
ellipse(115, 80, 100, 100);

fill('#0BAE00'); // leaves
ellipse(165, 80, 100, 100);

fill('#0BAE00'); // leaves
ellipse(93, 150, 100, 100);

fill('#0BAE00'); // leaves
ellipse(208, 158, 100, 100);

fill('#000000'); // tree hole
ellipse(145, 300, 50, 50);

fill('#FFE300'); // sun
ellipse(650, 72, 210, 210);

fill('#FFFFFF'); // cloud
ellipse(359, 116, 155, 55);

fill('#FFFFFF'); // cloud
ellipse(524, 77, 176, 65);




fill(255);
text(mouseX + ',' + mouseY, 30, 30) ;

}



function mouseReleased() {
console.log(mouseX + ',' + mouseY)  ;
}
