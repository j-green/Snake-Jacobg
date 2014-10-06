var snake;

var context;
var screenWidth;
var screenHeight;

function gameInitialize() {
    var canvas = document.getElementById("game-screen");
    context = can.getContext("2d");
    
    screenWidth = window.innerWidth;
    screenHeigth = window.innerHeigth;
    canvas.width = screenWidth;
    canvas.heigth = screenHeigth;
}

function gameLoop() {
    
}

function gameDraw() {
    context.fillStyle = "rgb(180, 250, 213)";
    context.fillRect(0, 0, screenWidth, screenHeigth); 
}

