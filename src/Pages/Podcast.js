import Header from "../Components/Header";
import { Link } from 'react-router-dom';
import { Leftmenu } from "../Components/Leftmenu";
import logo from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Assets/Images/slogo.png'
import MyPlaylists from "../Components/MyPlaylist";
import Playicon from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Assets/Images/platicon.png'
import '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Styles/podcast.css'
import tedx from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Assets/Images/tedx.jpeg'
export default function Podcast(){
    return(
        <div>

                <Leftmenu />
            <div className="bannerboxpd">
             <img src={tedx} alt="" />
             <h1></h1>
            </div>
            
            <div className="list1">
            <div className="playimg">
                <img src={Playicon} alt="" />
                </div>
            </div>
            <div className="list2">
                
            <div className="menu-itempg">
                <img src={logo} alt="Liked Songs" />
                <div className="item-info">
                <p>Liked Songs</p>
                <p></p>
                </div>
            </div>
            <div className="menu-itempg">
                <img src={logo} alt="Liked Songs" />
                <div className="item-info">
                <p>Liked Songs</p>
                <p></p>
                </div>
            </div>
            <div className="menu-itempg">
                <img src={logo} alt="Liked Songs" />
                <div className="item-info">
                <p>Liked Songs</p>
                <p></p>
                </div>
            </div>
            <div className="menu-itempg">
                <img src={logo} alt="Liked Songs" />
                <div className="item-info">
                <p>Liked Songs</p>
                <p></p>
                </div>
            </div>
            <div className="menu-itempg">
                <img src={logo} alt="Liked Songs" />
                <div className="item-info">
                <p>Liked Songs</p>
                <p></p>
                </div>
            </div>
            <div className="menu-itempg">
                <img src={logo} alt="Liked Songs" />
                <div className="item-info">
                <p>Liked Songs</p>
                <p></p>
                </div>
            </div>
            <div className="menu-itempg">
                <img src={logo} alt="Liked Songs" />
                <div className="item-info">
                <p>Liked Songs</p>
                <p></p>
                </div>
            </div>
            <div className="menu-itempg">
                <img src={logo} alt="Liked Songs" />
                <div className="item-info">
                <p>Liked Songs</p>
                <p></p>
                </div>
            </div>
            <div className="menu-itempg">
                <img src={logo} alt="Liked Songs" />
                <div className="item-info">
                <p>Liked Songs</p>
                <p></p>
                </div>
            </div>
            <div className="menu-itempg">
                <img src={logo} alt="Liked Songs" />
                <div className="item-info">
                <p>Liked Songs</p>
                <p></p>
                </div>
            </div>

            
        </div>
        </div>
    )
}