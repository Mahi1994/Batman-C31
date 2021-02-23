const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var rainDrop = []
var umbrella;
var man,walkImage;
var maxDrops=100;

var thunderCreatedFrame=0;
var thunder, thunder1,thunder2,thunder3,thunder4;

function preload(){
    walkImage = loadAnimation("walking_1.png","walking_2.png","walking_3.png",
    "walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
    
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
}

function setup(){
  createCanvas(650,800)  
  engine = Engine.create();
  world = engine.world;

  umbrella = new Umbrella(300,515);
  man = createSprite(300,600,100,100);
  man.addAnimation("walking",walkImage)
  man.scale = 0.5;

    //creating drops
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            rainDrop.push(new Drop(random(0,650), random(0,800), 3));
        }
    }
}


function draw(){
  background(0)
  rectMode(CENTER)
   Engine.update(engine); 
   var rand = Math.round(random(1,4));
   if(frameCount%80===0){
       thunderCreatedFrame=frameCount;
       thunder = createSprite(random(10,470), random(10,30), 10, 10);
       switch(rand){
           case 1: thunder.addImage(thunder1);
           break;
           case 2: thunder.addImage(thunder2);
           break; 
           case 3: thunder.addImage(thunder3);
           break;
           case 4: thunder.addImage(thunder4);
           break;
           default: break;
       }
       thunder.scale = random(0.3,0.6)
       thunder.lifetime = 20
   }
  
   //displaying rain drops
   for(var i = 0; i<maxDrops; i++){
       rainDrop[i].display();
       rainDrop[i].rainPosition()
       
   }
   drawSprites()
  
}   

