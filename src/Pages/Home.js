import Header from "../Components/Header";
import { Link } from 'react-router-dom';
import '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Styles/home.css'
import PlaylistEmbed from "../playlistId";
import PlaylistDetails from "../PlaylistDetails";

export default function Home(){
    return(
        <div>
            <Header />
            <p>This is a Home songs page</p>

            <Link to="/tamil" className="about-link">
                <button>Tamil</button>
            </Link>
            <Link to="/english" className="about-link">
                <button>English</button>
            </Link>
            <Link to="/hindi" className="about-link">
                <button>Hindi</button>
            </Link>

            <Link to="/login">
      <button>Login with Spotify</button>
    </Link>
            <PlaylistEmbed />
            <PlaylistDetails />
        </div>
    )
}