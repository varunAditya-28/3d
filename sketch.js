var gameState;
var backgroundImg,flightImg;
var flight,bg;
var game;
var cloud,cloudsGroup,cloudImg;
var flightBlastImg;
var bg_blast_img;

function preload(){
backgroundImg = loadImage("images/background.jpg")
flightImg = loadImage("images/flight.png")
cloudImg = loadImage("images/cloud.png")
flightBlastImg = loadImage("images/blast.png")
bg_blast_img = loadImage("images/image.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  gameState = "play"
  game = new Game();
  cloudsGroup = new Group();
  bg = createSprite(displayWidth/2,displayHeight/2)
  bg.addImage(backgroundImg)
  bg.scale = 1.5
  bg.velocityX = -8;
  if(bg.x >750){
    bg.x = 100
  }

  flight = createSprite(displayWidth/5,displayHeight/4)
  flight.addImage(flightImg)
  flight.scale = 0.15
}

function draw() {
 background(0); 
  
  
  if(gameState === "play"){
    game.play();
  }

  if(gameState === "end"){
    game.end();
  }
}