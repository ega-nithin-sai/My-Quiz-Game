var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;
var question, contestant, quiz;
var backgroundColour = "yellow";

function setup() {
  createCanvas(800,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}

function draw() {
  background("yellow");  
  if(contestantCount === 2){
    quiz.updateGamestate(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
  // drawSprites();
}