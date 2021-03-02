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

function myKeyDown(event){
    if (event.keyCode == 37){
       setInterval(moveLeft, 100); 
    }
    if (event.keyCode == 39){
        setInterval(moveRight, 100);
    }
    if (event.keyCode == 38){
        setInterval(moveUp, 100);  
    }
    if (event.keyCode == 40){
        setInterval(moveDown, 100);
    }
 }

 function myLoadEvent(){
     document.addEventListener('keydown', myKeyDown);
 }
document.addEventListener('DOMContentLoaded', myLoadEvent);