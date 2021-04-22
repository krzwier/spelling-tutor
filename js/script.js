var synth = window.speechSynthesis;

var button = document.querySelector("button");
var userName = document.querySelector("input");
var p = document.querySelector("p");
var modal = document.querySelector(".modal");
var span = document.querySelector(".modal-x");

button.addEventListener("click", function () {
    if (userName.value === "Josh") {
        welcome(userName.value);
    }
    button.innerText = "You've got this!";
    modal.classList.add("show-modal");
});

span.addEventListener("click", function () {
    button.innerText = "Who's got this?";
    modal.classList.remove("show-modal");
});

var welcome = function (name) {
    p.innerText = `Welcome, ${name}`;
    var utterThis = new SpeechSynthesisUtterance(`Welcome, ${userName.value}!`);
    synth.speak(utterThis);

    
}