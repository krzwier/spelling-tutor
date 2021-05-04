/* SPELLING LISTS */

const claireList = [
    "frighten",
    "capitalize",
    "classify",
    "civilize",
    "straighten",
    "analyze",
    "diversify",
    "symbolize",
    "dampen",
    "sweeten",
    "falsify",
    "idolize",
    "visualize",
    "lengthen",
    "beautify",
    "simplify",
    "energize",
    "purify",
    "harmonize",
    "sharpen",
    "memorize",
    "summarize",
    "apologize",
    "paralyze"];

const hannahList = ["a", "b", "c", "d", "e", "f", "g"];

const benList = [
    "grab",
    "star",
    "frog",
    "fork",
    "scar",
    "corn",
    "crop",
    "track",
    "barn",
    "cord",
    "war",
    "trot",
    "scarf",
    "charm",
    "trap",
    "cram",
    "horn",
    "cork",
    "dart",
    "craft",
    "mark",
    "short",
    "prop",
    "brag"];

const joshList = [
    "squirrel",
    "quiver",
    "squirm",
    "squeaky",
    "question",
    "quaint",
    "quarrel",
    "equal",
    "request",
    "tranquil",
    "sequence",
    "banquet",
    "frequent",
    "sequel",
    "inquire",
    "liquid",
    "antique",
    "technique",
    "conquer",
    "unique",
    "mosque"
];


/* GLOBAL VARIABLES AND FUNCTIONS */

const synth = window.speechSynthesis;
let utterThis = new SpeechSynthesisUtterance();
// utterThis.rate = 0.1;
let user = "user";
let userPretty = "User";
let list = [];

const speak = function (message) {
    //synth.cancel();
    utterThis = new SpeechSynthesisUtterance(message);
    utterThis.rate = 0.9;
    synth.speak(utterThis);
};

const prettify = function (s) {
    return s.charAt(0).toUpperCase() + s.toLowerCase().slice(1);
}


/* -----------------------------------------------
/* LANDING PAGE
/* (+ related variables and functions)
/* ----------------------------------------------- */

const landingButton = document.querySelector("button");
const userName = document.querySelector("input");
const landing = document.querySelector(".landing");
const input = document.querySelector("input");
const numWords = document.querySelector("#num-words");

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

const checkUser = function () {
    if (user === "JOSH" || user === "JOSHUA" || user === "CLAIRE" || user === "BEN" || user === "BENJAMIN" || user === "BENJIE" || user === "HANNAH") {
        welcome();

    } else {
        noWelcome();

    }
};

const welcome = function () {
    userName.value = "";
    entryTitle.innerHTML = `Welcome, ${userPretty}!`;
    landing.classList.add("hide");
    entry.classList.remove("hide");
    speak(`Welcome, ${user}! Are you ready to spell?`);
}

const noWelcome = function () {
    userName.value = "";
    landing.classList.add("hide");
    sad.classList.remove("hide");
    speak(`Sorry, I don't recognize you, ${user}. I'm only allowed to tutor Claire, Josh, Ben, and Hannah in spelling. Too bad for you. You're really missing out on a spectacular spelling list.`);
}


/* -----------------------------------------------
/* SAD PAGE 
/* reached when name not recognized
/* ----------------------------------------------- */

const sad = document.querySelector(".sad");
const sadX = document.querySelector(".sad .modal-x");

sadX.addEventListener("click", function () {
    sad.classList.add("hide");
    landing.classList.remove("hide");
    synth.cancel();
});


/* -----------------------------------------------
/* ENTRY PAGE 
/* reached when name on landing page is recognized
/* ----------------------------------------------- */

const entry = document.querySelector(".entry");
const entryX = document.querySelector(".entry .modal-x");
const entryTitle = document.querySelector(".entry h1");
const yesButton = document.querySelector("#yes");
const noButton = document.querySelector("#no");
let totalWords = 0;
let wordNum = 1;

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
    resetProgress();
    speak(`Awesome! I have a super list for you!`);
    speakWord();
});

entryX.addEventListener("click", function () {
    entry.classList.add("hide");
    landing.classList.remove("hide");
    synth.cancel();
});

const resetProgress = function () {
    wordNum = 1;
    totalWords = list.length;
    meter.style.width = `0`;
    numWords.innerText = `Word ${wordNum} of ${totalWords}`;

};

const getList = function () {
    if (user === "CLAIRE") {
        list = [...claireList];
    } else if (user === "JOSHUA" || user === "JOSH") {
        list = [...joshList];
    } else if (user === "BENJAMIN" || user === "BENJIE" || user === "BEN") {
        list = [...benList];
    } else if (user === "HANNAH") {
        list = [...hannahList];
    } else {
        console.log("No list to match user!");
        return;
    }
        
}

/* -----------------------------------------------
/* TSK PAGE 
/* reached when user answers "NO" on entry page
/* ----------------------------------------------- */

const tsk = document.querySelector(".tsk");
const tskX = document.querySelector(".tsk .modal-x");

tskX.addEventListener("click", function () {
    tsk.classList.add("hide");
    entry.classList.remove("hide");
    synth.cancel();
});


/* -----------------------------------------------
/* QUIZ PAGE 
/* reached when user answers "YES" on entry page
/* ----------------------------------------------- */

const quiz = document.querySelector(".quiz");
const quizX = document.querySelector(".quiz .modal-x");
const quizTitle = document.querySelector(".quiz h1");
const repeat = document.querySelector("#speak-button");
const submit = document.querySelector("#submit-guess");
const guess = document.querySelector("#guess");
const meter = document.querySelector(".meter>span");

let currentWord = "default";



quizX.addEventListener("click", function () {
    speak("Are you sure you want to leave your quiz?");
    please.classList.remove("hide");
});

repeat.addEventListener("click", function () {
    speak(currentWord);
});

const speakWord = function () {
    if (list.length === totalWords) {
        
        currentWord = getWord();
        speak(`Your first word is, ${currentWord}.`)
    } else if (list.length > 0) {
        currentWord = getWord();
        speak(`The next word is, ${currentWord}.`);
    } else {

        speak("You've completed your quiz!  Well done!");
    }

}

const getWord = function () {
    const randomIndex = Math.floor(Math.random() * list.length);
    const randomWord = list[randomIndex];
    list.splice(randomIndex, 1);
    return randomWord;
}

submit.addEventListener("click", function () {
    checkGuess();
});

guess.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        checkGuess();
    }
});

const checkGuess = function () {
    if (currentWord === guess.value) {
        speak("Correct!");
        guess.value = "";
        wordNum++;
        adjustProgress();
        speakWord();
    } else {
        speak("Sorry, that's incorrect.  Try again!");
        speak(`The word is ${currentWord}.`);
    }
}

const adjustProgress = function () {
    if (wordNum <= totalWords) {
        meter.style.width = `${((wordNum - 1) / totalWords) * 100}%`;
        numWords.innerText = `Word ${wordNum} of ${totalWords}`;
    } else {
        meter.style.width = `${((wordNum - 1) / totalWords) * 100}%`;
        numWords.innerText = `All done!`;
    }

};







/* -----------------------------------------------
/* PLEASE POP-UP 
/* opens when user tries to close quiz before finishing
/* ----------------------------------------------- */

const please = document.querySelector(".please");
const yesClose = document.querySelector("#yes-close");
const noClose = document.querySelector("#no-close");

yesClose.addEventListener("click", function () {
    please.classList.add("hide");
    quiz.classList.add("hide");
    landing.classList.remove("hide");
});

noClose.addEventListener("click", function () {
    please.classList.add("hide");
});























