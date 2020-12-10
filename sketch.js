
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,surivalTime


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 monkey = createSprite (50,300,20,20) 
 monkey.addAnimation("running",monkey_running)
 monkey.scale=0.1   
  
 ground =createSprite (200,337,800,10)  
  ground.velocityX =-5
}


function draw() {
  background("white")
  if (ground .x < 0){
      ground .x = ground .width/2;
    }
  if(keyDown("space")){        
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground)
  CFood()
  C()
  surivalTime=Math.ceil(frameCount/frameRate())    
  text("surivalTime" + surivalTime,100,50) 
drawSprites();
 
}
function CFood(){
  if(World.frameCount%80==0){
    banana = createSprite (400,300,20,20) 
    banana.addImage("bana",bananaImage)
   banana.y = Math.round(random(10,200))
     banana.velocity.x=-3
    banana.scale=0.07
    
  } 
}
function C(){
  if(World.frameCount%200==0){  
     obstace= createSprite (450,300,20,20) 
    obstace.addImage("obst",obstaceImage)
     obstace.velocity.x=-3
    obstace.scale=0.2
    
  } 
}
