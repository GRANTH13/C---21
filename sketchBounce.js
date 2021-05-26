var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(300, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(300,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  //gameObject1 = createSprite(300,200,50,50);
  //gameObject1.shapeColor = "green"
fixedRect.velocityY= 2;
movingRect.velocityY = -2;

} 

function draw() {
  background("pink");  
 // movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;

 bounce(movingRect,fixedRect);
  drawSprites();
}

function bounce(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2 
    ) {
  object1.velocityX = object1.velocityX * (-1);
  object2.velocityX = object2.velocityX * (-1);

}

 if( object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2
 ){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);

}
}