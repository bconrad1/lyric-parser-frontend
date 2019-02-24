import React, {Component} from 'react';
import SongBreakdown from './SongBreakdown/SongBreakdown';
import WordFilter from './SongBreakdown/WordFilter';
import {connect} from 'react-redux';
import LyricInformationPanel from './SongBreakdown/LyricInformationPanel';
import _ from 'lodash';

export class LyricInformation extends Component {

  constructor(props) {
    super(props);

    let minWordCount = _.last(props.lyrics.words).count;
    let maxWordCount = _.first(props.lyrics.words).count;

    this.state = {
      currentMin: minWordCount,
      currentMax: maxWordCount,
    };
  }

  handleFilter = (currentMin, currentMax) => {
    this.setState({
      currentMin,
      currentMax,
    });
  };

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
        <WordFilter minWordCount={minWordCount}
                    maxWordCount={maxWordCount}
                    handleFilter={this.handleFilter}/>
        <SongBreakdown currentMin={this.state.currentMin}
                       currentMax={this.state.currentMax}/>
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