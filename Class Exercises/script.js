function myKeyDown(){
    var element = document.getElementById('circle');
    var moveLeft = element.offsetLeft;
    element.style.left = moveLeft- 10 +'px';
 }
/* function timer(){
     setInterval(fade, 50);
 }*/
 
 /*function myLoadEvent() {
   document.addEventListener('keydown', myKeyDown);
 }*/
 document.addEventListener('keydown', myKeyDown);
 //document.addEventListener('DOMContentLoaded', myLoadEvent);