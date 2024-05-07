import Header from "../Components/Header";
import { Link } from 'react-router-dom';
import { Leftmenu } from "../Components/Leftmenu";
import logo from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Assets/Images/slogo.png'
import MyPlaylists from "../Components/MyPlaylist";
import Playicon from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Assets/Images/platicon.png'
import '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Styles/tamil.css'
import fatrat from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Assets/Images/banner2.jpeg'
import banner2 from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Assets/Images/BANNER10.png'
import leo from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Assets/Images/leo.jpeg'
import don from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Assets/Images/don.jpeg'
import photo3 from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Assets/Images/adiye.jpeg'
import photo4 from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Assets/Images/jailer.jpeg'
import photo5 from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Assets/Images/d2.jpeg'
import cover3 from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Assets/Images/cover1.jpeg'
import cover4 from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Assets/Images/cover2.jpeg'
import PlaylistDetails from "../PlaylistDetails";

export default function Tamil(){
    return(
        <div>

                <Leftmenu />
            <div className="bannerbox">
             
            {/* <h1>Tamil Hot Hit's</h1> */}
            <div className="bannerimg">
                <img src={banner2} alt="" />
                </div>
            
            </div>
            
            <div className="list1">
            <div className="playimg">
                <img src={Playicon} alt="" />
                </div>
            </div>
            <div className="list2">
                
            <div className="menu-itempg">
                <img src={leo} alt="Liked Songs" />
                <div className="item-info">
                
                <p1>Badass (from "Leo") {"\t"} anirudh ravichander</p1>
                <br></br>
                <p2>hello</p2>
                </div>
            </div>
            <div className="menu-itempg">
                <img src={don} alt="Liked Songs" />
                <div className="item-info">
                <p>Jalabulajangu (from "Don") {"\t"} anirudh ravichander</p>
                <p></p>
                </div>
            </div>
            <div className="menu-itempg">
                <img src={photo3} alt="Liked Songs" />
                <div className="item-info">
                <p>Adiye - From "Bachelor"</p>
                <p></p>
                </div>
            </div>
            <div className="menu-itempg">
                <img src={photo4} alt="Liked Songs" />
                <div className="item-info">
                <p>Jujubee</p>
                <p></p>
                </div>
            </div>
            <div className="menu-itempg">
                <img src={photo5} alt="Liked Songs" />
                <div className="item-info">
                <p>Megham Karukatha</p>
                <p></p>
                </div>
            </div>
            <div className="menu-itempg">
                <img src={cover4} alt="Liked Songs" />
                <div className="item-info">
                <p>Liked Songs</p>
                <p></p>
                </div>
            </div>
            <div className="menu-itempg">
                <img src={cover3} alt="Liked Songs" />
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
        <PlaylistDetails  />
            
        </div>
        </div>
    )
}