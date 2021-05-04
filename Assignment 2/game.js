var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;
var lastPressed = false;

function keyup(event) {
	var player = document.getElementById('player');
	if (event.keyCode == 37) {
		leftPressed = false;
		lastPressed = 'left';
	}
	if (event.keyCode == 39) {
		rightPressed = false;
		lastPressed = 'right';
	}
	if (event.keyCode == 38) {
		upPressed = false;
		lastPressed = 'up';
	}
	if (event.keyCode == 40) {
		downPressed = false;
		lastPressed = 'down';
	}

	player.className = 'character stand ' + lastPressed;
}


function move() {
	var player = document.getElementById('player');
	var positionLeft = player.offsetLeft;
	var positionTop = player.offsetTop;
	if (downPressed) {
		var newTop = positionTop+1;

		var element = document.elementFromPoint(player.offsetLeft, newTop+32);
		if (element.classList.contains('sky') == false) {
			player.style.top = newTop + 'px';	
		}

		if (leftPressed == false) {
			if (rightPressed == false) {
				player.className = 'character walk down';
			}
		}
	}
	if (upPressed) {
		var newTop = positionTop-1;

		var element = document.elementFromPoint(player.offsetLeft, newTop);
		if (element.classList.contains('sky') == false) {
			player.style.top = newTop + 'px';	
		}
		
		if (leftPressed == false) {
			if (rightPressed == false) {
				player.className = 'character walk up';
			}
		}
	}
	if (leftPressed) {
		var newLeft = positionLeft-1;

		var element = document.elementFromPoint(newLeft, player.offsetTop);
		if (element.classList.contains('sky') == false) {
			player.style.left = newLeft + 'px';	
		}


		player.className = 'character walk left';
	}
	if (rightPressed) {
		var newLeft = positionLeft+1;
		
		var element = document.elementFromPoint(newLeft+32, player.offsetTop);
		if (element.classList.contains('sky') == false) {
			player.style.left = newLeft + 'px';		
		}
        
		player.className = 'character walk right';
		
	}
}

function keydown(event) {
	if (event.keyCode == 37) {
		leftPressed = true;
	}
	if (event.keyCode == 39) {
		rightPressed = true;
	}
	if (event.keyCode == 38) {
		upPressed = true;
	}
	if (event.keyCode == 40) {
		downPressed = true;
	}
}

function startEvent(){
    this.style.display = 'none';    
    createBomb = setInterval(createBomb, 1000); 
}

//creates the bomb
var bombSpeed = 10;
function createBomb(){
	
    var bomb = document.createElement('div');
    var body = document.getElementsByTagName('body')[0];
	var w = window.innerWidth; //window height
	var h = window.innerHeight;// window width
	var sky = (4/5)*h;
	var randomW = Math.ceil(Math.random()*w);//random width of the screen
    body.appendChild(bomb);
    bomb.classList.add('bomb');//bomb element created 
	bomb.style.left = randomW + 'px';
	//bombs drop
    var bombFall= setInterval(
		function (){
		var downMove = bomb.offsetTop;
		bomb.style.top = downMove + 1 + 'px';
		if(bomb.offsetTop+bomb.offsetHeight > sky){
			clearInterval(bombFall);
			bomb.className = 'explosion';
			var bombRemove = setInterval(
			function(){
			clearInterval(bombRemove);
			body.removeChild(bomb);
			},1000);
			playerDead();
		}
			
	},bombSpeed);
}

function playerDead(){
	var player = document.getElementById('player');
	var positionTop = player.offsetTop;
	var newTop = positionTop + 1;
	var lives = 3;

    var element = document.elementFromPoint(player.offsetLeft, newTop);
    if(element.classList.contains('explosion')==true && lives > 0){
		player.className= 'character hit';
		

	}
}

function myLoadFunction() {
    var start = document.getElementsByClassName('start')[0];
    start.addEventListener('click', startEvent);
    timeout = setInterval(move, 10);
    document.addEventListener('keydown', keydown);
    document.addEventListener('keyup', keyup);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);




