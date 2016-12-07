function Menu() {
   	$("#triforce-left").animate({left: '-=10%'});
   	$("#triforce-right").animate({left: '+=10%'});
   	var audio = new Audio('ressources/secret.wav');
	audio.play();

	setTimeout(displayMenu, 500);
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
	var audio = new Audio('ressources/TP_PauseMenu_Cursor1.wav');
	audio.play();
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
	var audio = new Audio('ressources/TP_SaveMenu_SlotSelect.wav');
	audio.play();
	var body = document.querySelector('body');
	body.innerHTML = '<div class="you_choose" onclick="ocarina()">You have chosen the Ocarina<div id="navi"><img id="navi_img" src="ressources/navi.png"><span>Continue<span></div></div>';
}

function choose_harp() {
	var audio = new Audio('ressources/TP_SaveMenu_SlotSelect.wav');
	audio.play();
	var body = document.querySelector('body');
	body.innerHTML = '<div class="you_choose" onclick="harp()">You have chosen the Harp<div id="navi"><img id="navi_img" src="ressources/navi.png"><span>Continue<span></div></div>';
}

function choose_wand() {
	var audio = new Audio('ressources/TP_SaveMenu_SlotSelect.wav');
	audio.play();
	var body = document.querySelector('body');
	body.innerHTML = '<div class="you_choose" onclick="wand()">You have chosen the Wand<div id="navi"><img id="navi_img" src="ressources/navi.png"><span>Continue<span></div></div>';
}

function ocarina() {
	var audio = new Audio('ressources/TP_SaveMenu_SlotSelect.wav');
	audio.play();
	console.log('Ocarina');
	var body = document.querySelector('body');
	body.innerHTML = '<div class="you_choose">' +
	'<span onclick="window.location.reload()">Revenir au menu de départ</span>' + 
	'</div>';
}

function wand() {
	var audio = new Audio('ressources/TP_SaveMenu_SlotSelect.wav');
	audio.play();
	console.log('Wand');
}

function harp() {
	var audio = new Audio('ressources/TP_SaveMenu_SlotSelect.wav');
	audio.play();
	console.log('Harp');
}