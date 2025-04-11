//your JS code here. If required.
// Get references to the elements
const video = document.getElementById('meditation-video');
const audio = document.getElementById('meditation-audio');
const videoSource = document.getElementById('video-source');
const audioSource = document.getElementById('audio-source');
const timeDisplay = document.querySelector('.time-display');
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');

// Time settings
let meditationTime = 600; // Default 10 minutes
let timer;

// Function to update time display
function updateTimeDisplay() {
    const minutes = Math.floor(meditationTime / 60);
    const seconds = meditationTime % 60;
    timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Function to start meditation
function startMeditation() {
    clearInterval(timer);
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

// Play button functionality
playButton.addEventListener('click', () => {
    audio.play();
    video.play();
    startMeditation();
});

// Pause button functionality
pauseButton.addEventListener('click', () => {
    audio.pause();
    video.pause();
    clearInterval(timer);
});

// Time selection buttons
document.getElementById('smaller-mins').addEventListener('click', () => {
    meditationTime = 120; // 2 minutes
    updateTimeDisplay();
});

document.getElementById('medium-mins').addEventListener('click', () => {
    meditationTime = 300; // 5 minutes
    updateTimeDisplay();
});

document.getElementById('long-mins').addEventListener('click', () => {
    meditationTime = 600; // 10 minutes
    updateTimeDisplay();
});

// Sound and Video switch buttons
document.getElementById('meditation-a').addEventListener('click', () => {
    videoSource.src = 'videos/beach.mp4';
    audioSource.src = 'sounds/beach.mp3';
    video.load();
    audio.load();
});

document.getElementById('meditation-b').addEventListener('click', () => {
    videoSource.src = 'videos/rain.mp4';
    audioSource.src = 'sounds/rain.mp3';
    video.load();
    audio.load();
});
