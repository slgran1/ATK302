var song1, song2, song3, song4, song5;
var myState = 0;


function preload() {
  song1 = loadSound('assets/chill.mp3');
  song2 = loadSound('assets/end.mp3');
  song3 = loadSound('assets/escape.mp3');
  song4 = loadSound('assets/promise.mp3');
  song5 = loadSound('assets/thanks.mp3');

  // set each song to loop and then immediately pause it so it doesn't play

  song1.loop();
  song1.stop();
  song2.loop();
  song2.stop();
  song3.loop();
  song3.stop();
  song4.loop();
  song4.stop();
  song5.loop();
  song5.stop();

}

function setup() {

  createCanvas(800, 800);

}

function draw() {
  background(100);
  switch (myState) {

    case 0:
      song1.play();
      myState = 1;
      break;


    case 1:
      textSize(15);
      text("This song is about trying to keep your cool with someone you really like.", 10, 100);
      break;

    case 2:
      song2.play();
      myState = 3;
      break;

    case 3:
      text("This song deals with the reality of depression after a breakup.", 10, 100);
      break;

    case 4:
      song3.play();
      myState = 5;
      break;

    case 5:
      text("This song explains that if you really want to be with someone, you have to know everything that makes them tick.", 10, 100);
      break;

    case 6:
      song4.play();
      myState = 7;
      break;

    case 7:
      text("This track deals with longing for someone you love to come back.", 10, 100);
      break;

    case 8:
      song5.play();
      myState = 9;
      break;

    case 9:
      text("This song is a thank you to someone you've wronged but they made your life better.", 10, 100);
      break;
  }


}

function mouseReleased() {
  myState++;

  // pause all the songs
  song1.pause();
  song2.pause();
  song3.pause();
  song4.pause();
  song5.pause();

  if (myState > 9) {
    myState = 0;
  }
}
