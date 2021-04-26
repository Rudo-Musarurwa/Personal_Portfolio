function RandomLottery(){
    var i = 0
    var LottoNumber = this.parentNode.getElementsByTagName('td');

    for(var i=0; i<50; i++){
        var randomNumber = Math.ceil(Math.random()*49);
        LottoNumber[i].firstChild.nodeValue = randomNumber;
    }
 
}

function LoadPage(){
   var button = document.getElementsByTagName('button');
   for(var i = 0; i < 4; i++){
     button[i].addEventListener('click', RandomLottery);
   }
}
document.addEventListener('DOMContentLoaded', LoadPage);