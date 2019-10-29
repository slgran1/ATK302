var cars = [];
var frogPos;
var myState = 0;
var timer = 0;
var posty, postyLeft, postyRight;
var cup;
var splash_post;
var font;
var losspic, winpic;
var grass;

function setup() {

  createCanvas(800, 800);

  // spawn cars!!!
  for (var i = 0; i < 20; i++) {
    cars.push(new Car());
  }

  postyLeft = loadImage("assets/stewie_left.png");
  postyRight = loadImage("assets/stewie_right.png");
  posty = postyLeft;
  cup = loadImage("assets/quaffle.png");
  splash_post = loadImage("assets/splash_quid.jpg");
  losspic = loadImage("assets/loss.jpg");
  winpic = loadImage("assets/win.png");
  grass = loadImage("assets/grass.jpg");

  font = loadFont("assets/imperfecta.ttf");

  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
  textAlign(CENTER);
}

function draw() {

  switch (myState) {

    case 0: // splash screen
      background(0, 182, 18);
      image(splash_post, height / 2, width / 2, 800, 480);
      fill(255);
      textSize(35);
      textFont(font);
      strokeWeight(5);
      stroke(25);
      text("Welcome to Quidditch Cup 13 in Charlseton, West Virginia!", width / 2, 100);
      text("Collect all the quaffles to win the national title!", width / 2, 740);
      break;

    case 1: // the game state
      game();
      timer++;
      if (timer > 900) {
        myState = 3;
        timer = 0;
      }
      break;

    case 2: // the win state
      background(46, 190, 217);
      image(winpic, height / 2, width / 2, 800, 480);
      fill(255);
      textSize(35);
      textFont(font);
      strokeWeight(5);
      stroke(25);
      text("Congratulations! You're the USQ National Champions!!", width / 2, 100);
      text("Click to defend your title!", width / 2, 740);
      break;

    case 3: // the lose state
      background(120, 112, 102);
      image(losspic, height / 2, width / 2, 800, 480);
      fill(255);
      textSize(35);
      textFont(font);
      strokeWeight(5);
      stroke(25);
      text("You have lost in heartbreaking fashion. How sad.", width / 2, 100);
      text("Click to compete for the title again!", width / 2, 740);
      break;

  }

}



function mouseReleased() {

  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 2:
      resetTheGame();
      myState = 0
      break;

    case 3:
      resetTheGame();
      myState = 0;
      break;

  }

}




// car class!!
function Car() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.timer = 0;


  // methods
  this.display = function() {

    image(cup, this.pos.x, this.pos.y, 70, 100);


  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}

function keyPressed() {
  if (keyCode == LEFT_ARROW) posty = postyLeft;
  if (keyCode == RIGHT_ARROW) posty = postyRight;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;
}


function resetTheGame() {
  cars = [];
  // spawn cars!!!
  for (var i = 0; i < 20; i++) {
    cars.push(new Car());
  }
  timer = 0;
  frogPos = createVector(width / 2, height - 80);
}


function game() {
  background(100);
  image(grass, 0, 0, 3200, 3200);
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }

  if (cars.length == 0) {
    myState = 2;
    cars
  }

  // draw the frog
  fill('green');
  //ellipse(frogPos.x, frogPos.y, 60, 60);
  image(posty, frogPos.x, frogPos.y, 110, 150);
  checkForKeys();
}
