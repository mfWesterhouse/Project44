var npc, npcImage;
var scene, sceneImage;

function preload(){
  npcImage = loadImage("NPC.png");
  sceneImage = loadImage("Scene.png");
}

function setup() {
  createCanvas(800,400);
  
  npc = createSprite(500,90,20,20);
  npc.addImage("NPC", npcImage);
  npc.scale = 0.15;

  scene = createSprite(600,300,20,20);
  scene.addImage("Scene", sceneImage);
  scene.scale = 0.2;

}

function draw() {
  background("lightblue");  

  textSize(15);
  fill("black");
  stroke("black");
  strokeWeight(1);
  text("1. Title: Little Gray Wolf",50,20);
  text("2. The goal of the game is to engage players",50,40);
  text("in a twisted version of Little Red Riding Hood",50,60);
  text("without all the violence of the original tale",50,80);
  text("3. Story: Imagine you are the wolf from",50,100);
  text("Little Red Riding Hood. Your name is",50,120);
  text("Little Gray Wolf and Little Red Riding Hood",50,140);
  text("has stolen something valuable to you.",50,160);
  text("Your goal is to steal it back before she reaches",50,180);
  text("her granny's cottage and you run out of energy.",50,200);
  text("4. Playing Characters: The only playing character is",50,220);
  text("the Wolf and he can run and jump with the keys",50,240);
  text("5. Non-Playing Characters: Bread - increases energy;",50,260);
  text("bushes - obstacle; poppy - mark secret path to cottage;",50,280);
  text("Little Red Riding Hood - to chase;(might have books - give out hints)",50,300);
  text("5. I plan on making the game challenging but not too",50,320);
  text("hard. I also will make the storyline interesting",50,340);
  text("and will say that there are surprises in the game.",50,360);

  drawSprites();
}