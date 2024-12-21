import React, { useState, useEffect, useRef } from 'react';
import { Leftmenu } from '../Components/Leftmenu';
import Playicon from '../Assets/Images/platicon.png';
import banner2 from '../Assets/Images/BANNER10.png';
import banner6 from '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Assets/Images/tedtalks.png'
function PodcastPage() {
    const [tracks, setTracks] = useState([]);
    const [currentTrack, setCurrentTrack] = useState(null);
    const audioRef = useRef(null);

    const playTrack = (previewUrl) => {
        audioRef.current.src = previewUrl;
        audioRef.current.play();
    }

    const changeSpeed = (speed) => {
        audioRef.current.playbackRate = speed;
    }

    const getTracks = async () => {
        try {
            const data = await fetch("Your API KEY");
            const convertedData = await data.json();
            console.log(convertedData);
            setTracks(convertedData.tracks.items);
        } catch (error) {
            console.error("Error fetching tracks:", error);
        }
    }

    useEffect(() => {
        getTracks();
    }, []);

    return (
        <>
            <div>
                <Leftmenu />
                <div className="bannerbox">
                    <div className="bannerimg">
                        <img src={banner6} alt="" />
                    </div>
                </div>

                <div className="list1">
                    <div className="playimg">
                        <img src={Playicon} alt="" />
                    </div>
                </div>

                <div className="list2">
                    {tracks.map((song, index) => (
                        <div className="menu-itempg" key={index} onClick={() => {
                            playTrack(song.preview_url);
                            setCurrentTrack(song);
                        }}>
                            <img src={song.album.images[0].url} alt="Podcast Artwork" />
                            <div className="item-info">
                                <p>{song.album.name}</p>
                                <p>{song.artists.map(artist => artist.name).join(', ')}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Music Player */}
            <div className="music-player">
                <audio ref={audioRef} controls className="w-100"></audio>
                <div className="text-center">
                    <button onClick={() => changeSpeed(1)} className="btn btn-secondary mx-1">Normal Speed</button>
                    <button onClick={() => changeSpeed(1.5)} className="btn btn-secondary mx-1">1.5x Speed</button>
                    <button onClick={() => changeSpeed(2)} className="btn btn-secondary mx-1">2x Speed</button>
                </div>
                {currentTrack && (
                    <div className="currently-playing">
                        {/* <p>Currently Playing:</p>
                        <p>{currentTrack.title} - {currentTrack.artists.map(artist => artist.name).join(', ')}</p> */}
                    </div>
                )}
            </div>
        </>
    );
}

export default PodcastPage;
