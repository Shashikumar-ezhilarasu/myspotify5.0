
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import English from './Pages/English';
import Hindi from './Pages/Hindi';
import Tamil from './Pages/tamil';
import Liked from './Pages/liked';
export default function App(){
  return(
    <div >
      <BrowserRouter >
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/english' element={<English />} />
          <Route path='/hindi' element={<Hindi />} />
          <Route path='/english' element={<English />} />
          <Route path='/tamil' element={<Tamil />} />
          <Route path='/liked' element={<Liked />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}