// var body = document.querySelector('.body');
// var displayTime = document.querySelector('.displayTime');
// var inputName = document.querySelector('.inputName');
// var startButton = document.querySelector('.startButton');
// var questions = document.querySelector('.questions');
// var choiceA = document.querySelector('.choiceA');
// var choiceB = document.querySelector('.choiceB');
// var choiceC = document.querySelector('.choiceC');
// var choiceD = document.querySelector('.choiceD');

// // When I click the button then it will add 60 seconds to the var secondsLeft only once
// startButton.addEventListener('click', startCountdown());
// var secondsLeft = 60;
// function startCountdown() {
//      secondsLeft + 10; 
// };

// function countDown() {
//   var timeInterval = setInterval(function () {
//   if (secondsLeft > 1) {
//   displayTime.textContent = secondsLeft;
//   secondsLeft--;
//   } else {
//   displayTime.textContent = 'Time is up!';
//   clearInterval(timeInterval);
//   displayMessage();
//   }
// }, 1000);
// }

// function displayMessage() {
//   inputName.textContent = "Words";
// }

// countDown();

// function quizQuestions() {
  
// }
  

// function quizQuestions() {
//   for (var i = 0; i <questionBank.length; i++) {
//   var question = questionBank[i].question
//   var choices = questionBank[i].choices
//   var answer = questionBank[i].answer
//   if (questionBank[i] == questionBank[0]) {
//   choiceA.append(choices[0])
//   }     


//   //   target some element on the page using querySelector and use
//   //   textContent to display that question or choices or answers
//   //   to the page?
//   }
// }

var startButton = document.querySelector('.start-btn');
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')

var shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)

function startQuiz () {
        console.log('Start Quiz');
        startButton.classList.add('hide')
        shuffledQuestions = questionBank.sort(() => Math.random() -.5)
        currentQuestionIndex = 0
        questionContainerElement.classList.remove('hide')
        nextQuestion();
};

function nextQuestion () {
        showQuestion(shuffledQuestions[currentQuestionIndex])
};

function showQuestion (question) {
        questionElement.innerText = question.question;
}

function selectChoice() {

};

var questionBank = [
question1 = {
  question: 'how old are your?',
  choices: ['a', 'b', 'c', 'd',],
  answer: 'a'
},
question1 = {
  question: 'What is 1 + 1?',
  choices: ['a', 'b', 'c', 'd',],
  answer: 'a'
},
question1 = {
  question: 'What is the chemical compound for water?',
  choices: ['a', 'b', 'c', 'd',],
  answer: 'a'
},
question1 = {
  question: 'What is javascript?',
  choices: ['a', 'b', 'c', 'd',],
  answer: 'a'
},
question1 = {
  question: 'What are computers?',
  choices: ['a', 'b', 'c', 'd',],
  answer: 'a'
},
];