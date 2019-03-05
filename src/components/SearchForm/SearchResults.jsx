import React, {Component} from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import * as songSearchAction from '../../redux/actions/songAction';
import * as artistSearchAction from '../../redux/actions/artistAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

export class SearchResults extends Component {
  searchLyrics = (song) => {
    this.props.songActions.getLyrics(song.id).then(() => {
      this.props.setCurrentPage('song');
    });
  };

  searchArtists = (artist) => {
    let artistId = artist.artistId;
    this.props.artistActions.getArtistsSongs(artistId).then(()=>{
      this.props.setCurrentPage('artist');
    });
  };

  render() {
    let {displayList, isSongList, searched} = this.props;
    if (!displayList || displayList.length === 0) {
      return null;
    }
    return (
      <div className={`${searched ? 'searched' : ''} search-result-container`}>
        {_.map(displayList, (item, index) => {
          return (
            <div key={index} className={'item'}
                 onClick={() => isSongList ? this.searchLyrics(item) : this.searchArtists(item)}>
              {isSongList ? item.fullTitle : item.artist}
            </div>
          );
        })}
      </div>
    );
  }
}

SearchResults.propTypes = {
  displayList: PropTypes.array,
  isSongList: PropTypes.bool,
  searched: PropTypes.bool,
  setCurrentPage: PropTypes.func,
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    songActions: bindActionCreators(songSearchAction, dispatch),
    artistActions: bindActionCreators(artistSearchAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);