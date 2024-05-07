import React, { useState, useEffect } from 'react';

const PlaylistComponent = () => {
  const [playlistData, setPlaylistData] = useState(null);

  useEffect(() => {
    const fetchPlaylistData = async () => {
      try {
        const response = await fetch('https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n', {
          headers: {
            'Authorization': 'Bearer BQCc0pyIQUtqpUPSjLQaQ-S0GqjXHH5ZBVSaYDasfzXYv7p7ZrVJiRyv_7J2BsSLRn49swagbJCpEGpcTymaBWtyftK-0pFPQYslIo0o1q6oVYVnepY'
          }
        });
        const data = await response.json();
        setPlaylistData(data);
      } catch (error) {
        console.error('Error fetching playlist data:', error);
      }
    };

    fetchPlaylistData();
  }, []);

  return (
    <div>
      {playlistData ? (
        <div>
          <h2>{playlistData.name}</h2>
          <p>Description: {playlistData.description}</p>
          <p>Owner: {playlistData.owner.display_name}</p>
          {/* Render other playlist details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PlaylistComponent;
