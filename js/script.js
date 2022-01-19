/* SPELLING LISTS */

const claireList = [
   "preposition",
   "submarine",
   "companion",
   "international",
   "percentage",
   "triceratops",
   "universal",
   "triathlon",
   "intramural",
   "biennial"
];

const claireReadingList = [
   "Proper grammar requires that you never end a sentence in a preposition.",
   "The submarine dove down to a depth of 1000 meters.",
   "Will you be my companion as I venture into this deep dark cave?",
   "International flights are often several hours long.",
   "What percentage of people have brown eyes?",
   "The triceratops was a bully at his school and always threatened the little dinosaurs with his horns.",
   "It is a universal rule that two plus two must always equal four.",
   "He competed in a triathlon and won fourth place.",
   "Does Holy Trinity have intramural sports?",
   "They hold a biennial celebration in my hometown."
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

const benList = [
   "out",
   "how",
   "show",
   "cloud",
   "clown",
   "growl",
   "round",
   "down",
   "ground",
   "brown",
   "owl",
   "found",
   "shout",
   "rough",
   "frown",
   "gown",
   "mouth",
   "plow",
   "south",
   "glow",
   "town",
   "count",
   "through",
   "crow"
];

const benReadingList = [
   "out",
   "how",
   "show",
   "cloud",
   "clown",
   "growl",
   "round",
   "down",
   "ground",
   "brown",
   "owl",
   "found",
   "shout",
   "rough",
   "frown",
   "gown",
   "mouth",
   "plow",
   "south",
   "glow",
   "town",
   "count",
   "through",
   "crow"
];

const joshList = [
   "three",
   "shred",
   "square",
   "split",
   "throne",
   "squint",
   "threw",
   "splash",
   "through",
   "splotch",
   "thrown",
   "squash",
   "shriek",
   "squeeze",
   "thrill",
   "shrimp",
   "squirt",
   "squeak",
   "squawk",
   "squirm",
   "shrub",
   "throw",
   "shrink"
];

const joshReadingList = [
   "Josh has three siblings.",
   "I like to shred my mom's old papers.",
   "The table was shaped like a square.",
   "Let's split the money between the two of us.",
   "The queen sat on her throne.",
   "Sometimes you need to squint to see something far away.",
   "She threw the pizza box away in the trash.",
   "Try to make a big splash when you jump into the pool.",
   "You are not allowed to pass through this tunnel.",
   "There was a big red splotch on his back where the ball hit him.",
   "The baseball was thrown to third base.",
   "Please don't squash the bugs.",
   "Hannah sometimes lets out a shriek when she's mad.",
   "You need to squeeze the toothpaste out of the tube.",
   "That roller coaster was quite a thrill ride!",
   "Josh doesn't like eating shrimp.",
   "Please don't squirt me with the hose.",
   "The tiny mouse let out a tiny squeak.",
   "The blackbird let out a loud squawk.",
   "Icky talk like that makes me squirm.",
   "Please trim the shrub on the side of the house.",
   "Don't throw the ball inside, please.",
   "Sometimes pants accidentally shrink in the dryer."
];

/* GLOBAL VARIABLES AND FUNCTIONS */

let user = "user";
let userPretty = "User";

let list = [];
let readingList = [];

const prettify = function (s) {
   return (
      s.charAt(0).toUpperCase() + s.toLowerCase().slice(1)
   );
};

/* -----------------------------------------------
/* LANDING PAGE
/* (+ related variables and functions)
/* ----------------------------------------------- */

const landingButton =
   document.querySelector("#submit-name");
const settingsButton = document.querySelector(
   "#speech-settings"
);
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
   if (
      user === "JOSH" ||
      user === "JOSHUA" ||
      user === "CLAIRE" ||
      user === "BEN" ||
      user === "BENJAMIN" ||
      user === "BENJI" ||
      user === "HANNAH"
   ) {
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
};

const noWelcome = async function () {
   await getSadGif();
   userName.value = "";
   landing.classList.add("hide");
   sad.classList.remove("hide");
   speak(
      `Sorry, I don't recognize you, ${user}. I'm only allowed to tutor Claire, Josh, Ben, and Hannah in spelling. Too bad for you. You're really missing out on a spectacular spelling list.`
   );
};

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
   const jsonFile = await fetch(
      "https://api.giphy.com/v1/gifs/search?api_key=kE4gNhEcUD14788jYqtDlFWJN6Tm5BAw&q=disappointed&limit=25&offset=0&rating=pg&lang=en"
   );
   const list = await jsonFile.json();
   const randomIndex = Math.floor(
      Math.random() * list.data.length
   );
   const gifArray = list.data;
   const gif = gifArray[randomIndex];
   let gifURL = "";
   if (window.innerHeight < 824) {
      gifURL = gif.images.fixed_height.url;
   } else {
      gifURL = gif.images.original.url;
   }
   const sadImg = document.querySelector(".sad img");
   sadImg.src = gifURL;
};

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
   speak(
      `Well, you'd better get ready, because your mama told me that you need to practice your spelling! How about you pick a different answer?`
   );
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
      // guess.style.textTransform = "uppercase";
      list = [...claireList];
      readingList = [...claireReadingList];
   } else if (user === "JOSHUA" || user === "JOSH") {
      // guess.style.textTransform = "none";
      list = [...joshList];
      readingList = [...joshReadingList];
   } else if (
      user === "BENJAMIN" ||
      user === "BENJI" ||
      user === "BEN"
   ) {
      // guess.style.textTransform = "none";
      list = [...benList];
      readingList = [...benReadingList];
   } else if (user === "HANNAH") {
      // guess.style.textTransform = "uppercase";
      list = [...hannahList];
      readingList = [...hannahList];
   } else {
      console.log("No list to match user!");
      return;
   }
};

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
   const jsonFile = await fetch(
      "https://api.giphy.com/v1/gifs/search?api_key=kE4gNhEcUD14788jYqtDlFWJN6Tm5BAw&q=tsk%20tsk&limit=25&offset=0&rating=g&lang=en"
   );
   const list = await jsonFile.json();
   const randomIndex = Math.floor(
      Math.random() * list.data.length
   );
   const gifArray = list.data;
   const gif = gifArray[randomIndex];
   let gifURL = "";
   if (window.innerHeight < 824) {
      gifURL = gif.images.fixed_height.url;
   } else {
      gifURL = gif.images.original.url;
   }
   const tskImg = document.querySelector(".tsk img");
   tskImg.src = gifURL;
};

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
   synth.cancel();
   speak("Are you sure you want to leave your quiz?");
   quizX.disabled = true;
   please.classList.remove("hide");
});

