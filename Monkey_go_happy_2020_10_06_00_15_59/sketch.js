var gamestate;


var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var bananaGroup
var obstaceGroup
var score;
var survival_time;
var gameover;
var gameover_image;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  gameover_image=loadImage("uh.PNG");

 
}



function setup() {
    createCanvas(600,600);
   monkey = createSprite(100,300,50,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  bananaGroup= new Group();
  obstacleGroup= new Group();
  
  
  gameover=createSprite(300,300);
  gameover.addImage("mmk",gameover_image);
  gameover.scale=4.0;
   gameover.visible=false;

  ground = createSprite(300,510,600,10);
  score=0;
  
  gamestate="play";
}


function draw() {
  background ("darkgreen");

  if (gamestate==="play"){
  if(keyDown("space")&& monkey.y >= 460) {
        monkey.velocityY = -23;
    }
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
banana();
  obstacle();
  
  if (monkey.isTouching(bananaGroup)){
  score=score+1;
  bananaGroup.destroyEach();
  }
    if (monkey.isTouching(obstacleGroup)){
gamestate="end"
  }
  
  
  
  
  
  text("Score: "+ score, 500,50);
  stroke ("black");
  textSize(20);
  fill ("black")
  survival_time=Math.ceil(frameCount/frameRate());
  text ("Survival time:   "+survival_time,100,50);
  }
  else if (gamestate==="end"){
    
    gameover.visible=true;
  }
  
  

  
  
  drawSprites();
}
function banana(){
if (World.frameCount%80===0){
 var banana = createSprite(600,Math.round(random(300,470)),10,10);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  bananaGroup.add(banana);
 banana.lifetime=100;
  banana.velocityX=-7;
}
  
 
  
  
  }
 function obstacle(){
  if (World.frameCount%100===0){
 var obstacle = createSprite(600,450,10,10);
  obstacle.addImage(obstaceImage);
  obstacle.scale=0.3
  obstacleGroup.add(obstacle);
  obstacle.velocityX=-7;
}
}




