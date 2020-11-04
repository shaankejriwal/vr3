var dog,food,foodCount,foodS,database;

function preload()
{
  dogImage = loadImage("images/dogImg.png");
  dogHappyImage = loadImage("images/dogImg1.png");
  milkImage = loadImage("images/Milk.png");
  bedroomImg = loadImage("images/BedRoom.png");
  deadDogImg = loadImage("images/deadDog.png");
  dogVaccinationImg = loadImage("images/dogVaccination.png");
  foodStockImg = loadImage("images/FoodStock.png");
  gardenImg = loadImage("images/Garden.png");
  injectionImg = loadImage("images/injection.png");
  lazyImg = loadImage("images/Lazy.png");
  livingRoomImg = loadImage("images/LivingRoom.png");
  runningRightImg = loadImage("images/running.png");
  runningLeftImg = loadImage("images/runningLeft.png");
  washroomImg = loadImage("images/WashRoom.png");
}

function setup() {
  createCanvas(800, 700);
  
  database = firebase.database();
  var foodCount = database.ref("foodS");
  foodCount.on("value",readStock);

  background1 = createSprite(400,350,1200,1000);
  background1.shapeColor = "yellow";
  
  dog = createSprite(400,400,50,50);
  dog.addImage("images/dogImg.png",dogImage)
  dog.scale = 0.5;

  
}


function draw() {  
  background("yellow");

  if(keyDown("UP_ARROW")){
    writeStock(foodS);
    dog.addImage("images/dogImg1.png",dogHappyImage);
    milk = milk-1;
  }

  if(keyDown("DOWN_ARROW")){
    background1.addImage("images/Garden.png",gardenImg);
    milk.
  }

  drawSprites();

  milk();
  

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  database.ref('/').update({
    foodS:x
  })

}

function milk(){
  milk1 = createSprite(100,100,20,20);
  milk1.addImage("images/Milk.png",milkImage);
  milk1.scale = 0.1;

  milk2 = createSprite(120,100,20,20);
  milk2.addImage("images/Milk.png",milkImage);
  milk2.scale = 0.1;

  milk3 = createSprite(140,100,20,20);
  milk3.addImage("images/Milk.png",milkImage);
  milk3.scale = 0.1;

  milk4 = createSprite(160,100,20,20);
  milk4.addImage("images/Milk.png",milkImage);
  milk4.scale = 0.1;

  milk5 = createSprite(180,100,20,20);
  milk5.addImage("images/Milk.png",milkImage);
  milk5.scale = 0.1;

  milk6 = createSprite(200,100,20,20);
  milk6.addImage("images/Milk.png",milkImage);
  milk6.scale = 0.1;

  milk7 = createSprite(220,100,20,20);
  milk7.addImage("images/Milk.png",milkImage);
  milk7.scale = 0.1;
  
  milk8 = createSprite(240,100,20,20);
  milk8.addImage("images/Milk.png",milkImage);
  milk8.scale = 0.1;

  milk9 = createSprite(260,100,20,20);
  milk9.addImage("images/Milk.png",milkImage);
  milk9.scale = 0.1;

  milk10 = createSprite(280,100,20,20);
  milk10.addImage("images/Milk.png",milkImage);
  milk10.scale = 0.1;

  milk1 = createSprite(300,100,20,20);
  milk1.addImage("images/Milk.png",milkImage);
  milk1.scale = 0.1;

  milk11 = createSprite(320,100,20,20);
  milk11.addImage("images/Milk.png",milkImage);
  milk11.scale = 0.1;

  milk12 = createSprite(340,100,20,20);
  milk12.addImage("images/Milk.png",milkImage);
  milk12.scale = 0.1;

  milk13 = createSprite(360,100,20,20);
  milk13.addImage("images/Milk.png",milkImage);
  milk13.scale = 0.1;

  milk14 = createSprite(380,100,20,20);
  milk14.addImage("images/Milk.png",milkImage);
  milk14.scale = 0.1;

  milk15 = createSprite(400,100,20,20);
  milk15.addImage("images/Milk.png",milkImage);
  milk15.scale = 0.1;

  milk16 = createSprite(420,100,20,20);
  milk16.addImage("images/Milk.png",milkImage);
  milk16.scale = 0.1;

  milk17 = createSprite(440,100,20,20);
  milk17.addImage("images/Milk.png",milkImage);
  milk17.scale = 0.1;

  milk18 = createSprite(460,100,20,20);
  milk18.addImage("images/Milk.png",milkImage);
  milk18.scale = 0.1;

  milk19 = createSprite(480,100,20,20);
  milk19.addImage("images/Milk.png",milkImage);
  milk19.scale = 0.1;

  milk20 = createSprite(500,100,20,20);
  milk20.addImage("images/Milk.png",milkImage);
  milk20.scale = 0.1;
}


