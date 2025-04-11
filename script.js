const video = document.getElementById('meditation-video');
const audio = document.getElementById('meditation-audio');
const timeDisplay = document.querySelector('.time-display');
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');

let meditationTime = 600;
let timer;

function updateTimeDisplay() {
    const minutes = Math.floor(meditationTime / 60);
    const seconds = meditationTime % 60;
    timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

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

playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        startMeditation();
    }
});

pauseButton.addEventListener('click', () => {
    audio.pause();
    clearInterval(timer);
});

document.getElementById('smaller-mins').addEventListener('click', () => {
    meditationTime = 120;
    updateTimeDisplay();
});

document.getElementById('medium-mins').addEventListener('click', () => {
    meditationTime = 300;
    updateTimeDisplay();
});

document.getElementById('long-mins').addEventListener('click', () => {
    meditationTime = 600;
    updateTimeDisplay();
});
