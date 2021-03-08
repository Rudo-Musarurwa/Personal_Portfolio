function moveLeft(){
    var element = document.getElementById('circle');
    var leftMove = element.offsetLeft;
    element.style.left = leftMove - 1 + 'px';
}
function moveRight(){
    var element = document.getElementById('circle');
    var rightMove = element.offsetLeft;
    element.style.left = rightMove + 1 + 'px';
}
function moveDown(){
    var element = document.getElementById('circle');
    var downMove = element.offsetTop;
    element.style.top = downMove + 1 + 'px';   
}
function moveUp(){
    var element = document.getElementById('circle');
    var upMove = element.offsetTop;
    element.style.top = upMove - 1 + 'px';
}
var interval = 0;
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