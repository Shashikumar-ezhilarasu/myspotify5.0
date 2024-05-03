import React from 'react'
import logo from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Assets/Images/slogo.png'
import '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Components/Leftmenu.css'
import like from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Assets/Images/liked.jpeg'
import spb from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Assets/Images/spb.jpeg'
function Leftmenu() {
  return (
    <div className='leftMenu'>
        <div className="logoContainer">
           <img src={logo} alt="" /><h3>Spotify</h3>
        </div>
        <input type="text" className="searchbox" placeholder="Search for songs..." />


        
        <div class="sidebar">
  <button class="sidebar-btn" href = "">Playlists</button>
  <button class="sidebar-btn">Podcasts & Shows</button>
  <button class="sidebar-btn">Albums</button>
  <div class="menu-items">
    <h3>Menu Items</h3>
    {/* <ul>
      <li> <img src="" alt="" />Liked Songs</li>
      <li>Your Episodes</li>
      <li>English Songs</li>
      <li>Millennium Melodies</li>
      <li>Gramathu Kaadhal</li>
      <li>Hindi Songs</li>
      <li>FatRat</li>
      <li>Justin Bieber</li>
      
    </ul> */}
        <div className="menu-item">
                <img src={like} alt="Liked Songs" />
                <div className="item-info">
                <p>Liked Songs</p>
                <p></p>
                </div>
            </div>
            <div className="menu-item">
                <img src={logo} alt="Your Episodes" />
                <div className="item-info">
                <p>Your Episodes</p>
                <p>Personal podcasts</p>
                </div>
            </div>
            <div className="menu-item">
                <img src={like} alt="Your Episodes" />
                <div className="item-info">
                <p>Your Episodes</p>
                <p>Personal podcasts</p>
                </div>
            </div>
            <div className="menu-item">
                <img src={logo} alt="Your Episodes" />
                <div className="item-info">
                <p>SPB Hits(tamil)</p>
                <p></p>
                </div>
            </div>
            <div className="menu-item">
                <img src={logo} alt="Your Episodes" />
                <div className="item-info">
                <p>SPB Hits(tamil)</p>
                <p></p>
                </div>
            </div>
            <div className="menu-item">
                <img src={spb} alt="Your Episodes" />
                <div className="item-info">
                <p>SPB Hits(tamil)</p>
                <p></p>
                </div>
            </div>
            <div className="menu-item">
                <img src={spb} alt="Your Episodes" />
                <div className="item-info">
                <p>SPB Hits(tamil)</p>
                <p></p>
                </div>
            </div>
            <div className="menu-item">
                <img src={spb} alt="Your Episodes" />
                <div className="item-info">
                <p>SPB Hits(tamil)</p>
                <p></p>
                </div>
            </div>
            <div className="menu-item">
                <img src={spb} alt="Your Episodes" />
                <div className="item-info">
                <p>SPB Hits(tamil)</p>
                <p></p>
                </div>
            </div>
            <div className="menu-item">
                <img src={logo} alt="Your Episodes" />
                <div className="item-info">
                <p>Your Episodes</p>
                <p>Personal podcasts</p>
                </div>
            </div>
            <div className="menu-item">
                <img src={logo} alt="Your Episodes" />
                <div className="item-info">
                <p>Your Episodes</p>
                <p>Personal podcasts</p>
                </div>
            </div>
            
            
            
        </div>
        <div className="menu-item">
                <img src={logo} alt="Your Episodes" />
                <div className="item-info">
                <p>Your Episodes</p>
                <p>Personal podcasts</p>
                </div>
            </div>
        </div>
        <div className="menu-item">
                <img src={logo} alt="Your Episodes" />
                <div className="item-info">
                <p>Your Episodes</p>
                <p>Personal podcasts</p>
                </div>
            </div>
            
        </div>
        

    
  


  )
}

export {Leftmenu};
