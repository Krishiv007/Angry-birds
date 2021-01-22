const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

var box;
var box1;

function setup()
{
    var canvas = createCanvas(400, 400);
    
    engine = Engine.create();
    world = engine.world;

    var ground_options={
        'isStatic' :true
    }

    ground = Bodies.rectangle(200, 380, 400, 20,ground_options);
    World.add(world, ground);

    var box_options={
        restitution:1.0
    }

    box = Bodies.circle(200, 100, 40, box_options);
    World.add(world,box);

    console.log(ground)
    


   box1_options={
       restitution:1.0
   }
    
    box1 = Bodies.rectangle(300,200,50,50,box1_options);
    World.add(world,box1);

    

}

function draw()
{
  background(0);

  Engine.update(engine);
  
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 400, 20);
  
  ellipseMode(RADIUS)
  ellipse(box.position.x, box.position.y, 40, 40);

  rectMode(CENTER);
  rect(box1.position.x,box1.position.y,50,50);
  
}
