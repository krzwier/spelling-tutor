var synth = window.speechSynthesis;
var utterThis = new SpeechSynthesisUtterance();

var claireList = ["machinery", "ordinary", "scenery", "military", "stationery (as in writing paper)", "stationary, as in not moving"];
var hannahList = ["a", "b", "c", "d", "e", "f", "g"];

var button = document.querySelector("button");
var userName = document.querySelector("input");
var landing = document.querySelector(".landing")
var entryText = document.querySelector(".entry p");
var entry = document.querySelector(".entry");
var yesButton = document.querySelector("#yes");
var noButton = document.querySelector("#no");
var input = document.querySelector("input");
var tsk = document.querySelector(".tsk");
var sad = document.querySelector(".sad");
var quiz = document.querySelector(".quiz");
var entryX = document.querySelector(".entry .modal-x");
var tskX = document.querySelector(".tsk .modal-x");
var sadX = document.querySelector(".sad .modal-x");
var quizX = document.querySelector(".quiz .modal-x");





button.addEventListener("click", function () {
    checkUser(userName.value);
});

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        checkUser(userName.value);
    }
});


var checkUser = function (name) {
    if (name === "Josh" || name === "Joshua" || name === "Claire" || name === "Ben" || name === "Benjamin" || name === "Hannah") {
        // console.log("Made it to checkUser function!");
        welcome(name);
    } else {
        noWelcome(name);

    }
};

var speak = function (message) {
    synth.cancel();
    utterThis = new SpeechSynthesisUtterance(message);
    synth.speak(utterThis);
};

var welcome = function (name) {

    // console.log("made it to welcome function!");
    entryText.innerHTML = `Welcome, ${name}! <br> Are you ready to spell?`;
    landing.classList.add("hide");
    entry.classList.remove("hide");
    speak(`Welcome, ${name}! Are you ready to spell?`);
}

var noWelcome = function (name) {

    // console.log("made it to welcome function!");
    landing.classList.add("hide");
    sad.classList.remove("hide");
    speak(`Sorry, I don't recognize you, ${name}. I'm only allowed to tutor Claire, Josh, Ben, and Hannah in spelling. Too bad for you. You're really missing out on a spectacular spelling list.`);
}

noButton.addEventListener("click", function () {
    entry.classList.add("hide");
    tsk.classList.remove("hide");
    speak(`Well, you'd better get ready, because your mama told me that you need to practice your spelling! How about you pick a different answer?`);

});

yesButton.addEventListener("click", function (name) {
    speak(`Awesome! I have a super list for you!`);
    entry.classList.add("hide");
    quiz.classList.remove("hide");
});

tskX.addEventListener("click", function () {

    tsk.classList.add("hide");
    entry.classList.remove("hide");

    synth.cancel();
});

entryX.addEventListener("click", function () {

    entry.classList.add("hide");
    landing.classList.remove("hide");

    synth.cancel();
});

sadX.addEventListener("click", function () {

    sad.classList.add("hide");
    landing.classList.remove("hide");

    synth.cancel();
});




