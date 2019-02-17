import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  Hint,
  HorizontalGridLines,
  MarkSeries,
  VerticalGridLines,
  XYPlot,
} from 'react-vis';
function getRandomData() {
  return new Array(100).fill(0).map(row => ({
    x: Math.random() * 10,
    y: Math.random() * 20,
    size: Math.random() * 10,
    color: Math.random() * 10,
    opacity: Math.random() * 0.5 + 0.5
  }));
}
export class SongBreakdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: (75 / 100) * window.innerHeight,
      width: (85 / 100) * window.innerWidth,
      value: false,
      data: this.getVisData(props.lyrics),
    };
  }

  getVisData = (lyrics) => {
    let lyricsArray = lyrics.words;
    return _.map(lyricsArray, (word) => {
      return {
        x: Math.random() * 10,
        y: Math.random() * 20,
        size: 10 * word.count,
        color: Math.random() * 10,
        opacity: Math.random() * 0.5 + 0.5,
        word: word.word,
        wordCount: word.count,
      };
    });
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    let innerHeight = window.innerHeight;
    let innerWidth = window.innerWidth;

    this.setState({
      height: (75 / 100) * innerHeight,
      width: (85 / 100) * innerWidth,
    });
  };

  render() {
    let lyrics = this.props.lyrics;
    if (!this.state.data || !lyrics) {
      return null;
    }
    let markProps = {
      animation: true,
      sizeRange: [5, 30],
      opacityType: 'literal',
      data: this.state.data,
    };

    return (
      <div className={'lyric-container'}>
        <div className={'song-title'}>
          {lyrics.songFullTitle}
        </div>
        <div className={'break-line'}>
        <div>

        </div>
      </div>
        <div className={'visualization-container'}>
          <XYPlot className={'visualization-graph-bar'} width={this.state.width}
                  height={this.state.height}
                  onMouseLeave={() => this.setState({value: false})}>
            <VerticalGridLines/>
            <HorizontalGridLines/>
            <MarkSeries {...markProps}
                        onValueMouseOver={(dataPoint, event) => {

                        }}/>
          </XYPlot>
        </div>
      </div>);
  }
}

SongBreakdown.propTypes = {
  lyrics: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    lyrics: state.songInfo.lyrics,
  };
}

export default connect(mapStateToProps)(SongBreakdown);