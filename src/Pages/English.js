import Header from "../Components/Header";
import { Link } from 'react-router-dom';

import '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Styles/style.css'
import PlaylistDetails from "../PlaylistDetails";
import '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Styles/english.css'
import PlaylistComponent from "../Components/Playlistcomponent";
import TopTracks from "../TopTracks";
export default function English(){
    return(
        <div className="englishbody">
            <Header />
            
            <p>This is an English songs page</p>
            <Link to="/home" className="about-link">
                <button>Home</button>
            </Link>
            <div className="displayplaylist">
            <PlaylistDetails />
            <PlaylistComponent />
            <TopTracks />
            
            </div>
             {/* Include the PlaylistDetails component here */}
        </div>
    )
}
