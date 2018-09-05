const numInput = $("#numInput");
const currentNumDisplay = $("#currentNumber");
const previousAnswer = $("#previousAnswer");
const resultDisplay = $("#resultDisplay");
const playBtn = $("#play");
let countDownDisp = $("#countDownDisp");
let scoreDisplay = $("#score");


let targetNum = 2;
let score = 0;
let counter = 1;


function selectTime() {
    const timeSelected = $("#timeSelected").prop('selectedIndex');
    const time = {
        "0": 60,
        "1": 120,
        "2": 300,
        "3": "infinity"
    };
    return time[timeSelected];
}

$("#main-container, .scoreAndTimer").addClass("hide");

playBtn.on("click", function() {
    $("#main-container, .scoreAndTimer").addClass("show");
    countDown(selectTime());
    $("#begin").hide();
});



$(document).on("keypress",(e) => {
    if(e.keyCode === 13) { 
        resultDisplay.removeClass("m-fadeOut"); 
        evaluate();
    }
});

function evaluate() {
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
    resultDisplay.removeClass("incorrect");
    resultDisplay.text("Correct!");
    resultDisplay.addClass("correct");
    resultDisplay.addClass("m-fadeOut");
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

function countDown(start) {
    if(start === "infinity") {
        countDownDisp.text("Unlimited");
    } else {
        count = setInterval(function() {
            start--;
            if(start <= 0) {
                clearInterval(count);
                countDownDisp.text(start);
                end();
            }
            countDownDisp.text(start);
        }, 1000);
    }
}

function end() {
    const mainContainer = $("#main-container");
    const scoreMove = $("#scoreMove");
    mainContainer.fadeOut(1500, "linear");
    scoreMove.animate({
        left: 110,
        top: 180
    }, 2500);
}
