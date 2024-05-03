import Header from "../Components/Header";
import { Link } from 'react-router-dom';
import { Leftmenu } from "../Components/Leftmenu";
import '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Styles/style.css'

export default function Hindi(){
    return(
        <div className="Body">
            <div className="background">
            <Header />
            <Leftmenu />
            <p>This is a hindi songs page</p>
            <Link to="/home" className="about-link">
                <button>Home</button>
            </Link>
            </div>

        
        </div>
    )
}