
var bird;
var pipe;
var pipes;
var pipeOrderNumber = 0;
var gameoverFrame = 0;
var isOver;
var spacing = 180;
var score;
var maxScore = 0;
var pipeSpriteTop
var pipeSpriteBottom
var sars
var bgImg
var parallax = 0.8;
var bgX;


function preload() {
  pipeSpriteTop = loadImage('graphics/PipeTubeTop.png');
  pipeSpriteBottom = loadImage('graphics/PipeTubeBottom.png');
  sars = loadImage('graphics/Sars.png');
  bgImg = loadImage('graphics/background.jpg');
}


function setup() {
  createCanvas(400, 600);
  reset();
}


function draw() {
  background(0);
  loadPixels()

  image(bgImg, bgX, 0, bgImg.width, height);

  bgX -= pipes[0].speed * parallax;

  if (bgX <= -bgImg.width + width) {

    image(bgImg, bgX + bgImg.width, 0, bgImg.width, height);
    if (bgX <= -bgImg.width) {
      bgX = 0;
    }
  }





  bird.update();
  bird.show();
  showScore();


  if ((frameCount - gameoverFrame) % 100 == 0) {
    pipes.push(new Pipe());
  }




  for(var i = pipes.length - 1; i >= 0; i--) {

    pipes[i].show();
    pipes[i].update();

    if(pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
    
    if(pipes[i].hit()) {
      gameOver();
    }

    if(pipes[i].pass()) {
      score++;
    }
  }
}




function keyPressed() {
  if(key == ' ') {
    bird.up();

  } else{
      if(isOver != 0){
      reset();
        console.log("reset");
      }
      return
    }

  }




function reset() {
  isOver = false;
  score = 0;
  bgX = 0;
  pipes = [];
  bird = new Bird();
  pipes.push(new Pipe());
  gameoverFrame = frameCount - 1;
  loop();
}

function showScore() {
  textSize(32);
  fill(0);
  stroke(0)

  text('score: ' + score, 1, 32);
  text('record: ' + maxScore, 1, 64);
}


function gameOver() {
  textSize(64);
  textAlign(CENTER, CENTER);
  text('GAMEOVER', width / 2, height / 2);
  textAlign(LEFT, BASELINE);
  maxScore = max(score, maxScore);
  isOver = true;
  noLoop();
}

