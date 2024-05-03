document.addEventListener('DOMContentLoaded', function() {
    const playlistItems = document.querySelectorAll('.playlist-item');
    const audioPlayer = document.getElementById('audioPlayer');

    playlistItems.forEach(item => {
        item.addEventListener('click', function() {
            const audioSrc = item.getAttribute('data-src');
            audioPlayer.src = audioSrc;
            audioPlayer.play();
        });
    });
});