const getPleaseGif = async function () {
   const jsonFile = await fetch(
      "https://api.giphy.com/v1/gifs/search?api_key=kE4gNhEcUD14788jYqtDlFWJN6Tm5BAw&q=don%27t%20do%20it&limit=25&offset=0&rating=g&lang=en"
   );
   const list = await jsonFile.json();
   const randomIndex = Math.floor(
      Math.random() * list.data.length
   );
   const gifArray = list.data;
   const gif = gifArray[randomIndex];
   let gifURL = "";
   if (window.innerHeight < 824) {
      gifURL = gif.images.fixed_height.url;
   } else {
      gifURL = gif.images.original.url;
   }
   const pleaseImg = document.querySelector(".please img");
   pleaseImg.src = gifURL;
};

repeat.addEventListener("click", function () {
   synth.cancel();
   speak(`${currentWord}. ${currentSpokenWord}`);
});

const speakWord = async function () {
   if (user === "HANNAH") {
      if (list.length > 0) {
         getWord();
         speak("Find the letter");
         speak(currentSpokenWord);
         speak("on the keyboard and press it.");
      } else {
         quiz.classList.add("hide");
         await getCongratsGif();
         congrats.classList.remove("hide");
         speak("You've completed your quiz!  Well done!");
      }
   } else {
      if (list.length === totalWords) {
         getWord();
         speak(
            `Your first word is, ${currentWord}. ${currentSpokenWord}`
         );
      } else if (list.length > 0) {
         getWord();
         speak(
            `The next word is, ${currentWord}. ${currentSpokenWord}`
         );
      } else {
         quiz.classList.add("hide");
         await getCongratsGif();
         congrats.classList.remove("hide");
         speak("You've completed your quiz!  Well done!");
      }
   }
};

const getCongratsGif = async function () {
   const jsonFile = await fetch(
      "https://api.giphy.com/v1/gifs/search?api_key=kE4gNhEcUD14788jYqtDlFWJN6Tm5BAw&q=celebration&limit=25&offset=0&rating=g&lang=en"
   );
   const list = await jsonFile.json();
   const randomIndex = Math.floor(
      Math.random() * list.data.length
   );
   const gifArray = list.data;
   const gif = gifArray[randomIndex];
   let gifURL = "";
   if (window.innerHeight < 824) {
      gifURL = gif.images.fixed_height.url;
   } else {
      gifURL = gif.images.original.url;
   }
   const congratsImg =
      document.querySelector(".congrats img");
   congratsImg.src = gifURL;
};

