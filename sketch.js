
var bird;
var pipe;
var pipes;
var pipeOrderNumber = 0;

var isOver;
var spacing = 120;
var score;
var maxScore = 0;


function setup() {
  createCanvas(400, 600);
  reset();
}


function draw() {
  background(0);
  bird.update();
  bird.show();
  showScore();

  if(frameCount % 100 == 0) {
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
      reset();
      console.log("reset");
    }

  }




//setarile de start ale jocului
function reset() {

  score = 0;
  pipes = [];
  isOver = false;
  bird = new Bird();
  pipes.push(new Pipe());
  loop();

}

function showScore() {
  textSize(32);
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

