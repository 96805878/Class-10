var trex, trex_running;
var edges, ground, groundimg;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundimg = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,400)

  trex = createSprite(50,100,30,20);
  trex.addAnimation("running",trex_running)
  trex.scale=0.75;
  
  //edges=createEdgeSprites();
  
  ground=createSprite(300,380,600,20);
  ground.addImage(groundimg);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.width);
  
}

function draw(){
  background("black")
  if(keyDown("space")){
    trex.velocityY=-10;
  }
  trex.collide(ground)
  //GRAVITY 
  trex.velocityY+=0.5
  if(ground.x<0){
    ground.x=ground.width/2;
  }


  drawSprites();
}

/*
edges[0] - left
edges[1] - right
edges[2] - top
edges[3] - bottom
*/
