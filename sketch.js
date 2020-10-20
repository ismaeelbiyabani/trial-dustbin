var dustbinSprite,dustbinIMG;
var boxSprite,boxIMG;
var paperSprite,paperIMG;
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
	boxIMG=loadImage("dustbin.jpg")
}

function setup() {
	createCanvas(800, 700);
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("red")
	
	boxSprite=createSprite(400,610,5,5)
	boxSprite.addImage(boxIMG)
	boxSprite.scale=0.30

	//dustbinSprite1=createSprite(340,610,5,100)
	//dustbinSprite2=createSprite(460,610,5,100)
	//dustbinSprite3=createSprite(400,660,130,5)

	//dustbinSprite1.shapeColor=("purple")
	//dustbinSprite2.shapeColor=("purple")
	//dustbinSprite3.shapeColor=("purple")
	
	
	
	paperSprite=createSprite(50,650,5,5)
	paperSprite.addImage(paperIMG)
	paperSprite.scale=0.1


	



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(50,650,5,5);
    ground  = new Ground(width/2, height-35, width,10);
	box = new box(400,610,5,5);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  ground.display();
 box.display();
 paper.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   
	    Matter.Body.applyForce(paperObject.body,paperObject.body.position,x=85,y=-85);
   
	   
	   
	   
	   
	 }
   }



