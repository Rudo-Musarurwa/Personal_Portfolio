function moveInterval(){
    if(leftPressed == true){
        moveLeft();
    }
    if(rightPressed == true){
        moveRight();
    }
    if(upPressed == true){
        moveUp();
    }
    if(downPressed == true){
        moveDown();
    }
}

var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;
var interval = 10

function myKeyDown(event){
        if (event.keyCode == 37){
            leftPressed = true; 
        }
        if (event.keyCode == 39){
            rightPressed = true;
        }
        if (event.keyCode == 38){
            upPressed = true;  
        }
        if (event.keyCode == 40){
            downPressed = true;
        }  
 }

 function myKeyUp(event){
    if (event.keyCode == 37){
        leftPressed = false; 
    }
    if (event.keyCode == 39){
        rightPressed = false;
    }
    if (event.keyCode == 38){
        upPressed = false;  
    }
    if (event.keyCode == 40){
        downPressed = false;
    }
}
function moveLeft(){
    var element = document.getElementById('circle');
        var leftMove = element.offsetLeft;
        element.style.left = leftMove - 1 + 'px';
    
        if(leftMove == 0){
            clearInterval(interval);
            interval = setInterval(moveRight, 10);
        }
    }
    
    function moveRight(){
        var element = document.getElementById('circle');
        var rightMove = element.offsetLeft;
        element.style.left = rightMove + 1 + 'px';
    
        if(element.offsetLeft+element.offsetWidth == window.innerWidth){
            clearInterval(interval);
            interval = setInterval(moveLeft, 10);
        }
    }
    
    function moveDown(){
        var element = document.getElementById('circle');
        var downMove = element.offsetTop;
        element.style.top = downMove + 1 + 'px';   
    
        if(element.offsetTop+element.offsetHeight == window.innerHeight){
            clearInterval(interval);
            interval = setInterval(moveUp, 10);
        }
    }
    
    function moveUp(){
        var element = document.getElementById('circle');
        var upMove = element.offsetTop;
        element.style.top = upMove - 1 + 'px';
    
        if(upMove == 0){
            clearInterval(interval);
            interval = setInterval(moveDown, 10);
        }
    }
 function myLoadEvent(){
    
     document.addEventListener('keydown', myKeyDown);
     document.addEventListener('keyup', myKeyUp);
     setInterval(moveInterval, interval);

 }
document.addEventListener('DOMContentLoaded', myLoadEvent);