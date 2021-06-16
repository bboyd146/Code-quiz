const startBtn = document.querySelector('#start-quiz');
const hScores = document.querySelector('#high-scores');
var qQuestions = document.querySelector('#question');
var aChoices = document.querySelector('#answers');
var timeEl = document.querySelector(".time");
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

}

var questions = [{
    question : "Which built-in method calls a function for each element in the array?",
    choices : ["while()", "loop()", "forEach()", "None of the above."],
    answer : "forEach()"
},
{
    question : "Which language is used for styling web pages?",
    choices : ["HTML", "CSS", "JQuery", "None of the above."],
    answer : "CSS"
},
{
    question : "Arrays in Javascript can be used to store ____.",
    choices : ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer : "all of the above"
},
{
    question : "Which of the following function of String object combines the text of two strings and returns a new string?",
    choices : ["add()", "concat()", "merge()", "append()"],
    answer : "concat()"
}]


function startQuiz() {
        setTime();
 
    }
    
    // function hideCard() {
    //     var cardEl = document.querySelector('#card2');
    //     hideEl(cardEl);
    //     console.log(cardEl);

    //     setTime();
    // }
    
//     function showQuestions() {
//         var questionIndex = 0;
//         var currentQuestion = questions[questionIndex].question;
//         var options = questions[questionIndex].choices;
//         document.getElementById('question').textContent = currentQuestion;
//         document.getElementById('answers').textContent = ' ';
        
//         for (let i = 0; i < options.length; i++) {
//             let button = document.createElement('<button>');
//             button.textContent = options[i];
//             button.value = options[i];
//             button.onclick = next;
            
//             document.getElementById('options').appendChild(button).classList.add('answers');
// }
// }

// function hideEl (event) {
//     event.currentTarget.setAttribute(
//         "style",
//         "display: none"
//       );
//     }
    

//deduct 15seconds from the timer if user chooses an incorrect answer
function incorrect() {
    timeLeft = timeLeft-15; 
    next();
}

//increases the score by 25points if the user chooses the correct answer
function correct() {
    score = score + 25;
    next();
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




startBtn.addEventListener('click', startQuiz);

// hScores.addEventListener('click');