// 0. We need a button to start the game
//    -> Start button as the beginning point
//    -> We need to make the start button disappear  
//     -> Do I use CSS? DO I delete an element? Do I overlay the q, choices, answers on top of it? question mark
//    -> Needs to call whatever the function for setInterval is

// 1. How do I store my questions and answers?

// => Let's put my questions and answers in an Array!

// Format for a question:
// (question)
// (multiple choice)
// (answer)

// [
// {
// question: "how old are you?",
// choices: [28, 29, 15, 5, 7],
// answer: 28
// },
// {
// question: "how old are you?",
// choices: [28, 29, 15, 5, 7],
// answer: 28
// },
// {
// question: "how old are you?",
// choices: [28, 29, 15, 5, 7],
// answer: 28
// },
// {
// question: "how old are you?",
// choices: [28, 29, 15, 5, 7],
// answer: 28
// },
// ]

// 2. How can I get each question to display to the page?
//    -> Is there a way to loop through each question in an array?
//    -> Can we write a for loop that iterates through each object?

// for(var i = 0; i <questionBank.length; i++) {
// var question = questionBank[i].question
// var choices = questionBank[i].choices
// var answers = questionBank[i].answer

//     target some element on the page using querySelector and use textContent to display that question or choices or answers to the page?

// }

// 3. How can I CHECK whether the user picked the right answer?
//    -> Is there a way to click a button?  
//     -> Let's GENERATE an element that is a button
//    -> For each of the button, attach an addEventListener,
//    (put a console.log to know which one I clicked on?)
//    -> And for whichever it is clicked on, check against the answer
//    -> if/else statement

// 4. I NEED A TIMER TO COUNT DOWN
//    -> setInterval!
//    -> Some kind of variable with some random number in it
//    -> We would subtract by 1
//    -> we RUN SOME KIND OF LOGIC INSIDE OF THE COUNTDOWN
//    -> maybe I check the solution to the user input
//    -> If/Else if not correct ,have some penalty (-5)
//    -> What happens if the timer is set to zero?
//    -> Tell you your score AND TAKE YOU TO ANOTHER PAGE

// 4b. HOW DO I CALCULATE MY SCORE YO
// -> I add and subtract somewhere I guess yo idk how do I math? 2 + 2 = 4 - 1 that's 3 quick maffs;
//     Maybe I need to have a variable that keeps track of the score? (global)

// 5a. I want to save my score to the browser
// -> LOCAL STORAGE
// -> After we input in our initials, we want to save our score and our initials to the local storage
// -> localStorage.setItem("userScore", value);
// -> How do we want to save the initial and the high score
// -> {initial: THING WE TYPE, highScore: number}
// localStorage.setItem("userScore", JSON.stringify(object));
// -> How can I DISPLAY IT TO THE SCREEN?
//     -> JSON.parse(localStorage.getItem('userScore'));

var displayTime = document.querySelector('.displayTime')
var timerCount = 3;
var startButton = document.querySelector('.start-btn');
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
// var answerButtonsElement = document.getElementById('answer-buttons')
var btn1 = document.querySelectorAll('.btn1')
var btn2 = document.querySelectorAll('.btn2')
var btn3 = document.querySelectorAll('.btn3')
var btn4 = document.querySelectorAll('.btn4')


startButton.addEventListener('click', startQuiz)

function startQuiz () {
        console.log('Start Quiz');
        startButton.classList.add('hide')
        questionContainerElement.classList.remove('hide')
        startTimer();
        nextQuestion();
};

function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    displayTime.textContent = 'Time: '+ timerCount;
    if (timerCount === 0) {
      clearInterval(timer);
    }
  }, 1000);
}

function nextQuestion () {
 for (i = 0; i < questionBank.length; i++) {
  questionElement.textContent = questionBank[i].question;
 };
 displayChoices();
};


function displayChoices(){
  btn1.textContent = 'words';
  btn2.textContent = 'words';
  btn3.textContent = 'words';
  btn4.textContent = 'words';
}



var questionBank = [
{
  question: 'What is 1 + 1?',
  choices: ['a', 'b', 'c', 'd',],
  answer: 'a'
},
{
  question: 'What is 1 + 2?',
  choices: ['a', 'b', 'c', 'd',],
  answer: 'a'
},
{
  question: 'What is the chemical compound for water?',
  choices: ['a', 'b', 'c', 'd',],
  answer: 'a'
},
{
  question: 'What is javascript?',
  choices: ['a', 'b', 'c', 'd',],
  answer: 'a'
},
{
  question: 'What are computers?',
  choices: ['a', 'b', 'c', 'd',],
  answer: 'a'
},
];