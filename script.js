const video = document.getElementById("meditation-video");
const audio = document.getElementById("meditation-audio");
const timeDisplay = document.querySelector(".time-display");
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");
const meditationAButton = document.getElementById("meditation-a");
const meditationBButton = document.getElementById("meditation-b");

let meditationTime = 600; // Default: 10 minutes in seconds
let timer;

// Update time display function
function updateTimeDisplay() {
    const minutes = Math.floor(meditationTime / 60);
    const seconds = meditationTime % 60;
    timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

// Start meditation timer
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

// Play and pause functionality
playButton.addEventListener("click", () => {
    audio.play();
    video.play();
    startMeditation();
});

pauseButton.addEventListener("click", () => {
    audio.pause();
    video.pause();
    clearInterval(timer);
});

// Time selection buttons
document.getElementById("smaller-mins").addEventListener("click", () => {
    meditationTime = 120; // 2 minutes
    updateTimeDisplay();
});

document.getElementById("medium-mins").addEventListener("click", () => {
    meditationTime = 300; // 5 minutes
    updateTimeDisplay();
});

document.getElementById("long-mins").addEventListener("click", () => {
    meditationTime = 600; // 10 minutes
    updateTimeDisplay();
});

// Switch Meditation Sounds
meditationAButton.addEventListener("click", () => {
    audio.src = "sounds/beach.mp3";
    video.src = "videos/beach.mp4";
    audio.play();
    video.play();
});

meditationBButton.addEventListener("click", () => {
    audio.src = "sounds/rain.mp3";
    video.src = "videos/rain.mp4";
    audio.play();
    video.play();
});

// Initial display update
updateTimeDisplay();
