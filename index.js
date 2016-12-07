//Menus

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

function quit() {
    window.removeEventListener("keydown", play_ocarina);
    var span = document.getElementById('quit');
    span.outerHTML = '<div id="quit"><span>Return to title screen</span></div>';
    var audio = new Audio('ressources/TP_SaveMenu_Continue_No.wav');
    audio.play();
    setTimeout(function () {
        restore();
    }, 1000);
}

function restore() {
    var body = document.querySelector('body');
    body.innerHTML = first_body;
}

function display_sheets_ocarina() {
    window.removeEventListener("keydown", play_ocarina);
    var audio = new Audio('ressources/TP_SaveMenu_SlotSelect.wav');
    audio.play();
    var screen = document.getElementById('gamescreen');
    screen.innerHTML = '<img id="sheets" src="ressources/ocarina_sheets.jpg">';
    var navbar = document.getElementById('navbar_sheets');
    navbar.innerHTML = '<div id="navbar_sheets"><span onclick="ocarina()">Return</span></div>';
}

function display_sheets_wand() {

}

function display_sheets_harp() {

}

//Instruments

function ocarina() {
    var audio = new Audio('ressources/TP_SaveMenu_SlotSelect.wav');
    audio.play();
    var body = document.querySelector('body');
    body.innerHTML = '<div class="you_choose">' +
        '<div class="gamescreen" id="gamescreen">' +
        '<div class="ocarina_staff_div">' +
        '<img class="ocarina_staff" src="ressources/ocarina_staff.png">' +
        '</div>' +
        '</div>' +
        '<div class="navbar">' +
        '<div id="navbar_sheets"><span onclick="display_sheets_ocarina()">Sheets</span></div>' +
        '<div id="quit"><span onclick="quit()">Return to title screen</span></div>' +
        '</div>' +
        '</div>' +
        '<div><button onclick="reset()">Reset</button></div>';
    i = 0;
    song = [];
    window.addEventListener("keydown", play_ocarina);
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

function play_ocarina(event) {
    if (event.defaultPrevented) {
        return;
    }
    switch (event.key) {
        case "ArrowDown":
            var audio = new Audio('ressources/OOT_Notes_Ocarina_Down.wav');
            audio.play();
            song[i] = "down";
            i++;
            console.log("down");
            test_song();
            break;
        case "ArrowUp":
            var audio = new Audio('ressources/OOT_Notes_Ocarina_Up.wav');
            audio.play();
            song[i] = "up";
            i++;
            console.log("up");
            test_song();
            break;
        case "ArrowLeft":
            var audio = new Audio('ressources/OOT_Notes_Ocarina_Left.wav');
            audio.play();
            song[i] = "left";
            i++;
            console.log("left");
            test_song();
            break;
        case "ArrowRight":
            var audio = new Audio('ressources/OOT_Notes_Ocarina_Right.wav');
            audio.play();
            song[i] = "right";
            i++;
            console.log("right");
            test_song();
            break;
        case " ":
            var audio = new Audio('ressources/OOT_Notes_Ocarina_A.wav');
            audio.play();
            song[i] = "a";
            i++;
            console.log("a");
            test_song();
            break;
        default:
            break;
    }
    event.preventDefault();
}

function test_song() {
    if (song[0] == "down" && song[1] == "right" && song[2] == "left" &&
        song[3] == "down" && song[4] == "right" && song[5] == "left" && i == 6)
    {
        var audio = new Audio('ressources/z5_ChantSaria.mp3');
        audio.play();
        console.log("Saria's song");
    }
    else if (song[0] == "left" && song[1] == "up" && song[2] == "right" && 
        song[3] == "left" && song[4] == "up" && song[5] == "right" && i == 6)
    {
        var audio = new Audio('ressources/z5_BerceuseZelda.mp3');
        audio.play();
        console.log("Zelda's Lullaby");
    }
    else if (song[0] == "right" && song[1] == "down" && song[2] == "up" && 
        song[3] == "right" && song[4] == "down" && song[5] == "up" && i == 6)
    {
        var audio = new Audio('ressources/z5_ChantSoleil.mp3');
        audio.play();
        console.log("Sun's Song");
    }
    else if (song[0] == "a" && song[1] == "down" && song[2] == "up" && 
        song[3] == "a" && song[4] == "down" && song[5] == "up" && i == 6)
    {
        var audio = new Audio('ressources/z5_ChantTempetes.mp3');
        audio.play();
        console.log("Song of Storms");
    }
    else if (song[0] == "right" && song[1] == "a" && song[2] == "down" && 
        song[3] == "right" && song[4] == "a" && song[5] == "down" && i == 6)
    {
        var audio = new Audio('ressources/z5_ChantTemps.mp3');
        audio.play();
        console.log("Song of Time");
    }
    else if (song[0] == "up" && song[1] == "left" && song[2] == "right" && 
        song[3] == "up" && song[4] == "left" && song[5] == "right" && i == 6)
    {
        var audio = new Audio('ressources/z5_ChantEpona.mp3');
        audio.play();
        console.log("Epona's Song");
    }
    if (i > 5)
        i = 0;
}

function reset() {
    i = 0;
    console.log('Reset !');
}