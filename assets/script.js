//start button
var startEL = document.querySelector('#start')
startEL.addEventListener("click", function() {
    //add run quiz function here
    //start countdown function here
    countdown();
});
/*
function runQuiz() {
    //remove start button and main text
    //
}
*/
//set up a timer
var timerLeftEl = document.querySelector('#count-down-timer')
function countdown() {
    var timeLeft = 75;
    var timeInterval = setInterval(function() {
        console.log(timeLeft)  
        timeLeft--
        document.getElementById("count-down-timer").innerHTML = timeLeft;
    },1000);
        if (timeLeft < 1) {
            endQuiz();
        };

}    //
//score screen



//set up incorrect answer removes time from timer




//set up score counter
//var highScore = timeRemaining - incorrectChoice * 5;

//set up highscore recorder
    //initals
    //high score
    //save in localstorage

//set up questions
/*
var questionsArrary = [
    {
        question : "Commonly used data types DO NOT include:",
        choice : [
            "strings",
            "booleans",
            "alerts",
            "numbers"
        ],
        answer : "alerts",
    },
    {
        question : "The condition in an if/else statement is enclosed within _____",
        choice : [
            "quotes",
            "curly brackets",
            "parentheses",
            "square brackets"
        ],
        answer : "parentheses",
    },
    {
        question : "Arrays in JAvascript can be used to store",
        choice : [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        answer : "all of the above",
    },
    {
        question : "string values must be enclosed within ____ when being assinged to variables",
        choice : [
            "commas",
            "curly brackets",
            "quotes",
            "parentheses"
        ],
        answer : "quotes"
    },
];

//call question from array
function getQuestion() {
let currentQuestion = questionsArrary[questionsArraryIndex];
questionEL.textContent = currentQuestion.question
}
//call choices from arrary
//if choice = answer then correct
//if choice =/= answer then inccorect
*/