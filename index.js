aactivate_triforce = 0;
function Menu() {
	if (aactivate_triforce == 0) {
	   	$("#triforce-left").animate({left: '-=10%'});
	   	$("#triforce-right").animate({left: '+=10%'});
	   	var audio = new Audio('ressources/secret.wav');
		audio.play();
		aactivate_triforce = 1;
		var button = document.getElementById('div_button');
		button.innerHTML = "";
		setTimeout(displayMenu, 500);
	}
	else if (aactivate_triforce == 1)
	{
   		$("#triforce-left").animate({left: '+=10%'});
   		$("#triforce-right").animate({left: '-=10%'});
		aactivate_triforce = 0;
	}
}

function displayMenu() {
	var Menu = document.getElementById('contain_menu')
	menu = document.createElement('div');
	menu.id = 'menu';
	Menu.appendChild(menu);
	var Ocarina = 'Ocarina';
	var Harpe = 'Harpe';
	var Baguette = 'Baguette';
	menu.innerHTML = '<div class="instrument_div" id="instrument_div_left"><img id="wand" src="ressources/wand.png" onmouseover="nameInstrument(1)" onclick="choose_wand()"></div>' + 
	'<div class="instrument_div" id="instrument_div_middle"><h3 id="nameInstrument"></h3><img id="ocarina" src="ressources/ocarina.png" onmouseover="nameInstrument(2)" onclick="choose_ocarina()"></div>' +
	'<div class="instrument_div" id="instrument_div_right"><img id="harp" src="ressources/harp.png" onmouseover="nameInstrument(3)" onclick="choose_harp()"></div>';
}

function nameInstrument(name) {
	var div = document.getElementById('nameInstrument');
	if (name == 1)
		div.innerHTML = 'Baguette';
	else if (name == 2) {
		div.innerHTML = 'Ocarina';
	}
	else if (name == 3) {
		div.innerHTML = 'Harpe';
	}
}

function choose_ocarina() {
	console.log('You choose Ocarina');
	var body = document.querySelector('body');
	body.innerHTML = '<div class="you_choose">You have chosen the Ocarina<div id="navi"><img id="ressources/navi_img" src="ressources/navi.jpeg"><span>Continue<span></div></div>';
}
	console.log('You choose Harp');

function choose_harp() {
	var body = document.querySelector('body');
	body.innerHTML = '<div class="you_choose">You have chosen the Harp</div>';
}

function choose_wand() {
	console.log('You choose Wand');
	var body = document.querySelector('body');
	body.innerHTML = '<div class="you_choose">You have chosen the Wand</div>';
}