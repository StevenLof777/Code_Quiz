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
var timerCount = 10;
var header = document.querySelector('.header')
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
var wrongAnswer = document.querySelector('.wrong')
var correctAnswer = document.querySelector('.correct')
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()

})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  header.classList.add('hide')
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
  startTimer()  
}

function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    displayTime.textContent = 'Time: '+ timerCount;
    if (timerCount === 0) {
      clearInterval(timer);
    }
  }, 1000);
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass()
  // nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild)
  answerButtonsElement.removeChild(answerButtonsElement.firstChild)
}

function selectAnswer(e) {
  const selectedButton = e.target
  console.log(selectedButton)
  const correct = selectedButton.dataset.correct
  console.log(correct)
  setStatusClass(correct)
  // Array.from(answerButtonsElement.children).forEach(button => {
  
  //   setStatusClass(button, button.dataset.correct)
  // })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    // nextButton.classList.remove('hide')
    currentQuestionIndex++
    // clearStatusClass();
    setNextQuestion();
  } else {
    startButton.innerText = "Restart"
    startButton.classList.remove('hide')
  }
  
}

function setStatusClass(correct) {
  console.log(correct)
  // clearStatusClass(element)
  if (correct) {
    correctAnswer.classList.remove('hide')
    // correctAnswer.classList.add('show')
  } else {
    console.log('This is the wrong answer')
    wrongAnswer.classList.remove('hide')
    // wrongAnswer.classList.add('show')
  }
}

function clearStatusClass(element) {
  correctAnswer.classList.add('hide')
  wrongAnswer.classList.add('hide')
  correctAnswer.classList.remove('show')
  wrongAnswer.classList.remove('show')
}
 
const questions = [
  {
    question: 'What is 1 + 1?',
    answers: [
      {text: '1', correct: true},
      {text: '3', correct: false},
      {text: '55', correct: false},
      {text: '10', correct: false}
    ]
  },
  {
    question: 'What is 1 + 3?',
    answers: [
      {text: '8', correct: false},
      {text: '9', correct: true},
      {text: '12', correct: false},
      {text: 'yeah', correct: false}
    ]
  },
  {
    question: 'What is 1 + 4?',
    answers: [
      {text: '8', correct: false},
      {text: '99', correct: false},
      {text: '1', correct: true},
      {text: '20', correct: false}
    ]
  },
  {
    question: 'What is 1 + 5?',
    answers: [
      {text: '11', correct: true},
      {text: '23', correct: false},
      {text: '85', correct: false},
      {text: '97', correct: false}
    ]
  },
]