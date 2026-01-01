const sentences = ["The weather is perfect today in New Delhi",
    "They are doing their best in the field of hospitality",
    "We are greatful for the education",
    "Was there any health problem with Mr.Jacob during the performance",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
];
let sentence = document.getElementById("sentence");
let typing = document.getElementById("typing");
let overlay = document.getElementById("overly");
let correct = document.getElementById("correct");
let stats = document.getElementById("stats");
let error = document.getElementById("error");
let wpm = document.getElementById("WPM");
let timer = document.getElementById("timer");
let info = document.getElementById("info");

let restart = document.getElementById("restart");
sentence.innerHTML = sentences[Math.floor(Math.random() * sentences.length)];
restart.addEventListener("click", () => {
    window.location.reload();
});

stats.addEventListener("click", () => {
    overlay.style.display = "block";
    info.style.display = "block";
    timer.style.display = "none";
    let sentenceText = sentence.innerHTML.replace(/\s/g, '');
    let typingText = typing.value.replace(/\s/g, '');
    wrong = 0;
    right = 0;

    if (typingText === "") {
        error.innerHTML = `Please type something`;
        correct.innerHTML = ``;
        return;
    }

    for (let i = 0; i < typingText.length; i++) {
        if (sentenceText[i] !== typingText[i]) {
            wrong++;
        } else {
            right++;
        }
    }
    error.innerHTML = `Word Typed Incorrectly ${wrong}`;
    correct.innerHTML = `Word Typed Correctly ${right}`;


    wpm.innerHTML = `Word Per Minute:${typingText.length}/m`

});

let time = 20;
function checktime() {
    let interval = setInterval(() => {
        time--;
        timer.innerHTML = time;

        if (time == 0) {
            clearInterval(interval);
            typing.disabled = true;
            timer.style.display = "none";
        }
    }, 1000)
}

checktime();

overlay.addEventListener("click", () => {
    overlay.style.display = "none";
})

