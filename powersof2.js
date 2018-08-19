let numInput = $("#numInput");
let currentNumDisplay = $("#currentNumber");
let previousAnswer = $("#previousAnswer");
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
        correct();  
        previousAnswer.text(targetNum);
        numInput.val("");
        targetNum *= 2;
} else {
    console.log("its okay");
    
}   
}

function updateDisplay() {
    let numDisplay = Number(currentNumDisplay.text());
    numDisplay ++;
    currentNumDisplay.text(numDisplay);
}

function correct() {
    
}