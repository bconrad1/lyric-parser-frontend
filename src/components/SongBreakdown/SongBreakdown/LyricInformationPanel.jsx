import React from 'react';

const LyricInformationPanel = ({lyrics}) => {
  let lyricArray = lyrics.words;
  let wordsUnique = lyricArray.length;
  let wordsTotal = 0;
  _.forEach(lyricArray, word => {
    wordsTotal += word.count;
  });

  return (
    <div className={'lyric-information'}>
      <div className={'song-title'}>
        {lyrics.songFullTitle}
      </div>
      <div
        className={'lyric-info-item'}>{'Unique Words: '}
        <span>{wordsUnique}</span>
      </div>
      <div className={'lyric-info-item'}>{'Total Words: '}
        <span>{wordsTotal}</span></div>
    </div>
  );
};

export default LyricInformationPanel;