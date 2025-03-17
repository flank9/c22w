// Function to play audio
function playAudio(audioFile) {
  var audio = document.getElementById("member-audio");
  audio.src = audioFile;
  audio.play();
}

// Disable F12 and other key shortcuts
document.addEventListener('keydown', function(event) {
  if (event.key === 'F12' || event.ctrlKey && (event.key === 'U' || event.key === 'I' || event.key === 'S')) {
    event.preventDefault();
    if (!document.getElementById('intro-overlay').classList.contains('fade-out')) {
      alert('skid alert.');
    }
  }
});

// Fade out the intro overlay when clicked
document.getElementById('intro-overlay').addEventListener('click', function() {
  this.classList.add('fade-out');
  setTimeout(() => {
    this.remove();
  }, 1000);
});
