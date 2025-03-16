document.addEventListener('DOMContentLoaded', () => {
    // Autoplay and set random song on page load
    var songs = ["audio.mp3", "audio2.mp3", "audio3.mp3", "audio4.mp3"];
    var randomSong = songs[Math.floor(Math.random() * songs.length)];

    var audio = document.getElementById('background-music');
    audio.src = randomSong;
    audio.autoplay = true;
    audio.play();

    // Play/Pause button functionality
    const playPauseButton = document.getElementById('play-pause-btn');
    playPauseButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseButton.textContent = 'Pause';
        } else {
            audio.pause();
            playPauseButton.textContent = 'Play';
        }
    });

    // Skip button functionality
    const skipButton = document.getElementById('skip-btn');
    skipButton.addEventListener('click', () => {
        let randomSong = songs[Math.floor(Math.random() * songs.length)];
        audio.src = randomSong;
        audio.play();
        playPauseButton.textContent = 'Pause'; 
    });

    // Volume control functionality
    const volumeControl = document.getElementById('volume-control');
    volumeControl.addEventListener('input', () => {
        audio.volume = volumeControl.value;
        document.getElementById('volume-label').textContent = `Volume: ${(volumeControl.value * 100).toFixed(0)}%`;
    });

    // Make sure the overlay click works
    document.getElementById('enter-overlay').addEventListener('click', function () {
        this.classList.add('fade-out');
        setTimeout(() => {
            this.remove();
        }, 1000);
    });

    // Disable right-click functionality
    document.addEventListener("contextmenu", function (event) {
        event.preventDefault(); // Disable right-click
        alert(" error 203: lmfao.");
    });

    // Fade in the members list
    let membersList = document.querySelector(".development-checklist");
    membersList.style.opacity = "0"; 
    membersList.style.transition = "opacity 4s"; // Smooth fade-in effect

    setTimeout(() => {
        membersList.style.opacity = "1"; // Slowly fade in after page loads
    }, 500);
});
