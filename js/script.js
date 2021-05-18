/* SPELLING LISTS */

const claireList = [
    "invent",
    "invention",
    "magic",
    "magician",
    "digest",
    "digestion",
    "suggest",
    "suggestion",
    "adopt",
    "adoption",
    "insert",
    "insertion",
    "desert",
    "desertion",
    "electric",
    "eletrician",
    "prevent",
    "prevention",
    "music",
    "musician",
    "clinic",
    "clinician",
    "distort",
    "distortion"
];

const claireReadingList = [
    "invent. She will invent a fantastic machine.",
    "invention. The lightbulb was Thomas Edison's invention.",
    "magic. The rabbit disappeared like magic.",
    "magician. The magician pulled a rabbit out of a hat.",
    "digest. Dogs do not digest fruit well.",
    "digestion. Fiber aids in digestion.",
    "suggest. I suggest that you work on your homework.",
    "suggestion. He gave me a suggestion that helped me.",
    "adopt. The couple is about to adopt a young boy.",
    "adoption. Many dogs are up for adoption at the animal shelter.",
    "insert. Please insert your credit card.",
    "insertion. The writer made a last-minute insertion in the speech.",
    "desert. Please don't desert me!",
    "desertion. That soldier is charged with desertion of his post.",
    "electric. It's electric. Boogie woogie woogie.",
    "eletrician. The electrician's name was Jeffery.",
    "prevent. The fence will prevent the chickens from escaping.",
    "prevention. Masks can aide in the prevention of disease transmission.",
    "music. I love to listen to banjo music.",
    "musician. Hannah is an aspiring musician.",
    "clinic. I went to the clinic to see a doctor.",
    "clinician. The clinician gave her the results of her blood test.",
    "distort. Don't distort the truth!",
    "distortion. President Trump was frequently responsible for the distortion of information."
];

const hannahList = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];

benList = [
    "supercalifragilisticexpialidocious"
];

benReadingList = [
    "supercalifragilisticexpialidocious"
];

joshList = [
    "supercalifragilisticexpialidocious"
];

joshReadingList = [
    "supercalifragilisticexpialidocious"
];

// const benList = [
//     "care",
//     "hair",
//     "part",
//     "fair",
//     "start",
//     "harm",
//     "rare",
//     "chair",
//     "spare",
//     "sharp",
//     "pair",
//     "stare",
//     "chart",
//     "dark",
//     "square",
//     "hare",
//     "pear",
//     "heart",
//     "shark",
//     "fare",
//     "bear",
//     "stair",
//     "bare"
// ];

// const benReadingList = [
//     "care",
//     "hair. I have hair on my head.",
//     "part",
//     "fair. The rules of the game were fair.",
//     "start",
//     "harm",
//     "rare",
//     "chair",
//     "spare",
//     "sharp",
//     "pair. I have a great pair of shoes.",
//     "stare. It makes me uncomfortable when you stare.",
//     "chart",
//     "dark",
//     "square",
//     "hare. There was a race between the tortoise and the hare.",
//     "pear. I'd love to eat a pear.",
//     "heart",
//     "shark",
//     "fare. Please pay the fare before passing through the gate.",
//     "bear. I was walking through the woods and I saw a bear!",
//     "stair. You need to go up the stair and then turn right.",
//     "bare. After I shaved my head, it was bare!"
// ];

// const joshList = [
//     "castle",
//     "design",
//     "wrinkle",
//     "honest",
//     "through",
//     "knuckle",
//     "bought",
//     "whistle",
//     "honor",
//     "moisten",
//     "resign",
//     "wrestle",
//     "rhyme",
//     "listen",
//     "thought",
//     "often",
//     "brought",
//     "knowledge",
//     "wreckage",
//     "soften",
//     "rhythm",
//     "assign",
//     "though",
//     "answer"
// ];

// const joshReadingList = [
//     "castle. The queen lives in a castle.",
//     "design. You drew a beautiful design.",
//     "wrinkle. Paisley's forehead has a wrinkle or two.",
//     "honest. Please be honest in answering my questions.",
//     "through. The car drove through the tunnel.",
//     "knuckle. He scraped his knuckle on the wood.",
//     "bought. I bought 5 gallons of milk today.",
//     "whistle. If you whistle, Paisley will come to you.",
//     "honor. Honor your father and your mother.",
//     "moisten. You may need to moisten the stamp to get it to stick.",
//     "resign. It is possible for a president to resign.",
//     "wrestle. You and Ben love to wrestle.",
//     "rhyme. Every line of the poem is a rhyme.",
//     "listen. Make sure to listen closely to the instructions.",
//     "thought. He thought about her idea.",
//     "often. Make sure to study your spelling often!",
//     "brought. You brought your backpack with you to school today.",
//     "knowledge. Every day your knowledge grows!",
//     "wreckage. They were searching for the wreckage of the Titanic.",
//     "soften. You must kneed the dough to soften it.",
//     "rhythm. She beat a rhythm on the drum.",
//     "assign. Your teacher will assign you homework in third grade.",
//     "though. Even though it is cold outside, we are going to the park.",
//     "answer.  Do you have an answer for my question?"
// ];


