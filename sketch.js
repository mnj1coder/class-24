const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var bird1;
var pig1,pig2;

var log1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    ground = new Ground(200,height,400,20)
    bird1= new bird(100,100);

    pig1=new pig(270,360);
    pig2=new pig(200,100);

   log1= new log(100,20,100,45);
}

function draw(){
    background(0);
    Engine.update(engine);

    text (mouseX+";"+mouseY,50,50);
    box1.display();
    box2.display();

    ground.display();
    bird1.display();
    pig1.display();
    pig2.display();
    log1.display();
}