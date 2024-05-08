// MusicPlayer.js
import React from 'react';
import '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Components/musicplayer.css'
function MusicPlayer({ audioRef, changeSpeed }) {
  return (
    <div className="music-player fixed-bottom">
      <audio ref={audioRef} controls className="w-100"></audio>
      <div className="text-center">
        <button onClick={() => changeSpeed(1)} className="btn btn-secondary mx-1">Normal Speed</button>
        <button onClick={() => changeSpeed(1.5)} className="btn btn-secondary mx-1">1.5x Speed</button>
        <button onClick={() => changeSpeed(2)} className="btn btn-secondary mx-1">2x Speed</button>
      </div>
    </div>
  );
}

export default MusicPlayer;
