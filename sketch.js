const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
  polygonImg=loadImage("polygon.png");
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  Engine.run(engine);
  groundObj=new Ground();
  stand=new Stand(400, 295, 300, 10);
  block1=new Box(330,235,30,40);
  block2=new Box(360,235,30,40);
  block3=new Box(390,235,30,40);
  block4=new Box(420,235,30,40);
  block5=new Box(450,235,30,40);
  block6=new Box(360,195,30,40);
  block7=new Box(390,195,30,40);
  block8=new Box(420,195,30,40);
  block9=new Box(390,155,30,40);
  block10=new Box(300,275,30,40);
  block11=new Box(330,275,30,40);
  block12=new Box(360,275,30,40);
  block13=new Box(390,275,30,40);
  block14=new Box(420,275,30,40);
  block15=new Box(450,275,30,40);
  block16=new Box(480,275,30,40);
  polygon=Bodies.circle(50,200,20);
  World.add(world,polygon);
  slingshot=new SlingShot(this.polygon,{x:100,y:200});

}

function draw() {
  background('gray');  
  textSize(20);
  fill("blue");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
  groundObj.display();
  stand.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  imageMode(CENTER)
  image(polygonImg,polygon.position.x,polygon.position.y,40,40)
  drawSprites();
  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingshot.attach(polygon);
  }
}