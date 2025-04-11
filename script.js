//your JS code here. If required.
// Get references to the elements
const video = document.getElementById('meditation-video');
const audio = document.getElementById('meditation-audio');
const timeDisplay = document.querySelector('.time-display');
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');

// Time settings
let meditationTime = 600; // Default to 10 minutes in seconds
let timer;

// Function to update the time display
function updateTimeDisplay() {
    const minutes = Math.floor(meditationTime / 60);
    const seconds = meditationTime % 60;
    timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Function to start the meditation timer
function startMeditation() {
    timer = setInterval(() => {
        if (meditationTime > 0) {
            meditationTime--;
            updateTimeDisplay();
        } else {
            clearInterval(timer);
            audio.pause();
            alert("Meditation time is over!");
        }
    }, 1000);
}

// Event listeners for time selection buttons
document.getElementById('smaller-mins').addEventListener('click', () => {
    meditationTime = 120; // 2 minutes
    updateTimeDisplay();
});

document.getElementById('medium-mins').addEventListener('click', () => {
    meditationTime = 300; // 5 minutes
    updateTimeDisplay();
});

document.getElementById('
