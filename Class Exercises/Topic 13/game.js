var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;
var lastPressed = false;

function myKeyUp(event){
    var player = document.getElementById('player');
    if (event.keyCode == 37){
        leftPressed = false;
        lastPressed = 'left'; 
    }

    if (event.keyCode == 39){
        rightPressed = false;
        lastPressed = 'right';
    }

    if (event.keyCode == 38){
        upPressed = false; 
        lastPressed = 'up'; 
    }

    if (event.keyCode == 40){
        downPressed = false;
        lastPressed = 'down';
    }

    player.className = 'character stand ' + lastPressed;
}

function moveInterval(){
    var player = document.getElementById('player');
    var leftMove = player.offsetLeft;
    var upMove = player.offsetTop;

    if(leftPressed == true){
        newLeft = leftMove - 1;
        var element = document.elementFromPoint(newLeft, player.offsetTop);
        if(element.classList.contains('solid') == false){
           player.style.left = newLeft + 'px';
        }
        player.className = 'character walk left';
    }

    if(rightPressed == true){
        newLeft = leftMove + 1;
        var element = document.elementFromPoint(newLeft+32, player.offsetTop);
        
        if (element.classList.contains('solid') == false){
            player.style.left = newLeft + 'px';
        }
        
        player.className = 'character walk right';
    }

    if(upPressed == true){
        var newTop = upMove - 1;
        var element = document.elementFromPoint(player.offsetLeft, newTop);
   
        if (element.classList.contains('solid') == false){
            player.style.top = newTop + 'px';
        }
        if (leftPressed == false){
            if (rightPressed == false){
                player.className = 'character walk up';
            }
        }
    }

    if(downPressed){
        var newTop = upMove + 1;
        var element = document.elementFromPoint(player.offsetLeft, newTop+32);
        
        if (element.classList.contains('solid') == false){
            player.style.top = newTop + 'px';
        }
        if (leftPressed == false){
            if (rightPressed == false){
                player.className = 'character walk down';
            }
        }
    }
}



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

 function movehead(){
    var head = document.getElementsByClassName('head');
    head[0].style.backgroundImage = 'url(images/'+this.id+'.png)';
 }

 function movebody(){
    var body = document.getElementsByClassName('body');
    body[0].style.backgroundImage = 'url(images/'+this.id+'.png)';
 }

 
 function myLoadEvent(){
    var elements = document.getElementsByTagName('li');
     elements[0].addEventListener('click', clickhead);
     elements[1].addEventListener('click', clickhead);
     elements[2].addEventListener('click', clickhead);
     elements[3].addEventListener('click', clickhead);
     elements[4].addEventListener('click', clickhead);
     elements[5].addEventListener('click', movebody);
     elements[6].addEventListener('click', movebody);
     elements[7].addEventListener('click', movebody);
     elements[8].addEventListener('click', movebody);
     elements[9].addEventListener('click', movebody);
    
    document.addEventListener('keydown', myKeyDown);
    document.addEventListener('keyup', myKeyUp); 
    timer = setInterval(moveInterval, 10);

 }

document.addEventListener('DOMContentLoaded', myLoadEvent);