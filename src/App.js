import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import English from './Pages/English';
import Hindi from './Pages/Hindi';
import Tamil from './Pages/tamil';
import Liked from './Pages/liked';
import Podcast from './Pages/Podcast';
import Fatrat from './Pages/fatrat';
import TopTracks from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/TopTracks.js';

import Login from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Pages/Login.js';




export default function App() {
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
          <Route path='/top-tracks' element={<TopTracks />} /> {/* Route for displaying top tracks */}
          <Route path='/login' element={<Login/>} /> {/* Route for authentication */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}
