import React, {Component, Fragment} from 'react';
import SongBreakdown from './SongBreakdown/SongBreakdown';
import WordFilter from './SongBreakdown/WordFilter';
import {connect} from 'react-redux';
import LyricInformationPanel from './SongBreakdown/LyricInformationPanel';
import _ from 'lodash';

export class LyricInformation extends Component {
  render() {
    let {lyrics} = this.props;
    if (!lyrics) {
      return null;
    }
    let minWordCount = _.last(lyrics.words).count;
    let maxWordCount = _.first(lyrics.words).count;
    return (
      <div className={'lyric-information-container'}>
        <LyricInformationPanel
          lyrics={this.props.lyrics}/>
        <WordFilter minWordCount={minWordCount} maxWordCount={maxWordCount}/>
        <SongBreakdown/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lyrics: state.songInfo.lyrics,
  };
}

export default connect(mapStateToProps)(LyricInformation);