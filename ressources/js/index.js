//Menus

function displayMenu() {
    var menu = document.createElement("div");
    menu.id = "menu";
    $("#contain_menu").append(menu);
    menu.innerHTML = "<div class=\"instrument_div\" id=\"instrument_div_left\"><img id=\"wand\" src=\"ressources/img/wand.png\" onmouseover=\"nameInstrument(1)\" onclick=\"choose_wand()\"></div>" +
        "<div class=\"instrument_div\" id=\"instrument_div_middle\"><h3 id=\"nameInstrument\"></h3><img id=\"ocarina\" src=\"ressources/img/ocarina.png\" onmouseover=\"nameInstrument(2)\" onclick=\"choose_ocarina()\"></div>" +
        "<div class=\"instrument_div\" id=\"instrument_div_right\"><img id=\"harp\" src=\"ressources/img/harp.png\" onmouseover=\"nameInstrument(3)\" onclick=\"choose_harp()\"></div>";
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
    if (song[0] === "Down" && song[1] === "Right" && song[2] === "Left" &&
        song[3] === "Down" && song[4] === "Right" && song[5] === "Left" && i === 6) {
        var audio = new Audio("ressources/audio/z5_ChantSaria.mp3");
        audio.play();
    }
    else if (song[0] === "Left" && song[1] === "Up" && song[2] === "Right" &&
        song[3] === "Left" && song[4] === "Up" && song[5] === "Right" && i === 6) {
        var audio = new Audio("ressources/audio/z5_BerceuseZelda.mp3");
        audio.play();
    }
    else if (song[0] === "Right" && song[1] === "Down" && song[2] === "Up" &&
        song[3] === "Right" && song[4] === "Down" && song[5] === "Up" && i === 6) {
        var audio = new Audio("ressources/audio/z5_ChantSoleil.mp3");
        audio.play();
    }
    else if (song[0] === "A" && song[1] === "Down" && song[2] === "Up" &&
        song[3] === "A" && song[4] === "Down" && song[5] === "Up" && i === 6) {
        var audio = new Audio("ressources/audio/z5_ChantTempetes.mp3");
        audio.play();
    }
    else if (song[0] === "Right" && song[1] === "A" && song[2] === "Down" &&
        song[3] === "Right" && song[4] === "A" && song[5] === "Down" && i === 6) {
        var audio = new Audio("ressources/audio/z5_ChantTemps.mp3");
        audio.play();
    }
    else if (song[0] === "Up" && song[1] === "Left" && song[2] === "Right" &&
        song[3] === "Up" && song[4] === "Left" && song[5] === "Right" && i === 6) {
        var audio = new Audio("ressources/audio/z5_ChantEpona.mp3");
        audio.play();
    }
    if (i > 5) {
        i = 0;
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
}