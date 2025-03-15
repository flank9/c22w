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
