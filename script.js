const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
var questionAudio = document.getElementById('question-audio');
const scoreText = document.getElementById('score');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "In which game might you hear this sound?",
        choice1: "Sonic the Hedgehog",
        choice2: "Legend of Zelda: Ocarina of Time",
        choice3: "Spyro the Dragon",
        choice4: "Rayman",
        answer: 3,
        audio: "Assets/Audio/Gem Spyro.mp3"
    },
    {
        question: "Which creature makes this sound?",
        choice1: "Nergigante: Monster Hunter",
        choice2: "Alduin: Skyrim",
        choice3: "Baron Buff: League of Legends",
        choice4: "Deathwing: World of Warcraft",
        answer: 3,
        audio: "Assets/Audio/Baron Dying League of Legends.mp3"
    },
    {
        question: "In which game might you hear this dialogue?",
        choice1: "Mario Galaxy",
        choice2: "Legend of Zelda: Majora's Mask",
        choice3: "Pikmin",
        choice4: "Banjo-Kazooie",
        answer: 4,
        audio: "Assets/Audio/Banjo-Kazooie Kazooie voice clip.mp3"
    },
    {
        question: "In which game might you hear this sound?",
        choice1: "Croc: Legend of the Gobbos",
        choice2: "Runescape",
        choice3: "Final Fantasy V",
        choice4: "Rayman",
        answer: 2,
        audio: "Assets/Audio/Runescape.mp3"
    },
    {
        question: "In which game might you hear this sound?",
        choice1: "Elite Dangerous",
        choice2: "Battlezone 98",
        choice3: "Halo: Combat Evolved",
        choice4: "Red Alert 2",
        answer: 3,
        audio: "Assets/Audio/HALO Shield Recharge.mp3"
    },
    {
        question: "In which game might you hear a lot of this sound?",
        choice1: "Legend of Zelda: Breath of the Wild",
        choice2: "Fallout 3",
        choice3: "Monster Hunter",
        choice4: "Star Wars Battlefront II",
        answer: 1,
        audio: "Assets/Audio/Zelda BOTW.mp3"
    },
    {
        question: "In which game might you hear this sound?",
        choice1: "Skyrim",
        choice2: "World of Warcraft",
        choice3: "God of War",
        choice4: "Age of Empires III",
        answer: 2,
        audio: "Assets/Audio/World of Warcraft Level Up.mp3"
    },
    {
        question: "In which game might you quit after hearing this sound?",
        choice1: "Age of Empires II",
        choice2: "Warcraft 3",
        choice3: "Empire Earth",
        choice4: "Civilisation V",
        answer: 4,
        audio: "Assets/Audio/Civ 5.mp3"
    },
    {
        question: "In which game might you hear this sound?",
        choice1: "Worms",
        choice2: "Command and Conquer",
        choice3: "Oddworld: Abe's Oddyssey",
        choice4: "Age of Empires II",
        answer: 3,
        audio: "Assets/Audio/Oddworld.mp3"
    },
    ];


const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion(); 
};

getNewQuestion = () =>{
    
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        return window.location.assign("/index.html");
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    questionAudioSrc = currentQuestion.audio;
    questionAudio.src = questionAudioSrc;
    choices.forEach( choice =>{
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number];
    })

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
}; 

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;

        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset["number"];
        

        const classToApply = 
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply == "correct"){
            addScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply)
        questionAudioSrc = currentQuestion.audio;
        questionAudio.src = questionAudioSrc;
        setTimeout( () => {  
        selectedChoice.parentElement.classList.remove(classToApply)
        getNewQuestion();
        }, 1500);  
    });
});

addScore = num => {
    score += num;
    scoreText.innerText = score;
}

startGame();
