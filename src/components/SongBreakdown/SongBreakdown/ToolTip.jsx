import React from 'react';

const ToolTip = ({xCoord, yCoord, word, wordCount}) => {
  let coordinates = {
    top: `${yCoord}px`,
    left: `${xCoord}px`
  };

  return(
    <div className={'tool-tip-container'}
        style={coordinates}>
      <span className={'tool-tip-text'}>{`Word: ${word}`}</span>
      <span className={'tool-tip-text'}>{`Count: ${wordCount}`}</span>
    </div>
  );
}

export default ToolTip;