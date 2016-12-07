function Menu() {
	first_body = document.querySelector('body').innerHTML;
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
		div.innerHTML = 'Baton';
	else if (name == 2) {
		div.innerHTML = 'Ocarina';
	}
	else if (name == 3) {
		div.innerHTML = 'Harp';
	}
}

function choose_ocarina() {
	var audio = new Audio('ressources/TP_SaveMenu_SlotSelect.wav');
	audio.play();
	var body = document.querySelector('body');
	body.innerHTML = '<div class="you_choose"><span id="you_have_chosen">You have chosen the Ocarina</span><div id="navi" onclick="ocarina()"><img id="navi_img" src="ressources/navi.png"><span>Continue</span></div></div>';
}

function choose_harp() {
	var audio = new Audio('ressources/TP_SaveMenu_SlotSelect.wav');
	audio.play();
	var body = document.querySelector('body');
	body.innerHTML = '<div class="you_choose"><span id="you_have_chosen">You have chosen the Harp</span><div id="navi" onclick="harp()"><img id="navi_img" src="ressources/navi.png"><span>Continue</span></div></div>';
}

function choose_wand() {
	var audio = new Audio('ressources/TP_SaveMenu_SlotSelect.wav');
	audio.play();
	var body = document.querySelector('body');
	body.innerHTML = '<div class="you_choose"><span id="you_have_chosen">You have chosen the Baton</span><div id="navi" onclick="wand()"><img id="navi_img" src="ressources/navi.png"><span>Continue</span></div></div>';
}

function ocarina() {
	var audio = new Audio('ressources/TP_SaveMenu_SlotSelect.wav');
	audio.play();
	var body = document.querySelector('body');
	body.innerHTML = '<div class="you_choose">' + 
	'<div class="gamescreen" id="gamescreen">' + 
	'</div>' + 
	'<div class="navbar">' + 
	'<div id="navbar_sheets"><span onclick="display_sheets_ocarina()">Sheets</span></div>' + 
	'<div id="quit"><span onclick="quit()">Return to title screen</span></div>' + 
	'</div>' + 
	'</div>';
}

function wand() {
	var audio = new Audio('ressources/TP_SaveMenu_SlotSelect.wav');
	audio.play();
	var body = document.querySelector('body');
	body.innerHTML = '<div class="you_choose">' + 
	'<div class="gamescreen" id="gamescreen">' + 
	'</div>' + 
	'<div class="navbar">' + 
	'<div id="navbar_sheets"><span onclick="display_sheets_wand()">Sheets</span></div>' + 
	'<div id="quit"><span onclick="quit()">Return to title screen</span></div>' + 
	'</div>' + 
	'</div>';
}

function harp() {
	var audio = new Audio('ressources/TP_SaveMenu_SlotSelect.wav');
	audio.play();
	var body = document.querySelector('body');
	body.innerHTML = '<div class="you_choose">' + 
	'<div class="gamescreen" id="gamescreen">' + 
	'</div>' + 
	'<div class="navbar">' + 
	'<div id="navbar_sheets"><span onclick="display_sheets_harp()">Sheets</span></div>' + 
	'<div id="quit"><span onclick="quit()">Return to title screen</span></div>' + 
	'</div>' + 
	'</div>';
}

function quit() {
	var span = document.getElementById('quit');
	span.outerHTML = '<div id="quit"><span>Return to title screen</span></div>';
	var audio = new Audio('ressources/TP_SaveMenu_Continue_No.wav');
	audio.play();
	setTimeout(function() { restore(); }, 1000);
}

function restore() {
	var body = document.querySelector('body');
	body.innerHTML = first_body;
}

function display_sheets_ocarina() {
	var audio = new Audio('ressources/TP_SaveMenu_SlotSelect.wav');
	audio.play();
	var screen = document.getElementById('gamescreen');
	screen.innerHTML = '<img id="sheets" src="ressources/sheets.jpg">';
	var navbar = document.getElementById('navbar_sheets');
	navbar.innerHTML = '<div id="navbar_sheets"><span onclick="ocarina()">Return</span></div>';
}

function display_sheets_wand() {

}

function display_sheets_harp() {

}