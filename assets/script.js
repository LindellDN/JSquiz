let questionsArrary = [
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
function endQuiz () {
    if (response === 4) {

    }
}
//timer
var timeLeftEl = document.querySelector('#count-down-timer')
function countdown() {
    var timeLeft = 5;
    var timeInterval = setInterval(function() {
        console.log(timeLeft)  
        timeLeft--
        document.getElementById("count-down-timer").innerHTML = timeLeft;
    },1000);
        if (timeLeft < 1) {
            timeLeft === 0;
            clearInterval(timeInterval);
            endQuiz();
        };

}
//call question from array
/*
function getQuestion() {
    let currentQuestion = questionsArrary[questionsArraryIndex];
    questionEL.textContent = currentQuestion.question
    }
*/
//add choices from array
//make a list elemet of rchoices
//compare funtion list function
/*if (listItem.textcontent === question[questionNubmer].answer0{
    Feedback.setAtribute
})
*/
let questionEl = document.getElementsByName("questions")
    let choice1El = document.getElementsByName("choice1")
    let choice2El = document.getElementsByName("choice2")
    let choice3El = document.getElementsByName("choice3")
    let choice4El = document.getElementsByName("choice4")

function runQuiz() {
    // hide start menu
    document.getElementsByClassName('homepage')[0].style.visibility='hidden';
    //start timer for quiz
    countdown();
    getQuestion();
    for (i = 0; i < questionsArrary.length; i++) {

        questionEl = questionsArrary[i].question;
        choice1El = questionsArrary[i].choice[0];
        choice2El = questionsArrary[i].choice[1];
        choice3El = questionsArrary[i].choice[2];
        choice4El = questionsArrary[i].choice[3]
    }
    
} 

//start button
var startEL = document.querySelector('#start')
startEL.addEventListener("click", function() {
    //start the quiz
    runQuiz();
    
});
//score screen



//set up incorrect answer removes time from timer




//set up score counter
//var highScore = timeRemaining - incorrectChoice * 5;

//set up highscore recorder
    //initals
    //high score
    //save in localstorage


//call choices from arrary
//if choice = answer then correct
//if choice =/= answer then inccorect

//use submit button to to save to local storage
//sorting high-scores

//goback link to highscore.index

//button onClick="homepage"

//clear highscore