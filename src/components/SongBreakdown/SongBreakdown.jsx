import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  HorizontalGridLines,
  MarkSeries,
  VerticalGridLines,
  XYPlot,
} from 'react-vis';

export class SongBreakdown extends Component {
  constructor() {
    super();
    this.state = {
      height: (75 / 100) * window.innerHeight,
      width: (85 / 100) * window.innerWidth,
    };
  }

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

  getVisData = () => {
    let lyricsArray = this.props.lyrics.words;
    return _.map(lyricsArray, (word) => {
      return {
        x: Math.random() * 10,
        y: Math.random() * 20,
        size: 10 * word.count,
        color: Math.random() * 10,
        opacity: Math.random() * 0.5 + 0.5,
        word: word.word,
      };
    });
  };

  handleMouseOver = (value) => {
    console.log(value);
  };

  render() {
    let lyrics = this.props.lyrics;
    let visData = this.getVisData();
    if (!visData || !lyrics) {
      return null;
    }
    let markProps = {
      animation: true,
      sizeRange: [5, 25],
      opacityType: 'literal',
      data: visData,
      onNearestXY: value => this.handleMouseOver,
    };
    return (
      <div className={'lyric-container'}>
        <div className={'song-title'}>
          {lyrics.songFullTitle}
        </div>
        <div className={'visualization-container'}>
          <XYPlot className={'visualization-graph-bar'} width={this.state.width}
                  height={this.state.height}>
            <VerticalGridLines/>
            <HorizontalGridLines/>
            <MarkSeries {...markProps}/>
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