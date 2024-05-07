import React, { useState, useEffect } from 'react';

// Authorization token that must have been created previously.
const token = 'BQCc0pyIQUtqpUPSjLQaQ-S0GqjXHH5ZBVSaYDasfzXYv7p7ZrVJiRyv_7J2BsSLRn49swagbJCpEGpcTymaBWtyftK-0pFPQYslIo0o1q6oVYVnepY';

const fetchWebApi = async (endpoint, method, body) => {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body)
  });
  return await res.json();
}

const TopTracks = () => {
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    const getTopTracks = async () => {
      try {
        const response = await fetchWebApi('v1/me/top/tracks?time_range=long_term&limit=5', 'GET');
        setTopTracks(response.items);
      } catch (error) {
        console.error('Error fetching top tracks:', error);
      }
    };

    getTopTracks();
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
