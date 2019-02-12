import React, {Component} from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import * as songSearchAction from '../../redux/actions/songAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

export class SearchResults extends Component {
  searchLyrics = (song) => {
    this.props.songActions.getLyrics(song.id).then(() => {
      this.props.setCurrentPage('song');
    });
  };

  render() {
    let {displayList, isSongList, searched} = this.props;
    if (!displayList || displayList.length === 0) {
      return null;
    }
    return (
      <div className={`${searched ? 'searched' : ''} search-result-container`}>
        {_.map(displayList, (song, index) => {
          return (
            <div key={index} className={'item'}
                 onClick={() => this.searchLyrics(song)}>
              {isSongList ? song.fullTitle : song.artist}
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);