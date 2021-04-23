var synth = window.speechSynthesis;

var claireList = ["machinery", "ordinary", "scenery", "military", "stationery (as in writing paper)", "stationary, as in not moving"];
var hannahList = ["a", "b", "c", "d", "e", "f", "g"];

var button = document.querySelector("button");
var userName = document.querySelector("input");
var landing = document.querySelector(".welcome")
var p = document.querySelector(".quiz p");
var quiz = document.querySelector(".quiz");
var yesButton = document.querySelector("#yes");
var noButton = document.querySelector("#no");
var input = document.querySelector("input");

console.log(button);
console.log(userName);
console.log(p);
console.log(quiz);
console.log(noButton);


button.addEventListener("click", function () {
    checkUser(userName.value);  
});

input.addEventListener("keydown", )


var checkUser = function (name) {
    if (name === "Josh" || name === "Joshua" || name === "Claire" || name === "Ben" || name === "Benjamin" || name === "Hannah") {
        // console.log("Made it to checkUser function!");
        welcome(name);
    } else {
        speak(`Sorry, I don't recognize you, ${name}. I'm only allowed to tutor Claire, Josh, Ben, and Hannah in spelling. Too bad for you. You're really missing out on a spectacular spelling list.`);
    }
};

var speak = function (message) {
    var utterThis = new SpeechSynthesisUtterance(message);
    synth.speak(utterThis);
};

var welcome = function (name) {
    
    // console.log("made it to welcome function!");
    p.innerHTML = `Welcome, ${name}! <br> Are you ready to spell?`;
    toggleModals();
    speak(`Welcome, ${name}! Are you ready to spell?`);
}

var toggleModals = function () {
    if (quiz.classList.contains("hide")) {
        landing.classList.add("hide");
        quiz.classList.remove("hide");
    } else {
        landing.classList.remove("hide");
        quiz.classList.add("hide");
    }
}

noButton.addEventListener("click", function () {
    speak(`Well, you'd better get ready, because your mama told me that you need to practice your spelling!`);
});

yesButton.addEventListener("click", function () {
    speak(`Awesome! I have a super list for you!`);
    yesButton.classList.add("hide");
    noButton.classList.add("hide");
});