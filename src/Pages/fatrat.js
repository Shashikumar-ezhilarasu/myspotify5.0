

import { Leftmenu } from "../Components/Leftmenu";
import logo from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Assets/Images/slogo.png'

import Playicon from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Assets/Images/platicon.png'
import fatrat from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Assets/Images/fatrat.jpeg'
export default function Fatrat(){
    return(
        <div>

                <Leftmenu />
            <div className="bannerboxf">
             <img src={fatrat} alt="" />
            <h1>Fatrat</h1>
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