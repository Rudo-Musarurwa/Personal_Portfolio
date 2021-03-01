function fade(){
    var element = document.getElementById('circle');
    var circleOpacity = parseFloat(element.style.opacity);
    element.style.opacity = circleOpacity - 0.01;  
 }
 function timer(){
     setInterval(fade, 50);
 }
 
 function myLoadEvent() {
   var element = document.getElementById('circle');
   element.addEventListener('click', timer);
   element.style.opacity = 1;
 }
 
 document.addEventListener('DOMContentLoaded', myLoadEvent);