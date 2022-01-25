const countdownEl = document.getElementById('countdown')
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const questionContainerElement = document.getElementById('question-container')
let shuffledQuestions, currentQuestionIndex
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');




startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startGame(events) {
    startButton.classList.add('hide')
    shuffledQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
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
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)
    }
}
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}


function setStatusClass(element, correct) {
    console.log(correct)
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')

}

const question = [
    {
        question: 'What is 2+2?',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false }
        ]
    },
    {
        question: 'what is a styling code language?',
        answers: [
            { text: 'JAVA', correct: false },
            { text: 'CSS', correct: true },
            { text: 'HTML', correct: false },
            { text: 'LOOPS', correct: false }
        ]
    },
    {
        question: 'What do we use to link CSS to HTML in the <Head>?',
        answers: [
            { text: 'loops', correct: false },
            { text: 'arrays', correct: false },
            { text: 'href=./assets/css/styles.css', correct: true },
            { text: 'variables', correct: false }
        ]
    },
    {
        question: 'What is Javascipt?',
        answers: [
            { text: 'a dummy', correct: false },
            { text: 'programming Launguage', correct: true },
            { text: 'data recovery', correct: false },
            { text: 'css', correct: false }  
        ]
        
    }
]
startButton.addEventListener('click', startGame)
function countdown() {
    var timeLeft = 30;
  
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
      if (timeLeft > 1) {
      timerEl.textContent = timeLeft + 'seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
      }
    }, 1000);
  }
  countdown();