function ChangeColor(){
    var BoxColor = [];
    BoxColor[1] = 'red';
    BoxColor[2] = 'blue';
    BoxColor[3] = 'black';
    BoxColor[4] = 'purple';
    BoxColor[5] = 'green';
    BoxColor[6] = 'yellow';
   var elements = document.getElementsByTagName('div');

   var randomNumber = Math.ceil(Math.random()*6);
   elements[0].style.backgroundColor = colourArray[randomNumber];

    
}
function LoadPage(){
   var elements = document.getElementsByTagName('a');
   elements[0].addEventListener('click', ChangeColor);
}
document.addEventListener('DOMContentLoaded', LoadPage);