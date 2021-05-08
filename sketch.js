const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box, ground;

function setup(){
    canvas = createCanvas(3000,800);
    engine = Engine.create();
    World = engine.world;

    box = new Box(900,100,70,70);
    ground = new Ground(600,600,1500,20);
}

function draw(){
  background("blue");
  Engine.update(engine);
  
  ground.display();

  box.display();
}

