var snake;
var snakeLength;
var snakeSize;

var context;
var screenWidth;
var screenHeight;

gameInitialize ();
snakeInitialize ();
setInterval(gameLoop, 2000/30);

function gameInitialize () {
    var canvas = document.getElementById ("game-screen");
    context = canvas.getContext ("2d");
    
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    
    canvas.height = screenHeight;
    canvas.width = screenWidth;
    }
    
function gameLoop() {
    gameDraw ();
    snakeUpdate ();
    snakeDraw();
}

function gameDraw() {
    context.fillStyle = "rgb(180, 250, 213)";
    context.fillRect (0, 0, screenWidth, screenHeight); 
}

function snakeInitialize(){
    snake = [];
    snakeLength = 15;
    snakeSize = 30;
    
    for(var index = 0; index < snakeLength; index++){
        snake.push({
            x: index,
            y: 0
        });
}
}

function snakeDraw(){
    for(var index = 0; index < snake.length; index++){
            context.fillStyle = "white";
            context.fillRect(snake[index].x * snakeSize, snake[index].y * snakeSize, snakeSize, snakeSize);
    }
}

function snakeUpdate(){
    var snakeHeadX = snake[0].x;
    var snakeHeadY = snake[0].y;
    
    snakeHeadX++;
    
    var snakeTail = snake.pop();
    
    snakeTail.x = snakeHeadX;
    snakeTail.y = snakeHeadY;
}
