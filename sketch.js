const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0;


function setup() {
  var canvas = createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(520, 250, 200, 10);
  ground2 = new Ground(400, 390, 800, 20);

  rock = new Rock(200,250,50,50);

  box8 = new Box(450,235,30,40);
  box9 = new Box(480,235,30,40);
  box10 = new Box(520,235,30,40)
  box11 = new Box(540,235,30,40);
  box12 = new Box(570,235,30,40);
  box13 = new Box(480,195,30,40);
  box14 = new Box(520,195,30,40);
  box15 = new Box(540,195,30,40);
  box16 = new Box(510,155,30,40);

  slingshot = new Slingshot(rock.body,{x:150, y:200});
}

function draw() {
  
  background(255);

  Engine.update(engine);

  text("SCORE : " +score,600,70)
  
  ground.display();
  ground2.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  slingshot.display();
  rock.display();

  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();

  drawSprites();
}

function mouseReleased(){
  slingshot.fly();
}

function mouseDragged(){
  Matter.Body.setPosition(rock.body, {x: mouseX, y: mouseY})
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(rock.body);
  }
}
