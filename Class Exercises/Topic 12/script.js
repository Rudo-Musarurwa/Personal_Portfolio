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

var interval = 0;
var t = window.innerHeight;//top
var l = window.innerWidth;//left

function myKeyDown(event){
        clearInterval(interval);
        if (event.keyCode == 37){
        interval = setInterval(moveLeft, 10); 
        }
        if (event.keyCode == 39){
            interval = setInterval(moveRight, 10);
        }
        if (event.keyCode == 38){
            interval = setInterval(moveUp, 10);  
        }
        if (event.keyCode == 40){
            interval = setInterval(moveDown, 10);
        }
 }

 function myLoadEvent(){
    
     document.addEventListener('keydown', myKeyDown);
 }
document.addEventListener('DOMContentLoaded', myLoadEvent);