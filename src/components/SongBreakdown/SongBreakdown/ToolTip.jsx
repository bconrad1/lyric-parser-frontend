import React from 'react';

const ToolTip = ({xCoord, yCoord, word, wordCount}) => {
  let coordinates = {
    top: `${yCoord}px`,
    left: `${xCoord}px`,
  };

  return (
    <div className={'tool-tip-container'}
         style={coordinates}>
      <span className={'tool-tip-text'}>Word: <b className={'tool-tip-dynamic'}>{word}</b></span>
      <span className={'tool-tip-text'}>Count: <b className={'tool-tip-dynamic'}>{wordCount}</b></span>
    </div>
  );
};

export default ToolTip;