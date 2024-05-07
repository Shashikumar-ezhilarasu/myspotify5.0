import React, { useState, useEffect } from 'react';
import axios from 'axios';

const token = 'BQCc0pyIQUtqpUPSjLQaQ-S0GqjXHH5ZBVSaYDasfzXYv7p7ZrVJiRyv_7J2BsSLRn49swagbJCpEGpcTymaBWtyftK-0pFPQYslIo0o1q6oVYVnepY';

const TopTracks = () => {
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    const fetchTopTracks = async () => {
      try {
        const response = await axios.get(
          'https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=5',
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        setTopTracks(response.data.items);
      } catch (error) {
        console.error('Error fetching top tracks:', error);
      }
    };

    fetchTopTracks();
  }, []);

  return (
    <div>
      <h2>Top Tracks</h2>
      <ul>
        {topTracks.map(track => (
          <li key={track.id}>
            {track.name} by {track.artists.map(artist => artist.name).join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopTracks;
