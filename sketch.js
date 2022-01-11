var player 
var enemy
var background
var pineapple

function preload(){
  player = loadImage("hee.png")
  enemy = loadImage("heehee.png")
  backgroundImage = loadImage("funky background.jpg")
  pineapple = loadImage("apple.png")
}


function setup() {
  createCanvas(1280,720);
}

function draw(){
background(0)

  drawSprites()
}













