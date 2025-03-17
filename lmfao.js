document.getElementById('enter-overlay').addEventListener('click', function() {
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
document.addEventListener("contextmenu", function (event) {
    event.preventDefault(); // Disable right-click
    alert(" error 741: dumb nigga."); // Show error message
});

document.addEventListener("DOMContentLoaded", function () {
    let membersList = document.querySelector(".development-checklist");
    membersList.style.opacity = "0"; // Start hidden
    membersList.style.transition = "opacity 3s"; // Smooth fade-in effect

    setTimeout(() => {
        membersList.style.opacity = "1"; // Slowly fade in after page loads
    }, 500);
});
