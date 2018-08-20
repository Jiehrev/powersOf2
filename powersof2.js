const numInput = $("#numInput");
const currentNumDisplay = $("#currentNumber");
const previousAnswer = $("#previousAnswer");
const resultDisplay = $("#resultDisplay");
let scoreDisplay = $("#score");

let targetNum = 2;
let score = 0;
let counter = 1;

$(document).on("keypress",(e) => {
    if(e.keyCode === 13) {
        evaluate();
    }
});

evaluate = function() {
    const userNumber = Number(numInput.val());
    if(userNumber === targetNum) {
        updateDisplay();  
        previousAnswer.text(targetNum);
        numInput.val("");
        targetNum *= 2;
        correct();
        increaseScore();
    } else {
    incorrect();
    numInput.val("");
    }   
}

function updateDisplay() {
    let numDisplay = Number(currentNumDisplay.text());
    numDisplay ++;
    currentNumDisplay.text(numDisplay);
}

function correct() {
    resultDisplay.toggleClass("m-fadeOut");
    resultDisplay.removeClass("incorrect");
    resultDisplay.text("Correct!");
    resultDisplay.addClass("correct");
    resultDisplay.toggleClass("m-fadeOut");
}

function incorrect() {
    resultDisplay.removeClass("correct");
    resultDisplay.text("Incorrect!");
    resultDisplay.addClass("incorrect");
    resultDisplay.addClass("m-fadeOut");
}

function increaseScore() {
    score += counter;
    counter++;
    scoreDisplay.text(score);
}