
import React from 'react';
import '/Users/shashikumarezhil/Documents/Spotify5.0/myspotify/src/Components/trackcard.css'
function TrackCard({ track, playTrack }) {
  return (
    <div className="col-md-4 mb-4" key={track.id}>
      <div className="card">
        <img
          src={track.album.images[0].url}
          className="card-img-top"
          alt={track.name}
          onClick={() => playTrack(track.preview_url)}
          style={{ cursor: 'pointer' }}
        />
        <div className="card-body">
          <h5 className="card-title">{track.name}</h5>
          <p className="card-text">Artist: {track.artists.map(artist => artist.name).join(', ')}</p>
          <a href={track.external_urls.spotify} className="btn btn-primary">Listen on Spotify</a>
        </div>
      </div>
    </div>
  );
}

export default TrackCard;
