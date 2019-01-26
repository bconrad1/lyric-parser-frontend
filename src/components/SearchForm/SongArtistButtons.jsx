import React from 'react';

const SongArtistButtons = ({radioClick, isArtist, isSong}) => {
  return (
      <div className="skill-toggle-container">
        <div className="inner-container" onClick={radioClick}>
          <div className= {`toggle ${isSong ? 'toggled' : ''}`}>
            <p>Artist</p>
          </div>
          <div className={`toggle ${isArtist ? 'toggled' : ''}`}>
            <p>Song</p>
          </div>
          <div className={`toggle-background ${isArtist ? 'toggled-right' : 'toggle-left'}`}/>
        </div>
      </div>
  );
};

export default SongArtistButtons;