document.getElementById('enter-overlay').addEventListener('click', function () {
    this.classList.add('fade-out');

    var songs = ["audio.mp3", "audio2.mp3", "audio3.mp3", "audio4.mp3"];

    var randomSong = songs[Math.floor(Math.random() * songs.length)];

    var audio = document.getElementById('background-music');
    audio.src = randomSong;
    audio.play();

    setTimeout(() => {
        this.remove();
    }, 1000);
});

// Play/Pause button logic
const playPauseButton = document.getElementById('play-pause-btn');
const audio = document.getElementById('background-music');

playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
    }
});

// Skip button logic
const skipButton = document.getElementById('skip-btn');

skipButton.addEventListener('click', () => {
    let songs = ["audio.mp3", "audio2.mp3", "audio3.mp3", "audio4.mp3"];
    let randomSong = songs[Math.floor(Math.random() * songs.length)];
    audio.src = randomSong;
    audio.play();
});

// Volume control logic
const volumeControl = document.getElementById('volume-control');

volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
});

// Display the current volume label
const volumeLabel = document.getElementById('volume-label');
volumeControl.addEventListener('input', () => {
    volumeLabel.textContent = `Volume: ${(volumeControl.value * 100).toFixed(0)}%`;
});

document.addEventListener("DOMContentLoaded", function () {
    let membersList = document.querySelector(".development-checklist");
    membersList.style.opacity = "0"; // Start hidden
    membersList.style.transition = "opacity 2s"; // Smooth fade-in effect

    setTimeout(() => {
        membersList.style.opacity = "1"; // Slowly fade in after page loads
    }, 500);
});
