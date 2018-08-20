let numInput = $("#numInput");
let currentNumDisplay = $("#currentNumber");
let previousAnswer = $("#previousAnswer");
let resultDisplay = $("#resultDisplay");
let targetNum = 2;

$(document).on("keypress", function(e) {
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
} else {
    console.log("its okay");
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
    resultDisplay.removeClass("incorrect");
    resultDisplay.text("Correct!");
    resultDisplay.addClass("correct");
}

function incorrect() {
    resultDisplay.text("Wrong!");
    resultDisplay.addClass("incorrect");
}