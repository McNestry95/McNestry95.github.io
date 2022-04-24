const startButton = document.getElementById('Start')
const nextButton = document.getElementById('Next')

startButton.addEventListener('click', startGame)
const questionContainerElement = document.getElementById('question-container')

let shuffledQuestions, currentQuestionIndex

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answers')

function startGame(){
    console.log('game started')
    startButton .classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question

}

function resetState(){

}

function SelectAnswer(){

}

const questions = [
    {
        question: 'In which game would you hear this Noise',
        answers: [
            { text: 'Age of Empires II', correct: false },
            { text: 'Final Fantasy VII', correct: false },
            { text: 'OddWorld: Abes Oddysee', correct: true },
            { text: 'Spyro The Dragon', correct: false },
        ] 
    }
]