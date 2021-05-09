function ChangeDi(){
     var diceNumber = [];
     diceNumber[1] = 'One';
     diceNumber[2] = 'Two';
     diceNumber[3] = 'Three';
     diceNumber[4] = 'Four';
     diceNumber[5] = 'Five';
     diceNumber[6] = 'Six';

    var randomNumber = Math.ceil(Math.random()*6);
     this.className = 'side' + randomNumber;

     this.nextSibling.nextSibling.firstChild.nodeValue = 'You rolled a ' + diceNumber[randomNumber];
 }
function LoadPage(){
    var elements = document.getElementsByTagName('div');
    for (var i = 0; i < elements.length; i++){
        elements[i].addEventListener('click', ChangeDi);
    }
    
    
   // document.addEventListener('keydown', myKeyDown);
   // document.addEventListener('keyup', myKeyUp); 
    

 }
 document.addEventListener('DOMContentLoaded', LoadPage);