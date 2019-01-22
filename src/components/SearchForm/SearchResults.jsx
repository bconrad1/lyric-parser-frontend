import React from 'react';
import _ from 'lodash';

const SearchResults = ({displayList, isSongList, searched}) => {
  if(!displayList || displayList.length === 0){
    return null;
  }
  return (
    <div className={`${searched ? 'searched' : ''} search-result-container`}>
      {_.map(displayList, (item, index) => {
        return (
          <div key={index} className={'item'}>
            {isSongList ? item.fullTitle : item.artist}
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;