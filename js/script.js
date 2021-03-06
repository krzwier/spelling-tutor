/* SPELLING LISTS */

const claireList = [
   "volcanoes",
   "dominoes",
   "barracks",
   "salmon",
   "thieves",
   "kangaroos",
   "waltzes",
   "vetoes",
   "species",
   "algae",
   "volcano",
   "domino",
   "barrack",
   "salmon",
   "thief",
   "kangaroo",
   "waltz",
   "veto",
   "species",
   "algae"
];

const claireReadingList = [
   "It's best not to dive in to the mouths of volcanoes.",
   "It's best not to play a game of catch near someone setting up dominoes.",
   "The army unit keeps all of its weapons locked up in the barracks",
   "An entire school of salmon swam together upstream.",
   "A group of thieves walked down the dark alley.",
   "I love seeing the kangaroos at the zoo!",
   "I danced many waltzes with the prince at the ball.",
   "The president sometimes vetoes bills that he doesn't agree with.",
   "That species of shark is very intelligent.",
   "The pond is full of algae.",
   "That volcano is scheduled to erupt sometime in the next 100 years.",
   "Please don't knock over that domino!",
   "The sargeant ordered all of the soldiers to sleep in the barrack.",
   "The lonely salmon swam around looking for his friends.",
   "That thief stole my wallet!",
   "The kangaroo jumped over the armadillo.",
   "I do not know how to dance the waltz.",
   "The president has the power to veto any bill.",
   "Many species of birds perform mating dances.",
   "Many different algae were present in that pool."
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
   "brag"
];

const benReadingList = [
   "Please grab an apple for me.",
   "You can wish upon a star.",
   "The frog loved to sit by his pond and croak.",
   "Please use your fork while eating.",
   "You have a scar on your knee.",
   "In the fall we can try going to a corn maze.",
   "What kind of crop is being grown in that field?",
   "Your sister runs track.",
   "The cows are milked in the barn.",
   "Be careful with that power cord.",
   "When two countries can't resolve their disagreements peacefully, they sometimes fight a war.",
   "Claire knows how to make her horse trot.",
   "You should wear a scarf in order to keep your neck warm in the winter.",
   "There was a charm hanging from that necklace.",
   "Paisley likes to trap people who are laying on the ground.",
   "Don't cram food in your mouth so fast!",
   "When drivers need to warn each other, they sometimes honk their horn.",
   "A wine bottle is closed up with a cork.",
   "He threw the dart and got a bullseye.",
   "I loved the craft we made in school today.",
   "Your shoes made a mark on the gym floor.",
   "She is a very short person.",
   "He needed to hold a prop for a scene in the play.",
   "She likes to brag too often."
];

const joshList = [
   "girl",
   "fire",
   "sir",
   "third",
   "bird",
   "birth",
   "tire",
   "spire",
   "shirt",
   "fir",
   "whirl",
   "hire",
   "firm",
   "swirl",
   "thirst",
   "chirp",
   "fur",
   "skirt",
   "liar",
   "twirl",
   "wire",
   "dirt",
   "first"
];

const joshReadingList = [
   "That girl is very pretty.",
   "Please don't set the house on fire.",
   "Please come this way, sir.",
   "My team got third place in the tournament.",
   "A bird was making a nest in that tree.",
   "I remember the day of my sister's birth.",
   "My mom had to change the tire on our car.",
   "The spire of the church can be seen across town.",
   "My favorite shirt is blue.",
   "There are many fir trees in the forest.",
   "Today was so busy that everything felt like a whirl.",
   "That company wants to hire new employees.",
   "I sleep on a firm mattress.",
   "I ordered a chocolate swirl-flavored ice cream cone.",
   "The only thing that can quench my thirst is a gigantic slurpee.",
   "The baby birds love to chirp.",
   "She was wearing a fur coat.",
   "She was wearing a long elegant skirt.",
   "I didn't like talking to him, because he was a liar.",
   "My little sister loves to twirl around when she wears dresses.",
   "Don't touch the exposed wire, or you will be electrocuted.",
   "Josh loves to dig in the dirt.",
   "I was the first in my class to arrive at school."
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
