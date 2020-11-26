var database;

var game, gameState;
var player, playerCount;
var form;

var allPlayers, finishedPlayers;
var distance;

var p1, p2;

var players;
var passedFinish;

//var xSet;
//var yVel, xVel;

var ground_img, track_img;

var bronze_img, silver_img, gold_img;

function setup() {
  //create the canvas
  createCanvas(displayWidth * 0.99, displayHeight * 0.885);

  //create the database
  database = firebase.database();

  //set the variables
  gameState = 0;
  distance = 0;
  finishedPlayers = 0;
  yVel = 0;
  xVel = 0;

  xSet = false;

  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  //draw the background
  background(200, 200, 255);

  //start the game
  if (playerCount === 2 && finishedPlayers === 0) {
    game.updateState(1);
  }

  //start the game for real
  if (gameState === 1) {
    game.play();
  }

  //end the game
  if (finishedPlayers === 2 ){
    game.updateState(2);
    //gameState = 2;
  }

  //display ranking
  if (gameState === 2 && finishedPlayers === 2) {
    game.displayRanks();
  }
}
