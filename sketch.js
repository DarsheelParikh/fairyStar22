function preload()
{
   //preload the images here
   //fairyImage = loadImage("fairy.png")
   //starImage = loadImage("star.png")
}

function setup() {
  createCanvas(800, 750);
  fairy = createSprite(200,350)
  //fairy.addImage(fairyImage)
  star = createSprite(700,150)
 //star.addImage(starImage)
}



function draw() {
  background("black");
  fairy.velocityY = 0
  fairy.velocityX = 0
  star.velocityY = 0
  if(keyDown("Left")){
    fairy.velocityX = -2
  }
  if(keyDown("Right")){
  fairy.velocityX = 2
  }
  if(keyDown("Down")){
    star.velocityY = 2
  }
drawSprites()
}
