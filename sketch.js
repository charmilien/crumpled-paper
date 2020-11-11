
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
var bin, paperball,ground
var engine,world;


function setup() 
{
	createCanvas(1200, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	ground=new Ground(width/2,575,width,30);
	bin=new Dustbin(1000,550);
	paperball=new paper(200,450,40);
	

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  bin.display();
  paperball.display();
  ground.display();

}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperball.body,paperball.body.position,{x:105,y:-70});
    
  	}
}





