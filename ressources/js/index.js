function arraysAreEqual(array1, array2) {
    // if the other array is a falsy value, return
    if (!array2)
        return false;

    // compare lengths - can save a lot of time 
    if (array1.length != array2.length)
        return false;

    for (var i = 0, l = array1.length; i < l; i++) {
        // Check if we have nested arrays
        if (array1[i] instanceof Array && array2[i] instanceof Array) {
            // recurse into the nested arrays
            if (!array1[i].equals(array2[i]))
                return false;
        }
        else if (array1[i] != array2[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
}


//Menus

function displayMenu() {
    $("#contain_menu").append("<div id=\"menu\"><div class=\"instrument_div\" id=\"instrument_div_left\"><img id=\"wand\" src=\"ressources/img/wand.png\" onmouseover=\"nameInstrument(1)\" onclick=\"choose_wand()\"></div>" +
        "<div class=\"instrument_div\" id=\"instrument_div_middle\"><h3 id=\"nameInstrument\"></h3><img id=\"ocarina\" src=\"ressources/img/ocarina.png\" onmouseover=\"nameInstrument(2)\" onclick=\"choose_ocarina()\"></div>" +
        "<div class=\"instrument_div\" id=\"instrument_div_right\"><img id=\"harp\" src=\"ressources/img/harp.png\" onmouseover=\"nameInstrument(3)\" onclick=\"choose_harp()\"></div></div>");
}

function Menu(song) {
    var first_body = $("body").html();
    $("#triforce-left").animate({left: "-=10%"});
    $("#triforce-right").animate({left: "+=10%"});
    var audio = new Audio("ressources/audio/secret.wav");
    audio.play();
    setTimeout(function () {
        displayMenu(song);
    }, 500);
}



function nameInstrument(name) {
    var audio = new Audio("ressources/audio/TP_PauseMenu_Cursor1.wav");
    audio.play();
    var div = $("#nameInstrument");
    switch (name) {
        case 1:
            div.html("Baton");
            break;
        case 2:
            div.html("Ocarina");
            break;
        case 3:
            div.html("Harp");
            break;
    }
}

function choose_ocarina() {
    var audio = new Audio("ressources/audio/TP_SaveMenu_SlotSelect.wav");
    audio.play();
    $("body").html("<div class=\"you_choose\"><span id=\"you_have_chosen\">You have chosen the Ocarina</span><div id=\"navi\" onclick=\"ocarina()\"><img id=\"navi_img\" src=\"ressources/img/navi.png\"><span>Continue</span></div></div>");
}

function choose_harp() {
    var audio = new Audio("ressources/audio/TP_SaveMenu_SlotSelect.wav");
    audio.play();
    $("body").html("<div class=\"you_choose\"><span id=\"you_have_chosen\">You have chosen the Harp</span><div id=\"navi\" onclick=\"harp()\"><img id=\"navi_img\" src=\"ressources/img/navi.png\"><span>Continue</span></div></div>");
}

function choose_wand() {
    var audio = new Audio("ressources/audio/TP_SaveMenu_SlotSelect.wav");
    audio.play();
    $("body").html("<div class=\"you_choose\"><span id=\"you_have_chosen\">You have chosen the Wand</span><div id=\"navi\" onclick=\"wand()\"><img id=\"navi_img\" src=\"ressources/img/navi.png\"><span>Continue</span></div></div>");
}

function restore() {
    $("body").html(first_body);
}

function quit() {
    window.removeEventListener("keydown", play_ocarina);
    var span = document.getElementById("quit");
    $("#quit").html("<span>Return to title screen</span>");
    var audio = new Audio("ressources/audio/TP_SaveMenu_Continue_No.wav");
    audio.play();
    setTimeout(function () {
        restore();
    }, 1000);
}

function display_sheets_ocarina() {
    window.removeEventListener("keydown", play_ocarina);
    var audio = new Audio("ressources/audio/TP_SaveMenu_SlotSelect.wav");
    audio.play();
    $("#gamescreen").html("<img id=\"sheets\" src=\"ressources/img/ocarina_sheets.jpg\">");
    $("#navbar_sheets").html("<div id=\"navbar_sheets\"><span onclick=\"ocarina()\">Return</span></div>");
}

function display_sheets_wand() {
    
}

function display_sheets_harp() {

}

//Instruments

function test_song() {
    var play = false;

    var Saria = ["Down", "Right", "Left", "Down", "Right", "Left"];
    var Zelda = ["Left", "Up", "Right", "Left", "Up", "Right"];
    var Soleil = ["Right", "Down", "Up", "Right", "Down", "Up"];
    var Tempetes = ["A", "Down", "Up", "A", "Down", "Up"];
    var Temps = ["Right", "A", "Down", "Right", "A", "Down"];
    var Epona = ["Up", "Left", "Right", "Up", "Left", "Right"];

    var Menuet = ["A", "Up", "Right", "Left", "Right", "Left"];
    var Bolero = ["Down", "A", "Down", "A", "Right", "Down", "Right", "Down"];
    var Serenade = ["A", "Down", "Right", "Right", "Left"];
    var Nocturne = ["Left", "Right", "Right", "A", "Left", "Right", "Down"];
    var Requiem = ["A", "Down", "A", "Right", "Down", "A"];
    var Apaisement = ["Left", "Right", "Down", "Left", "Right", "Down"];

    switch (true) {
        case arraysAreEqual(song, Saria):
            var audio = new Audio("ressources/audio/z5_ChantSaria.mp3");
            play = true;
            break;
        case arraysAreEqual(song, Zelda):
            var audio = new Audio("ressources/audio/z5_BerceuseZelda.mp3");
            play = true;
            break;
        case arraysAreEqual(song, Soleil):
            var audio = new Audio("ressources/audio/z5_ChantSoleil.mp3");
            play = true;
            break;
        case arraysAreEqual(song, Tempetes):
            var audio = new Audio("ressources/audio/z5_ChantTempetes.mp3");
            play = true;
            break;
        case arraysAreEqual(song, Temps):
            var audio = new Audio("ressources/audio/z5_ChantTemps.mp3");
            play = true;
            break;
        case arraysAreEqual(song, Epona):
            var audio = new Audio("ressources/audio/z5_ChantEpona.mp3");
            play = true;
            break;
        case arraysAreEqual(song, Menuet):
            var audio = new Audio("ressources/audio/z5_MenuetBois.mp3");
            play = true;
            break;
        case arraysAreEqual(song, Bolero):
            var audio = new Audio("ressources/audio/z5_BoleroFeu.mp3");
            play = true;
            break;
        case arraysAreEqual(song, Serenade):
            var audio = new Audio("ressources/audio/z5_SerenadeEau.mp3");
            play = true;
            break;
        case arraysAreEqual(song, Nocturne):
            var audio = new Audio("ressources/audio/z5_NocturneOmbre.mp3");
            play = true;
            break;
        case arraysAreEqual(song, Requiem):
            var audio = new Audio("ressources/audio/z5_Requiem_Esprit.mp3");
            play = true;
            break;
        case arraysAreEqual(song, Apaisement):
            var audio = new Audio("ressources/audio/ChantAppaisement.mp3");
            play = true;
            break;
    }

    console.log(song);
    if (play || i > 7) {
        i = 0;
        song = [];
        if (play) {
            audio.play();
        }
    }
}

function addNoteToArray(string) {
    var audio = new Audio("ressources/audio/OOT_Notes_Ocarina_" + string + ".wav");
    audio.play();
    song[i] = string;
    i++;
    test_song();
}

function play_ocarina(event) {
    if (event.defaultPrevented) {
        return;
    }
    switch (event.key) {
        case "ArrowDown":
            addNoteToArray("Down");
            break;
        case "ArrowUp":
            addNoteToArray("Up");
            break;
        case "ArrowLeft":
            addNoteToArray("Left");
            break;
        case "ArrowRight":
            addNoteToArray("Right");
            break;
        case " ":
            addNoteToArray("A");
            break;
        default:
            break;
    }
    event.preventDefault();
}

function ocarina() {
    var audio = new Audio("ressources/audio/TP_SaveMenu_SlotSelect.wav");
    audio.play();
    $("body").html("<div class=\"you_choose\">" +
        "<div class=\"gamescreen\" id=\"gamescreen\">" +
        "<div class=\"ocarina_staff_div\">" +
        "<img class=\"ocarina_staff\" src=\"ressources/img/ocarina_staff.png\">" +
        "</div>" +
        "</div>" +
        "<div class=\"navbar\">" +
        "<div id=\"navbar_sheets\"><span onclick=\"display_sheets_ocarina()\">Sheets</span></div>" +
        "<div id=\"quit\"><span onclick=\"quit()\">Return to title screen</span></div>" +
        "</div>" +
        "</div>" +
        "<div><button onclick=\"reset()\">Reset</button></div>");
    i = 0;
    song = [];
    window.addEventListener("keydown", play_ocarina);
}

function wand() {
    var audio = new Audio("ressources/audio/TP_SaveMenu_SlotSelect.wav");
    audio.play();
    $("body").html("<div class=\"you_choose\">" +
        "<div class=\"gamescreen\" id=\"gamescreen\">" +
        "</div>" +
        "<div class=\"navbar\">" +
        "<div id=\"navbar_sheets\"><span onclick=\"display_sheets_wand()\">Sheets</span></div>" +
        "<div id=\"quit\"><span onclick=\"quit()\">Return to title screen</span></div>" +
        "</div>" +
        "</div>");
}

function harp() {
    var audio = new Audio("ressources/audio/TP_SaveMenu_SlotSelect.wav");
    audio.play();
    $("body").html("<div class=\"you_choose\">" +
        "<div class=\"gamescreen\" id=\"gamescreen\">" +
        "</div>" +
        "<div class=\"navbar\">" +
        "<div id=\"navbar_sheets\"><span onclick=\"display_sheets_harp()\">Sheets</span></div>" +
        "<div id=\"quit\"><span onclick=\"quit()\">Return to title screen</span></div>" +
        "</div>" +
        "</div>");
}

function reset() {
    i = 0;
    song = [];
}