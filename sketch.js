var kicker1;
var kicker2;
var kavanaugh;
var kavanaugh2;
var kavanaugh3;
var puncher1;
var puncher2;
var click;
var count = 0;

function preload() {
  kicker1= loadImage('kickerstart.png');
  kicker2= loadImage('kickerattack.png');
  kavanaugh= loadImage('kavanaugh.jpg');
  kavanaugh2= loadImage('kavanaugh2.jpg');
  kavanaugh3= loadImage('kavanaugh3.jpg');
  puncher1= loadImage('puncherstart.png');
  puncher2= loadImage('puncherattack.png');
}

function setup() {
  createCanvas(1600, 900);
}
if(mouseIsPressed) {count += 1;}

function increaseCount() {
  count +=1;
}

function draw() {
  text(count, 200, 200);

  image(kavanaugh, 0, 0);

  if(mouseX<width/2) {
    image(kicker1, mouseX, mouseY, 585, 525);
    if(mouseIsPressed) {
      image(kavanaugh2, 0, 0);
      image(kicker2, mouseX, mouseY, 585, 525);
    } else {
      image(kicker1, mouseX, mouseY, 585, 525);
    }
  } else {
    image(puncher1, mouseX, mouseY, 585, 525);
    if(mouseIsPressed) {
      image(kavanaugh3, 0, 0);
      image(puncher2, mouseX, mouseY, 585, 525);
    } else {
      image(puncher1, mouseX, mouseY, 585, 525);
    }

  }

}
