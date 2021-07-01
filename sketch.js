const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,Stone1;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1400,20)
    hammer = new Hammer(10,100);
    rubberBall = new Rubber(200,200,100,100);
    Stone1 = new stone(30,100,150,50);
    iron1 = new iron(50,100,100,100);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    fill("blue");
    rubberBall.display();
    fill("green");
    Stone1.display();
    fill("black");
    iron1.display();


    
 
}