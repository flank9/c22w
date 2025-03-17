document.addEventListener("DOMContentLoaded", function() {
  // Function to play audio
  function playAudio(audioFile) {
    var audio = document.getElementById("member-audio");
    audio.src = audioFile;
    audio.play();
  
    // Fade out the intro overlay when clicked
  document.getElementById('intro-overlay').addEventListener('click', function() {
    this.classList.add('fade-out');
    setTimeout(() => {
      this.style.display = 'none'; // Ensures the overlay is completely removed
    }, 1000); // Matches the fade-out duration
  });
});
