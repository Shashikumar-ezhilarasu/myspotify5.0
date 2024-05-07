import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlaylistDetails = () => {
  const [playlist, setPlaylist] = useState(null);
  const playlistId = '3cEYpjA9oz9GiPac4AsH4n'; // ID of the playlist you want to fetch

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, {
          headers: {
            Authorization: 'Bearer BQCc0pyIQUtqpUPSjLQaQ-S0GqjXHH5ZBVSaYDasfzXYv7p7ZrVJiRyv_7J2BsSLRn49swagbJCpEGpcTymaBWtyftK-0pFPQYslIo0o1q6oVYVnepY',
          },
        });
        setPlaylist(response.data);
      } catch (error) {
        console.error('Error fetching playlist:', error);
      }
    };

    fetchPlaylist();
  }, []);

  return (
    <div>
      {playlist ? (
        <div>
          <h2>{playlist.name}</h2>
          <p>{playlist.description}</p>
          {/* Render other playlist details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PlaylistDetails;
