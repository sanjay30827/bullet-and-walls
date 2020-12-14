var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  bullet=createSprite(50,200,50,10);
  bullet.shapeColor="orange"
  
  thickness=random(22,83);

  speed=random(223,321);
  weight=random(30,52);

  bullet.velocityX = speed;

  wall=createSprite(1200,200,thickness, height/2);
  wall.shapeColor="white"
  
  
}

function draw() {
  background("black"); 
  
  

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness*thickness);
  }

  if(damage>10)
  {
  wall.shapeColor="green"
  }

  if(damage<10)
  {
    wall.shapeColor="red"
  }
drawSprites();
}

function hasCollided(lbullet,lwall)
  {
    bulletRightEdge=lbullet.x +lbullet.width;
    wallLiftEdge=lwall.x;

    if(bulletRightEdge>=wallLiftEdge)
    {
      return true
    }
      return false;
  }