const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,height,400,20)
   box1=new Box(300,380,50,50)
   box2=new Box(350,380,50,50)
   box3=new Box(320,380,50,50)
   box4=new Box(310,320,50,50)
   box5=new Box(360,320,50,50)
   ball=new Ball(50,200,10)
  slingshot=new SlingShot(ball.body,{x:50,y:300})

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ball.display();
    slingshot.display();

    ground.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}