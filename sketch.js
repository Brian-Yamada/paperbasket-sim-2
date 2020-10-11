const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1, floor1, basket1, basket2, basket3;
var dustbin, binImg


function preload()
{
	binImg = loadImage("Images/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
 
	dustbin = createSprite(650,680,100,100);
	dustbin.addImage(binImg);
	dustbin.scale = 0.4;

	floor1 = new floor(400,680,1500,10);
	basket1 = new basket(600,645,10,70);
	basket2 = new basket(700,645,10,70);
	basket3 = new basket(650,680,100,10);
	ball1 = new ball(50,600,50,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  
  floor1.display();
  basket1.display();
  basket2.display();
  basket3.display();
  ball1.display();

  drawSprites();
 
}

function keypressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:65,y:-65});

	}
}



