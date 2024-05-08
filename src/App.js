import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TrackCard from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Components/Trackcard.js';
import MusicPlayer from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Components/Musicplayer.js';
import Home from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Pages/Home.js';
import English from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Pages/English.js';
import Hindi from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Pages/Hindi.js';
import Tamil from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Pages/tamil.js';
import Liked from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Pages/liked.js';
import Podcast from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Pages/Podcast.js';
import Fatrat from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Pages/fatrat.js';
import PunjabiPage from './Pages/Pungabi';

function App() {
  return (
    <div>
      <BrowserRouter>
        
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/english' element={<English />} />
          <Route path='/hindi' element={<Hindi />} />
          <Route path='/tamil' element={<Tamil />} />
          <Route path='/liked' element={<Liked />} />
          <Route path='/podcast' element={<Podcast />} />
          <Route path='/fatrat' element={<Fatrat />} />
          <Route path='/punjabi' element={<PunjabiPage />} />
        </Routes>
        {/* <div className="container">
          <div className="row">

            {tracks.map(track => (
              <TrackCard key={track.id} track={track} playTrack={playTrack} />
            ))}
          </div>
        </div> */}
        
      </BrowserRouter>
    </div>
  );
}

export default App;
