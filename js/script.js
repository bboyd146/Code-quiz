const startBtn = document.querySelector('#start-quiz');
const hScores = document.querySelector('#high-scores');
var qQuestions = document.querySelector('#question');
var aChoices = document.querySelector('#answers');
var timeEl = document.querySelector(".time");
var ansB1 = document.querySelector('answer1');
var ansB2 = document.querySelector('answer2');
var ansB3 = document.querySelector('answer3');
var ansB4 = document.querySelector('answer4');
var buttons = document.querySelectorAll('.btn');
var secondsLeft = 61;
var score = 0;




function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft < 1) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
        }

    }, 1000);

    showQuiz();
}

var questions = [{
    question: "Which built-in method calls a function for each element in the array?",
    choices: ["while()", "loop()", "forEach()", "None of the above."],
    answer: "forEach()"
},
{
    question: "Which language is used for styling web pages?",
    choices: ["HTML", "CSS", "JQuery", "None of the above."],
    answer: "CSS"
},
{
    question: "Arrays in Javascript can be used to store ____.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
},
{
    question: "Which of the following function of String object combines the text of two strings and returns a new string?",
    choices: ["add()", "concat()", "merge()", "append()"],
    answer: "concat()"
}]

var questionIndex = 0;
var score = 0;

function startQuiz() {
    setTime();
    
    // var theDiv = document.getElementById("question");
    
    // theDiv.innerHTML = questions[i];
}
function askQuestions(id) {
    if (id < questions.length) {
        qQuestions.textContent = questions[id].question;
        ansB1.textContent = questions[id].choices[0];
        ansB2.textContent = questions[id].choices[1];
        ansB3.textContent = questions[id].choices[2];
        ansB4.textContent = questions[id].choices[3];
    }
}
// const diffChoices = choices.map(
//     function ({ choices }) {
//         return choices;
//     }
// )

// const diffQuest = questions.map(
//     function ({ question }) {
//         return question;
//     }
// );
//     for (let i = 0; i < diffQuest.length; i++) {
//     qQuestions.innerHTML= 
//     button.textContent = diffChoices[i];
//     button.value = diffChoices[i];
//     button.onclick = next;


function showQuestions() {
    var questionIndex = 0;
    var currentQuestion = questions[questionIndex].question;
    var options = questions[questionIndex].choices;
    document.getElementById('question').textContent = currentQuestion;
    document.getElementById('answers').textContent = ' ';


    // for (let i = 0; i < options.length; i++) {
    //     let button = document.createElement('button');
    //     button.textContent = options[i];
    //     button.value = options[i];
    //     button.onclick = next;

    //     document.getElementById('answers').appendChild(button).classList.add('answers');
}
// }


// var content = document.createTextNode("<YOUR_CONTENT>");
// theDiv.appendChild(content);



function hideCard() {
    var hide = document.getElementById("card2");
    hide.style.display = "none";
}



function showQuiz() {
    var show = document.getElementById("q-body");
    show.style.display = "block";
    showQuestions();
}
//deduct 15seconds from the timer if user chooses an incorrect answer
function incorrect() {
    timeLeft = timeLeft - 15;
}

//increases the score by 25points if the user chooses the correct answer
function correct() {
    score = score + 25;

}

//loops through the questions 
// function next() {
//     showQuestions();
//     currentQuestion++;

//     if (currentQuestion > questionsIndex.length - 1) {
//         // endGame();
//         return;
//     }
// }




startBtn.addEventListener('click', () => {
    hideCard();
    startQuiz();
});

// hScores.addEventListener('click');