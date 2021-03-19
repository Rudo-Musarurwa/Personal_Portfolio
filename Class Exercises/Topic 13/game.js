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

    player.className = 'character stand' + lastPressed;
}

function moveInterval(){
    var player = document.getElementById('player');
    var leftMove = player.offsetLeft;
    var upMove = player.offsetTop;

    if(leftPressed){
        player.style.left = leftMove - 1 + 'px';
        player.className = 'character walk left';
    }

    if(rightPressed){
        player.style.left = leftMove + 1 + 'px';
        player.className = 'character walk right';
    }

    if(upPressed){
        player.style.top = upMove - 1 + 'px';
        player.className = 'character walk up';
    }

    if(downPressed){
        player.style.top = upMove + 1 + 'px';
        player.className = 'character walk down';
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

 function movehead0(){
    var player = document.getElementById('player');
    player.getElementsByClassName('head')[0].style.backgroundImage = 'url(images/head0.png)';
 }
 function movehead1(){
    var player = document.getElementById('player');
    player.getElementsByClassName('head')[0].style.backgroundImage = 'url(images/head1.png)';
 }
 function movehead2(){
    var player = document.getElementById('player');
    player.getElementsByClassName('head')[0].style.backgroundImage = 'url(images/head2.png)';
 }
 function movehead3(){
    var player = document.getElementById('player');
    player.getElementsByClassName('head')[0].style.backgroundImage = 'url(images/head3.png)';
 }
 function movehead4(){
    var player = document.getElementById('player');
    player.getElementsByClassName('head')[0].style.backgroundImage = 'url(images/head4.png)';
 }

 function movebody0(){
    var player = document.getElementById('player');
    player.getElementsByClassName('body')[0].style.backgroundImage = 'url(images/body0.png)';
 }
 function movebody1(){
    var player = document.getElementById('player');
    player.getElementsByClassName('body')[0].style.backgroundImage = 'url(images/body1.png)';
 }
 function movebody2(){
    var player = document.getElementById('player');
    player.getElementsByClassName('body')[0].style.backgroundImage = 'url(images/body2.png)';
 }
 function movebody3(){
    var player = document.getElementById('player');
    player.getElementsByClassName('body')[0].style.backgroundImage = 'url(images/body3.png)';
 }
 function movebody4(){
    var player = document.getElementById('player');
    player.getElementsByClassName('body')[0].style.backgroundImage = 'url(images/body4.png)';
 }

 function myLoadEvent(){
    var player = document.getElementById('player');

    var head0 = document.getElementById('head0');
    head0.addEventListener('click', movehead0);

    var head1 = document.getElementById('head1');
    head1.addEventListener('click', movehead1);

    var head2 = document.getElementById('head2');
    head2.addEventListener('click', movehead2);

    var head3 = document.getElementById('head3');
    head3.addEventListener('click', movehead3);

    var head4 = document.getElementById('head4');
    head4.addEventListener('click', movehead4);

    var body0 = document.getElementById('body0');
    body0.addEventListener('click', movebody0);

    var body1 = document.getElementById('body1');
    body1.addEventListener('click', movebody1);

    var body2 = document.getElementById('body2');
    body2.addEventListener('click', movebody2);

    var body3 = document.getElementById('body3');
    body3.addEventListener('click', movebody3);

    var body4 = document.getElementById('body4');
    body4.addEventListener('click', movebody4);
    
    document.addEventListener('keydown', myKeyDown);
    document.addEventListener('keyup', myKeyUp); 
    timer = setInterval(moveInterval, 10);

 }
document.addEventListener('DOMContentLoaded', myLoadEvent);