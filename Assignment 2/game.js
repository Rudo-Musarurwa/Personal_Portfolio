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
	setInterval(bombfall, 100);
}

function bombfall(){
	var bomb = document.getElementsByClassName('bomb');
	bomb.style.display = 'block';
	var downMove = bomb.offsetTop;
	bomb.style.Top = downMove + 1 + 'px';
	//bombfall();
}

function myLoadFunction() {
	var bomb = document.getElementsByClassName('bomb');
	bomb[0].style.display = 'none';
	var start = document.getElementsByClassName('start');
	start[0].addEventListener('click', startEvent);

	timeout = setInterval(move, 10);
	document.addEventListener('keydown', keydown);
	document.addEventListener('keyup', keyup);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);

//Create bomb
	/*var bomb = document.createElement('div');
	bomb.style.className = 'bomb';
	var body = document.getElementsByTagName('body')[0];
    body.appendChild(bomb);*/

//Create bomb
  /*var body = document.getElementsByTagName('body');
	var bomb = document.createElement('div');
	bomb.style.className = 'bomb';
	body[0].appendChild(bomb);
	var downMove = bomb.offsetTop;
	bomb.style.top = downMove + 1 + 'px';*/

	/*var bomb = document.createElement('div');
	bomb.style.className = 'bomb';

	var body = document.getElementsByTagName('body')[0];
	body.appendChild(bomb);
	
	var downMove = bomb.offsetTop;
	bomb.style.top = downMove + 1 + 'px';*/

	/*random width
	var width = window.innerWidth;
	var randomNum = Math.ceil(Math.random()*width.length);
	for(var i =0; i<width.length; i++){}
	
	function bombfall(){
	var bomb = document.getElementsByClassName('bomb');
	bomb.style.display = 'block';
	var downMove = bomb.offsetTop;
	bomb.style.Top = downMove + 1 + 'px';
	bombfall();
}

'top of bomb variable' = 'bomb variable'.offsetTop;
'top of bomb variable' = 'top of bomb variable' + 'speed variable' + 'px';
'bomb variable'.style.top = 'top of bomb variable' */