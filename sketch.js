
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Ball(20,200,25);
	ball2 = new Ball(300,200,35);
	
	
	groundSprite=createSprite(width/2, 100, 600,10);
	groundSprite.shapeColor=color(255,255,0);
	
	ground = Bodies.rectangle(width/2, 100, 600, 10 , {isStatic:true});
	World.add(world, ground);
	ground.debug = true;
	rope1 = new Rope(ball1.body,ground.body);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball1.display();
  ball2.display();
  rope1.display();
 
  
  drawSprites();
 
}


