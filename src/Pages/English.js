import Header from "../Components/Header";
import { Link } from 'react-router-dom';
import { Leftmenu } from "../Components/Leftmenu";
import '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Styles/style.css'

export default function English(){
    return(
        <div>
            <Header />
            <Leftmenu />
            <p>This is a English songs page</p>
            <Link to="/home" className="about-link">
                <button>Home</button>
            </Link>
        </div>
    )
}