/* GLOBAL VARIABLES AND FUNCTIONS */



let user = "user";
let userPretty = "User";

let list = [];
let readingList = [];

const prettify = function (s) {
    return s.charAt(0).toUpperCase() + s.toLowerCase().slice(1);
}


/* -----------------------------------------------
/* LANDING PAGE
/* (+ related variables and functions)
/* ----------------------------------------------- */

const landingButton = document.querySelector("#submit-name");
const settingsButton = document.querySelector("#speech-settings");
const userName = document.querySelector("input");
const landing = document.querySelector(".landing");
const input = document.querySelector("input");
const numWords = document.querySelector("#num-words");

landingButton.addEventListener("click", function () {
    user = userName.value.toUpperCase();
    userPretty = prettify(userName.value);
    checkUser();
});

settingsButton.addEventListener("click", function () {
    landing.classList.add("hide");
    settings.classList.remove("hide");
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

const noWelcome = async function () {
    await getSadGif();
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

const getSadGif = async function () {
    const jsonFile = await fetch("https://api.giphy.com/v1/gifs/search?api_key=kE4gNhEcUD14788jYqtDlFWJN6Tm5BAw&q=sad&limit=25&offset=0&rating=g&lang=en");
    const list = await jsonFile.json();
    const randomIndex = Math.floor(Math.random() * 25);
    const gifArray = list.data;
    const gif = gifArray[randomIndex];
    const gifURL = gif.images.original.url;
    const sadImg = document.querySelector(".sad img");
    sadImg.src = gifURL;


}


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

noButton.addEventListener("click", async function () {
    await getTskGif();
    entry.classList.add("hide");
    tsk.classList.remove("hide");
    synth.cancel();
    speak(`Well, you'd better get ready, because your mama told me that you need to practice your spelling! How about you pick a different answer?`);

});

yesButton.addEventListener("click", function (name) {
    entry.classList.add("hide");
    quiz.classList.remove("hide");
    synth.cancel();
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
        guess.style.textTransform = "none";
        list = [...claireList];
        readingList = [...claireReadingList];
    } else if (user === "JOSHUA" || user === "JOSH") {
        guess.style.textTransform = "none";
        list = [...joshList];
        readingList = [...joshReadingList];
    } else if (user === "BENJAMIN" || user === "BENJIE" || user === "BEN") {
        guess.style.textTransform = "none";
        list = [...benList];
        readingList = [...benReadingList];
    } else if (user === "HANNAH") {
        guess.style.textTransform = "uppercase";
        list = [...hannahList];
        readingList = [...hannahList];
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

const getTskGif = async function () {
    const jsonFile = await fetch("https://api.giphy.com/v1/gifs/search?api_key=kE4gNhEcUD14788jYqtDlFWJN6Tm5BAw&q=thumbs%20down&limit=25&offset=0&rating=g&lang=en");
    const list = await jsonFile.json();
    const randomIndex = Math.floor(Math.random() * 25);
    const gifArray = list.data;
    const gif = gifArray[randomIndex];
    const gifURL = gif.images.original.url;
    const tskImg = document.querySelector(".tsk img");
    tskImg.src = gifURL;


}


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
const showLetter = document.querySelector(".show-letter");

let currentWord = "default";
let currentSpokenWord = "default";



quizX.addEventListener("click", async function () {
    await getPleaseGif();
    speak("Are you sure you want to leave your quiz?");
    please.classList.remove("hide");
});

const getPleaseGif = async function () {
    const jsonFile = await fetch("https://api.giphy.com/v1/gifs/search?api_key=kE4gNhEcUD14788jYqtDlFWJN6Tm5BAw&q=please%20stay&limit=25&offset=0&rating=g&lang=en");
    const list = await jsonFile.json();
    const randomIndex = Math.floor(Math.random() * 25);
    const gifArray = list.data;
    const gif = gifArray[randomIndex];
    const gifURL = gif.images.original.url;
    const pleaseImg = document.querySelector(".please img");
    pleaseImg.src = gifURL;


}

repeat.addEventListener("click", function () {
    synth.cancel();
    speak(currentSpokenWord);
});

const speakWord = async function () {
    if (user === "HANNAH") {
        if (list.length > 0) {
            getWord();
            speak('Find the letter');
            speak(currentSpokenWord);
            speak('on the keyboard and press it.');
        } else {
            quiz.classList.add("hide");
            await getCongratsGif();
            congrats.classList.remove("hide");
            speak("You've completed your quiz!  Well done!");
        }
    } else {
        if (list.length === totalWords) {
            getWord();
            speak(`Your first word is, ${currentSpokenWord}.`)
        } else if (list.length > 0) {
            getWord();
            speak(`The next word is, ${currentSpokenWord}.`);
        } else {
            quiz.classList.add("hide");
            await getCongratsGif();
            congrats.classList.remove("hide");
            speak("You've completed your quiz!  Well done!");
        }
    }

}

const getCongratsGif = async function () {
    const jsonFile = await fetch("https://api.giphy.com/v1/gifs/search?api_key=kE4gNhEcUD14788jYqtDlFWJN6Tm5BAw&q=celebration&limit=25&offset=0&rating=g&lang=en");
    const list = await jsonFile.json();
    const randomIndex = Math.floor(Math.random() * 25);
    const gifArray = list.data;
    // console.log(list);
    // console.log(gifArray);
    const gif = gifArray[randomIndex];
    const gifURL = gif.images.original.url;
    const congratsImg = document.querySelector(".congrats img");
    congratsImg.src = gifURL;


}

const getWord = function () {
    const randomIndex = Math.floor(Math.random() * list.length);
    const randomWord = list[randomIndex];
    const randomSpokenWord = readingList[randomIndex];
    list.splice(randomIndex, 1);
    readingList.splice(randomIndex, 1);
    currentWord = randomWord;
    currentSpokenWord = randomSpokenWord;
}



submit.addEventListener("click", function () {
    synth.cancel();
    checkGuess();
});

guess.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        synth.cancel();
        checkGuess();
    }
});

const checkGuess = async function () {
    if (user === "HANNAH") {
        if (currentWord === guess.value) {
            speak("Correct!");
            guess.value = "";
            showLetter.textContent = "";
            wordNum++;
            adjustProgress();
            speakWord();
        } else {
            guess.value = "";
            speak("Sorry, that's incorrect.  The letter");
            speak(currentSpokenWord);
            speak("looks like this. Find it on the keyboard and press it!");
            showLetter.textContent = currentWord.toUpperCase();
        }
    } else {
        if (currentWord === guess.value) {
            speak("Correct!");
            guess.value = "";
            wordNum++;
            adjustProgress();
            speakWord();
        } else {
            const spelledOut = currentWord.split("");
            speak(`Sorry, that's incorrect.  The correct spelling of ${currentWord} is ...`);
            const saveRate = voiceRate;
            voiceRate = 0.7;
            for (var letter of spelledOut) {
                speak(letter);
            }
            voiceRate = saveRate;
            speak(`I'll put it back in your list to try again later.`);
            list.push(currentWord);
            readingList.push(currentSpokenWord);
            guess.value = "";
            speakWord();
        }

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
    synth.cancel();
});

noClose.addEventListener("click", function () {
    please.classList.add("hide");
    synth.cancel();
});


/* -----------------------------------------------
/* CONGRATS POP-UP 
/* opens when user successfully finishes quiz
/* ----------------------------------------------- */


const congrats = document.querySelector(".congrats");
const congratsX = document.querySelector(".congrats .modal-x");

congratsX.addEventListener("click", function () {
    congrats.classList.add("hide");
    landing.classList.remove("hide");
    synth.cancel();
});


/* -----------------------------------------------
/* SPEECH SETTINGS WINDOW
/* opens from landing page, allows user to choose voice
/* ----------------------------------------------- */

const settings = document.querySelector('.settings');
const settingsX = document.querySelector('.settings .modal-x');
var inputForm = document.querySelector('form');
var voiceSelect = document.querySelector('select');

var pitch = document.querySelector('#pitch');
var pitchValue = document.querySelector('.pitch-value');
var rate = document.querySelector('#rate');
var rateValue = document.querySelector('.rate-value');
const ok = document.querySelector("#ok");

let voices = [];

const synth = window.speechSynthesis;
let utterThis = new SpeechSynthesisUtterance();
populateVoiceList();
let voiceRate = 1;
let voicePitch = 1;
let voice = voices[0];

const speak = function (message) {
    //synth.cancel();
    utterThis = new SpeechSynthesisUtterance(message);
    utterThis.rate = voiceRate;
    utterThis.pitch = voicePitch;
    utterThis.voice = voice;
    synth.speak(utterThis);
    return utterThis;
};


settingsX.addEventListener("click", function () {
    settings.classList.add("hide");
    landing.classList.remove("hide");
    synth.cancel();
});

function populateVoiceList() {

    voices = synth.getVoices().filter(function (v) {
        if (v.lang.includes("en")) {
            return v;
        }
    });
    var selectedIndex = voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
    voiceSelect.innerHTML = '';
    for (i = 0; i < voices.length; i++) {
        var option = document.createElement('option');
        option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

        if (voices[i].default) {
            option.textContent += ' -- DEFAULT';
        }

        option.setAttribute('data-lang', voices[i].lang);
        option.setAttribute('data-name', voices[i].name);
        voiceSelect.appendChild(option);
    }
    voiceSelect.selectedIndex = selectedIndex;
}

if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}

inputForm.onsubmit = function (event) {
    event.preventDefault();
    makeSpeechSample();

}

const makeSpeechSample = function () {
    synth.cancel();
    var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedOption) {
            voice = voices[i];
            break;
        }
    }
    voicePitch = pitch.value;
    voiceRate = rate.value;

    speak("Would you like me to speak to you in this voice?");
}

pitch.onchange = function () {
    pitchValue.textContent = pitch.value;
}

rate.onchange = function () {
    rateValue.textContent = rate.value;
}

voiceSelect.onchange = function () {
    makeSpeechSample();
}

ok.addEventListener("click", function () {
    settings.classList.add("hide");
    landing.classList.remove("hide");
    synth.cancel();
});


















