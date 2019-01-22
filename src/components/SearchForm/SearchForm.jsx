import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import * as artistSearchAction from '../../redux/actions/artistAction';
import * as songSearchAction from '../../redux/actions/songAction';
import {bindActionCreators} from 'redux';
import SearchResults from './SearchResults';
import SongArtistButtons from './SongArtistButtons';
import {FaSearch} from 'react-icons/fa';

class SearchForm extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(prevState.searched)
    if (nextProps.songList.songs !== prevState.songs && prevState.searched) {
      return ({
        songs: nextProps.songList.songs,
        artists: []
      });
    }

    if (nextProps.artistList.artists !== prevState.artists && prevState.searched) {
      return ({
        artists: nextProps.artistList.artists,
        songs: []
      });
    }

    return null;
  }

  constructor() {
    super();

    this.state = {
      currentSearch: '',
      songs: [],
      artists: [],
      isSong: true,
      isArtist: false,
      searched: false,
    };
  }

  onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.handleSubmit();
    }
  };

  handleSubmit = () => {
    let searchText = this.state.currentSearch;

    if (searchText) {
      if (this.state.isArtist) {
        this.props.artistActions.getArtists(searchText);
      } else {
        this.props.songActions.getSongs(searchText);
      }

      this.setState({
        searched: true,
      });
    }
  };

  handleInput = (event) => {
    this.setState({
      currentSearch: event.target.value,
    });
  };

  handleRadioCheck = (event) => {
    let checkValue = event.target.value;
    let {isSong, isArtist} = this.state;
    this.setState({
      isSong: checkValue === 'song' && !isSong,
      isArtist: checkValue === 'artist' && !isArtist,
      currentSearch: '',
      songs: [],
      artist: [],
      searched: false
    });
  };

  render() {
    let currentSearchTerm = this.state.currentSearch;
    let songList = this.state.songs;
    let artistList = this.state.artists;
    return (
      <Fragment>
        <div className={`${this.state.searched
          ? 'searched'
          : ''} search-radio-form`}>
          <SongArtistButtons
            radioClick={this.handleRadioCheck}
            isSong={this.state.isSong}
            isArtist={this.state.isArtist}/>
          <div className={'search-form-container'}>
            <form autoComplete="off">
              <div className={'search-form'}>
                <input type="text" name="artist" placeholder={this.state.isSong
                  ? 'SEARCH SONG'
                  : 'SEARCH ARTIST'}
                       value={currentSearchTerm} onChange={this.handleInput}
                       onKeyDown={this.onKeyDown}/>
              </div>
              <div onClick={this.handleSubmit} className={'submit-btn'}>
                <FaSearch/></div>
            </form>
          </div>
        </div>
        <SearchResults displayList={this.state.isArtist ? artistList : songList}
                       isSongList={this.state.isSong}
                       searched={this.state.searched}/>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    artistList: state.artistInfo,
    songList: state.songInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    artistActions: bindActionCreators(artistSearchAction, dispatch),
    songActions: bindActionCreators(songSearchAction, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);