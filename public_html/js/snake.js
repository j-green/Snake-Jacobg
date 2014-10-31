/*------------------------------------------------------------------------------
 * Variables
 * -----------------------------------------------------------------------------
 */

var snake;
var snakeLength;
var snakeSize;
var snakeDirection;

var food;

var context;
var screenWidth;
var screenHeight;

/*------------------------------------------------------------------------------
 * Executing Game Code
 * -----------------------------------------------------------------------------
 */

gameInitialize ();
snakeInitialize ();
foodInitialize ();
setInterval(gameLoop, 1456/30);

function gameInitialize () {
    var canvas = document.getElementById ("game-screen");
    context = canvas.getContext ("2d");
    
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    
    canvas.height = screenHeight;
    canvas.width = screenWidth;
    
    document.addEventListener("keydown", keyboardHandler);
    
    }
    /*--------------------------------------------------------------------------
     * 
     * -------------------------------------------------------------------------
     */
function gameLoop() {
    gameDraw ();
    snakeUpdate ();
    snakeDraw();
    foodDraw();
}

function gameDraw() {
    context.fillStyle = "rgb(180, 250, 213)";
    context.fillRect (0, 0, screenWidth, screenHeight); 
}

function snakeInitialize(){
    snake = [];
    snakeLength = 15;
    snakeSize = 30;
    snakeDirection = "down";
    
    for(var index = snakeLength - 1; index >= 0; index--){
        snake.push({ x: index,y: 0});;
    }
}

function snakeDraw(){
    for(var index = 0; index < snake.length; index++){
            context.fillStyle = "White";
            context.fillRect(snake[index].x * snakeSize, snake[index].y * snakeSize, snakeSize, snakeSize);
    }
} 
function snakeUpdate(){
    var snakeHeadX = snake[0].x;
  ;  var snakeHeadY = snake[0].y;
    
    if(snakeDirection == "down"){
       snakeHeadY++; 
   }
    else if(snakeDirection == "right"){
            snakeHeadX++;
   }
    else if(snakeDirection == "left"){
            snakeHeadX--;
   }
    else if(snakeDirection == "up"){
            snakeHeadY--;
   }
    
    var snakeTail = snake.pop();
    
    snakeTail.x = snakeHeadX;
    snakeTail.y = snakeHeadY;
    snake.unshift(snakeTail);

}

function foodInitialize(){
    food = {
        x: 0,
        y: 0
    };
    setFoodPosition();
}

function foodDraw(){
    context.fillStyle = "White";
    context.fillRect(food.x, food.y, snakeSize, snakeSize);
}

function setFoodPosition(){
    var randomX = Math.floor(Math.random() * screenWidth);
    var randomY = Math.floor(Math.random() * screenHeight);
    
    food.x = randomX;
    food.y = randomY;
}

function keyboardHandler(event) {
    console.log(event);

if(event.keyCode == "39" && snakeDirection != "left")   {
    snakeDirection="right";
}   
 
 else if(event.keyCode == "40" && snakeDirection != "up"){
     snakeDirection = "down";
 }
 else if(event.keyCode == "37" && snakeDirection != "right"){
     snakeDirection = "left";
 }
 else if(event.keyCode == "38" && snakeDirection != "down"){
     snakeDirection = "up";
 } 
 }