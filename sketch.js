var snake;
var edges;
var points;
var food, W, H;
var R=20;


function setup() {
  createCanvas(400,400);
  W=width/R
  H=height/R
  frameRate(5)
  snake=new Snake()
  foodLocation()
  
  edges=createEdgeSprites();
 
  
}

function draw() {
  //scale(R)
  background("lightBlue");  


if (snake.eat(food)){

  foodLocation()
}
snake.update()
snake.show()

if(snake.endGame()){

  print("Game Over")
  background("white")
  noLoop()
}
noStroke()
fill("orange")
rect(food.x,food.y,10,10)
}
function foodLocation(){
   var x=random(W)
   var y=random(H)
  food=createVector(x,y)

}


function keyPressed(){
  
  if (keyCode===LEFT_ARROW){

     snake.setDirection(-1,0)
  }
  else if (keyCode===RIGHT_ARROW){

    snake.setDirection(+1,0)
 }
  else if (keyCode===UP_ARROW){

  snake.setDirection(0,-1)
 }
 else if (keyCode===DOWN_ARROW){

  snake.setDirection(0,+1)
}
else if(key==" "){

  snake.grow()
}
}