// Function to play audio
function playAudio(audioFile) {
  var audio = document.getElementById("member-audio");
  audio.src = audioFile;
  audio.play();
}

// Prevent right-click and display a fake error
document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
  if (!document.getElementById('intro-overlay').classList.contains('fade-out')) {
    alert('Error: Right-click is disabled. Unauthorized access attempt detected.');
  }
});

// Disable F12 and other key shortcuts
document.addEventListener('keydown', function(event) {
  if (event.key === 'F12' || event.ctrlKey && (event.key === 'U' || event.key === 'I' || event.key === 'S')) {
    event.preventDefault();
    if (!document.getElementById('intro-overlay').classList.contains('fade-out')) {
      alert('Error: Developer tools are disabled.');
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
