import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const SearchResults = ({displayList, isSongList, searched, setCurrentPage}) => {
  if(!displayList || displayList.length === 0){
    return null;
  }
  return (
    <div className={`${searched ? 'searched' : ''} search-result-container`}>
      {_.map(displayList, (item, index) => {
        return (
          <div key={index} className={'item'} onClick={() => setCurrentPage('song')}>
            {isSongList ? item.fullTitle : item.artist}
          </div>
        );
      })}
    </div>
  );
};

SearchResults.propTypes = {
  displayList: PropTypes.array,
  isSongList: PropTypes.bool,
  searched: PropTypes.bool,
  setCurrentPage: PropTypes.func
};

export default SearchResults;