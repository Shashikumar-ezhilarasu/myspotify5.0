import React from 'react'
import logo from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Assets/Images/slogo.png'
import '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Components/Leftmenu.css'
import like from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Assets/Images/liked.jpeg'
import spb from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Assets/Images/spb.jpeg'
import { Link } from 'react-router-dom';
import tedx from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Assets/Images/tedx.jpeg'
import fatrat from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Assets/Images/fatrat.jpeg'
import rahaman from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Assets/Images/rahaman.jpeg'
import remo from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Assets/Images/remo.jpeg'


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
    <h3>Your Library</h3>
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
            <Link to="/podcast">
                <img src={tedx} alt="Your Episodes" />
                </Link>
                <div className="item-info">
                <p>Your Episodes</p>
                <p>Personal podcasts</p>
                </div>
            </div>
            <div className="menu-item">
                
                <img src={fatrat} alt="Your Episodes" />
                <div className="item-info">
                <p>The Fat Rat</p>
                <p></p>
                </div>
            </div>
            <div className="menu-item">
                <img src={spb} alt="Your Episodes" />
                <div className="item-info">
                <p>SPB Hits(tamil)</p>
                
                </div>
            </div>
            <div className="menu-item">
                <img src={rahaman} alt="Your Episodes" />
                <div className="item-info">
                <p>Rahaman vibes</p>
                <p></p>
                </div>
            </div>
            <div className="menu-item">
                <img src={remo} alt="Your Episodes" />
                <div className="item-info">
                <p>Remo (Original motion..)</p>
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





//BQALGJzVK3liPiz9hcqHwqe3QUM_gNwvEKQ0v8eDpOx_8eVgf3Spl279QJ8DofiIiA6gPjyFd66gq3bzkmclg-UDkoBfZ4ckkSmBEVUxcxHf_2Enjow

// curl --request GET \
//   --url https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n \
//   --header 'Authorization: Bearer BQALGJzVK3liPiz9hcqHwqe3QUM_gNwvEKQ0v8eDpOx_8eVgf3Spl279QJ8DofiIiA6gPjyFd66gq3bzkmclg-UDkoBfZ4ckkSmBEVUxcxHf_2Enjow'


// curl -X POST "https://accounts.spotify.com/api/token" \
//      -H "Content-Type: application/x-www-form-urlencoded" \
//      -d "grant_type=client_credentials&client_id=024ae176a1ba48738fe7717211279b06&client_secret=d5a784767d6245778f00c6d0df71f6e0"
