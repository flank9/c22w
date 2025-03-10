const defaultSongIndex = 8;
let defaultSongCurrentTime = 0;
let currentSongIndex = 0; 

const playlist = [{
        title: 'Doxbin - ... [DORM]',
        src: 'audio2.mp3'
    },
    {
        title: 'Headshot - ... [DINERO]',
        src: 'audio.mp3'
    },
    {
        title: 'Elskling - ... [FLANK]',
        src: 'audio4.mp3'
    },
];

const audio = new Audio(playlist[currentSongIndex].src);
audio.loop = false;

function changeSong(index, currentTime = 0) {
    if (currentSongIndex === defaultSongIndex) {
        defaultSongCurrentTime = audio.currentTime;
    }

    currentSongIndex = index;
    audio.src = playlist[currentSongIndex].src;
    audio.currentTime = currentTime;
    audio.play();

    const songTitleElement = document.getElementById('songTitle');
    if (songTitleElement) {
        songTitleElement.innerText = playlist[currentSongIndex].title || 'Unknown Title';
    }
}

function playDefaultSong() {
    changeSong(defaultSongIndex, defaultSongCurrentTime);
}

function removeOverlay() {
    const overlay = document.getElementById("overlay");
    if (overlay) {
        overlay.style.display = 'none';
        playDefaultSong();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const songTitleElement = document.getElementById('songTitle');
    if (songTitleElement) {
        songTitleElement.innerText = 'None';
    }
});

function playRandomSong() {
    const randomIndex = getRandomSongIndex();
    changeSong(randomIndex);
}

function getRandomSongIndex() {
    return Math.floor(Math.random() * playlist.length);
}

playlist.forEach((song) => {
    const audioPreload = new Audio(song.src);
    audioPreload.load();
});
