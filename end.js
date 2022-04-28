const finalScore = document.getElementById('finalScore');
const scoreText = document.getElementById('scoreText');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const scoreMessage = localStorage.getItem('scoreMessage');


finalScore.innerText = mostRecentScore;
scoreText.innerText = scoreMessage;