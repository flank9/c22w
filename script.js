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

function createFallingFlakes() {
  const flakesContainer = document.createElement('div');
  flakesContainer.classList.add('falling-flakes');
  document.body.appendChild(flakesContainer);

  setInterval(() => {
    const flake = document.createElement('div');
    flake.classList.add('flake');


    flake.style.left = `${Math.random() * window.innerWidth}px`;
    flake.style.animationDuration = `${Math.random() * 3 + 2}s`; 

    flakesContainer.appendChild(flake);

   
    setTimeout(() => {
      flake.remove();
    }, 5000); 
  }, 200); 
}
createFallingFlakes();
