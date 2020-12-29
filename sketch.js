
var wall, thickness;
var bullet, speed, weight;

function setup() 
{
  createCanvas(1600,400);

  thickness=random(22, 83);
  speed=random(55, 90);
  weight=random(400, 1500);

  bullet=createSprite(50, 200, 50, 10);
  bullet.velocityX = speed;
  bullet.shapeColor="white";

  wall=createSprite(1000, 200, thickness, height/2);
  wall.shapeColor=(80,80,80);

}

function draw() 
{
  background(0);  

  

    if(hasCollided(bullet, wall))
    {

      bullet.velocityX=0;
      var damage=0.5 * weight * speed * speed/(thickness* thickness* thickness);
      
      
      if(damage>10){wall.shapeColor=color(225, 0, 0); }
        
  
      if(damage<10){wall.shapeColor=color(0, 255, 0);}
    }
  drawSprites();
}