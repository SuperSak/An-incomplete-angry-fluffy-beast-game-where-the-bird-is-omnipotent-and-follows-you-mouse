const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1, pig2;
var log1, log2,log3, log4;
var bird;
var bgI;

function preload(){
    bgI=loadImage("sprites/bg.png");    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    box1 = new Box(1000,350,70,70);
    box2 = new Box(800,350,70,70);    
    pig1 = new Pig(900,300);
    log1 = new Log(900,250,300,PI/2);

    box3 = new Box(1000,200,70,70);
    box4 = new Box(800,200,70,70);    
    pig2 = new Pig(900,250);
    log2 = new Log(900,100,300,PI/2); 
    
    box5 = new Box(900,100,70,70); 
    log3 = new Log(800,50,150,PI/7); 
    log4 = new Log(1000,50,150,-PI/7); 

    bird = new Bird(100,100);

}

function draw(){
    background(bgI);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    ground.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();


    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird.display();
}