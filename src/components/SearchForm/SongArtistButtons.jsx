import React from 'react';

const SongArtistButtons = ({radioClick, isArtist, isSong}) => {
  return (
    <div className={'search-form-radio-btn'}>
      <form>
        <label className={`${isSong
          ? 'checked'
          : ''} container`}><span className={'radio-label'}>{'Song'}</span>
          <input type="radio" value="song" checked={isSong}
                 onChange={radioClick}/>
          <span className={'radio-btn'}/>
        </label>
        <label className={`${isArtist
          ? 'checked'
          : ''} container`}><span
          className={'radio-label'}>{'Artist'}</span>
          <input type="radio" value="artist" checked={isArtist}
                 onChange={radioClick}/><span
            className={'radio-btn'}/>
        </label>
      </form>
    </div>
  );
};

export default SongArtistButtons;