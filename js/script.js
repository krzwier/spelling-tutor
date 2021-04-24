/* SPELLING LISTS */

var claireList =
    ["machinery",
        "ordinary",
        "scenery",
        "military",
        "stationery (as in writing paper)",
        "stationary, as in not moving"];

var hannahList = ["a", "b", "c", "d", "e", "f", "g"];

var benList = 
    ["traffic",
    "panic",
    "frantic",
    "stomach",
    "nickel",
    "pickle",
    "buckle",
    "picnic"];

var joshList = benList;


/* GLOBAL VARIABLES AND FUNCTIONS */

var synth = window.speechSynthesis;
var utterThis = new SpeechSynthesisUtterance();
var user = "user";
var userPretty = "User";
var list = [];

var speak = function (message) {
    synth.cancel();
    utterThis = new SpeechSynthesisUtterance(message);
    synth.speak(utterThis);
};

var prettify = function (s) {
    return s.charAt(0).toUpperCase() + s.toLowerCase().slice(1);
}


/* -----------------------------------------------
/* LANDING PAGE
/* (+ related variables and functions)
/* ----------------------------------------------- */

var landingButton = document.querySelector("button");
var userName = document.querySelector("input");
var landing = document.querySelector(".landing");
var input = document.querySelector("input");
var numWords = document.querySelector("#num-words");

landingButton.addEventListener("click", function () {
    user = userName.value.toUpperCase();
    userPretty = prettify(userName.value);
    checkUser();
});

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        user = userName.value.toUpperCase();
        userPretty = prettify(userName.value);
        checkUser();
    }
});

var checkUser = function () {
    if (user === "JOSH" || user === "JOSHUA" || user === "CLAIRE" || user === "BEN" || user === "BENJAMIN" || user === "BENJIE" || user === "HANNAH") {
        console.log("Made it to checkUser function!");
        welcome();
        
    } else {
        noWelcome();

    }
};

var welcome = function () {

    // console.log("made it to welcome function!");
    entryTitle.innerHTML = `Welcome, ${userPretty}!`;
    landing.classList.add("hide");
    entry.classList.remove("hide");
    speak(`Welcome, ${user}! Are you ready to spell?`);
}

var noWelcome = function () {

    // console.log("made it to welcome function!");
    landing.classList.add("hide");
    sad.classList.remove("hide");
    speak(`Sorry, I don't recognize you, ${user}. I'm only allowed to tutor Claire, Josh, Ben, and Hannah in spelling. Too bad for you. You're really missing out on a spectacular spelling list.`);
}


/* -----------------------------------------------
/* SAD PAGE 
/* reached when name not recognized
/* ----------------------------------------------- */

var sad = document.querySelector(".sad");
var sadX = document.querySelector(".sad .modal-x");

sadX.addEventListener("click", function () {
    sad.classList.add("hide");
    landing.classList.remove("hide");
    synth.cancel();
});


/* -----------------------------------------------
/* ENTRY PAGE 
/* reached when name on landing page is recognized
/* ----------------------------------------------- */

var entry = document.querySelector(".entry");
var entryX = document.querySelector(".entry .modal-x");
var entryTitle = document.querySelector(".entry h1");
var yesButton = document.querySelector("#yes");
var noButton = document.querySelector("#no");

noButton.addEventListener("click", function () {
    entry.classList.add("hide");
    tsk.classList.remove("hide");
    speak(`Well, you'd better get ready, because your mama told me that you need to practice your spelling! How about you pick a different answer?`);

});

yesButton.addEventListener("click", function (name) {
    entry.classList.add("hide");
    quiz.classList.remove("hide");
    quizTitle.innerText = `${userPretty}'s Spelling Quiz`;
    getList();
    numWords.innerText = `Word 1 of ${list.length}`;
    speak(`Awesome! I have a super list for you! Your first word is ${list[0]}.`);
});

entryX.addEventListener("click", function () {
    entry.classList.add("hide");
    landing.classList.remove("hide");
    synth.cancel();
});

var getList = function () {
    if (user === "CLAIRE") {
        list = claireList;
    } else if (user === "JOSHUA" || user === "JOSH") {
        list = joshList;
    } else if (user === "BENJAMIN" || user === "BENJIE" || user === "BEN"){
        list = benList;
    } else if (user === "HANNAH") {
        list = hannahList;
    } else {
        console.log("No list to match user!");
    }
}

/* -----------------------------------------------
/* TSK PAGE 
/* reached when user answers "NO" on entry page
/* ----------------------------------------------- */

var tsk = document.querySelector(".tsk");
var tskX = document.querySelector(".tsk .modal-x");

tskX.addEventListener("click", function () {
    tsk.classList.add("hide");
    entry.classList.remove("hide");
    synth.cancel();
});


/* -----------------------------------------------
/* QUIZ PAGE 
/* reached when user answers "YES" on entry page
/* ----------------------------------------------- */

var quiz = document.querySelector(".quiz");
var quizX = document.querySelector(".quiz .modal-x");
var quizTitle = document.querySelector(".quiz h1");
var repeat = document.querySelector("#speak-button");
var wordNum = 0;

quizX.addEventListener("click", function () {
    speak("Are you sure you want to leave your quiz?");
    please.classList.remove("hide");
});

repeat.addEventListener("click", function() {
    speak(list[wordNum]);
});






/* -----------------------------------------------
/* PLEASE POP-UP 
/* opens when user tries to close quiz before finishing
/* ----------------------------------------------- */

var please = document.querySelector(".please");






















