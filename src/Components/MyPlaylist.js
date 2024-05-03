import React from 'react';
import cover1 from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Assets/Images/cover1.jpeg';
import cover2 from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Assets/Images/cover2.jpeg';

function MyPlaylists() {
    return (
        <div>
            <h1>My Playlists</h1>
            <section className="playlist-section">
                <h2>Featured Playlists</h2>
                <div className="playlist-container">
                    <div className="playlist-item" data-src="assets/songs/Tamil1.mp3">
                        <img src={cover1} alt="Playlist Cover" />
                        <h3>Playlist Name</h3>
                    </div>
                    <div className="playlist-item" data-src="assets/songs/Tamil2.mp3">
                        <img src={cover2} alt="Playlist Cover" />
                        <h3>Playlist Name</h3>
                    </div>
                    {/* Add more playlist items */}
                </div>
            </section>

            <section className="player-section">
                <h2>Now Playing</h2>
                <audio id="audioPlayer" controls>
                    Your browser does not support the audio element.
                </audio>
            </section>

            {/* Another playlist item */}
            <div className="playlist-item" data-src="songs/Tamil1.mp3">
                <img src={cover1} alt="Playlist Cover" />
                <h3>Playlist Name</h3>
            </div>
        </div>
    );
}

export default MyPlaylists;
