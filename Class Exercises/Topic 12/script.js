function moveInterval(){
    if(leftPressed == true){
        var circle = document.getElementById('circle');
        var moveleft = parseFloat(circle.offsetLeft);
        circle.style.left = moveleft - 1 +'px';
    }
    if(rightPressed == true){
        var circle = document.getElementById('circle');
        var moveRight = parseFloat(circle.offsetLeft);
        circle.style.left = moveRight + 1 +'px';
    }
    if(upPressed == true){
        var circle = document.getElementById('circle');
        var moveUp = parseFloat(circle.offsetTop);
        circle.style.top = moveUp - 1 +'px';
    }
    if(downPressed == true){
        var circle = document.getElementById('circle');
        var moveDown = parseFloat(circle.offsetTop);
        circle.style.top = moveDown + 1 +'px';
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

 function myLoadEvent(){
    
     document.addEventListener('keydown', myKeyDown);
     document.addEventListener('keyup', myKeyUp);
     setInterval(moveInterval, interval);

 }
document.addEventListener('DOMContentLoaded', myLoadEvent);