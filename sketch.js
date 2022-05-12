const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 ball = Bodies.circle(100,100,30,{restitution:0.5})
 World.add(world,ball)
up=createImg("up.png")
up.size(50,50)
up.position(50,50)
rightB=createImg("right.png")
rightB.size(50,50)
rightB.position(130,50)
up.mouseClicked(vforce)
rightB.mouseClicked(hforce)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,30,30);
  Engine.update(engine);
}
function hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.1,y:0})
}
function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.1})
}