const getWord = function () {
   const randomIndex = Math.floor(
      Math.random() * list.length
   );
   const randomWord = list[randomIndex];
   const randomSpokenWord = readingList[randomIndex];
   list.splice(randomIndex, 1);
   readingList.splice(randomIndex, 1);
   currentWord = randomWord.toLowerCase();
   currentSpokenWord = randomSpokenWord;
};

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
      if (currentWord === guess.value.toLowerCase()) {
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
         speak(
            "looks like this. Find it on the keyboard and press it!"
         );
         showLetter.textContent = currentWord.toUpperCase();
      }
   } else {
      if (currentWord === guess.value.toLowerCase()) {
         speak("Correct!");
         guess.value = "";
         wordNum++;
         adjustProgress();
         speakWord();
      } else {
         const spelledOut = currentWord.split("");
         speak(
            `Sorry, that's incorrect.  The correct spelling of ${currentWord} is ...`
         );
         const saveRate = voiceRate;
         voiceRate = 0.8;
         for (var letter of spelledOut) {
            speak(letter);
         }
         voiceRate = saveRate;
         speak(
            `I'll put it back in your list to try again later.`
         );
         list.push(currentWord);
         readingList.push(currentSpokenWord);
         guess.value = "";
         speakWord();
      }
   }
};

const adjustProgress = function () {
   if (wordNum <= totalWords) {
      meter.style.width = `${
         ((wordNum - 1) / totalWords) * 100
      }%`;
      numWords.innerText = `Word ${wordNum} of ${totalWords}`;
   } else {
      meter.style.width = `${
         ((wordNum - 1) / totalWords) * 100
      }%`;
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
   showLetter.textContent = "";
   please.classList.add("hide");
   quiz.classList.add("hide");
   landing.classList.remove("hide");
   synth.cancel();
   quizX.disabled = false;
});

noClose.addEventListener("click", function () {
   please.classList.add("hide");
   synth.cancel();
   quizX.disabled = false;
});

/* -----------------------------------------------
/* CONGRATS POP-UP 
/* opens when user successfully finishes quiz
/* ----------------------------------------------- */

const congrats = document.querySelector(".congrats");
const congratsX = document.querySelector(
   ".congrats .modal-x"
);

congratsX.addEventListener("click", function () {
   congrats.classList.add("hide");
   landing.classList.remove("hide");
   synth.cancel();
});

/* -----------------------------------------------
/* SPEECH SETTINGS WINDOW
/* opens from landing page, allows user to choose voice
/* ----------------------------------------------- */

const settings = document.querySelector(".settings");
const settingsX = document.querySelector(
   ".settings .modal-x"
);

var voiceSelect = document.querySelector("select");

var pitch = document.querySelector("#pitch");
var pitchValue = document.querySelector(".pitch-value");
var rate = document.querySelector("#rate");
var rateValue = document.querySelector(".rate-value");
const ok = document.querySelector("#ok");
const play = document.querySelector("#play");

let voices = [];

const synth = window.speechSynthesis;
let utterThis = new SpeechSynthesisUtterance();
populateVoiceList();
let voiceRate = 1;
let voicePitch = 1;
let voice = voices[0];

const speak = function (message) {
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
   var selectedIndex =
      voiceSelect.selectedIndex < 0
         ? 0
         : voiceSelect.selectedIndex;
   voiceSelect.innerHTML = "";
   for (i = 0; i < voices.length; i++) {
      var option = document.createElement("option");
      option.textContent =
         voices[i].name + " (" + voices[i].lang + ")";

      if (voices[i].default) {
         option.textContent += " -- DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
   }
   voiceSelect.selectedIndex = selectedIndex;
}

if (speechSynthesis.onvoiceschanged !== undefined) {
   speechSynthesis.onvoiceschanged = populateVoiceList;
}

const makeSpeechSample = function () {
   synth.cancel();
   var selectedOption =
      voiceSelect.selectedOptions[0].getAttribute(
         "data-name"
      );
   for (i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
         voice = voices[i];
         break;
      }
   }
   voicePitch = pitch.value;
   voiceRate = rate.value;

   speak(
      "Would you like me to speak to you in this voice?"
   );
};

pitch.onchange = function () {
   pitchValue.textContent = pitch.value;
};

rate.onchange = function () {
   rateValue.textContent = rate.value;
};

voiceSelect.onchange = function () {
   makeSpeechSample();
};

ok.addEventListener("click", function () {
   settings.classList.add("hide");
   landing.classList.remove("hide");
   synth.cancel();
});

play.addEventListener("click", function () {
   makeSpeechSample();
});
