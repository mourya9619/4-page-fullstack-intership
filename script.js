// Timer Functionality
let timeLeft = 1800; // 30 minutes in seconds
const timerDisplay = document.getElementById('time-left');

function startTimer() {
    const timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert('Time is up!');
            submitAssessment();
        } else {
            timeLeft--;
            let minutes = Math.floor(timeLeft / 60);
            let seconds = timeLeft % 60;
            timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        }
    }, 1000);
}

function navigateToQuestion(questionNumber) {
    alert(`Navigate to Question ${questionNumber}`);
}

function saveProgress() {
    alert('Progress saved.');
}

function submitAssessment() {
    alert('Assessment submitted.');
    // Display feedback if enabled
    const feedbackDisplay = document.getElementById('feedback-display');
    feedbackDisplay.style.display = 'block';
}

startTimer();
