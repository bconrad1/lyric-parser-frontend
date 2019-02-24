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
import ToolTip from './ToolTip';

export class SongBreakdown extends Component {
  constructor(props) {
    super(props);
    let data = this.getVisDataUnordered(props.lyrics, props.currentMin,
      props.currentMax);
    this.state = {
      height: (75 / 100) * window.innerHeight,
      width: (85 / 100) * window.innerWidth,
      value: false,
      currentMax: props.currentMax,
      currentMin: props.currentMin,
      originalData: data,
      data,
      showToolTip: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentMax !== prevProps.currentMax ||
      this.props.currentMin !== prevProps.currentMin) {
      this.setState({
        data: this.refineVisualizationDate(this.props.currentMin,
          this.props.currentMax),
      });
    }
  }

  refineVisualizationDate = (min, max) => {
    return _.filter(this.state.originalData, word => {
      return word.wordCount >= min && word.wordCount <= max;
    });
  };

  getVisDataUnordered = (lyrics) => {
    return _.map(lyrics.words, (word) => {
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

  onMouseOver = (node, event) => {
    if(!this.state.showToolTip) {
      this.setState({
        showToolTip: true,
        toolTipX: event.event.clientX,
        toolTipY: event.event.clientY,
        toolTipWord: node.word,
        toolTipWordCount: node.wordCount,
      });
    }
  };
  onMouseOut = () => {
    this.setState({
      showToolTip: false,
    });
  };

  render() {
    let {lyrics, currentMin, currentMax} = this.props;
    if (!this.state.data || !lyrics) {
      return null;
    }

    let sizeRange = [5, 30];
    if (currentMin >= currentMax / 2) {
      sizeRange = [15, 50];
    }
    let markProps = {
      animation: false,
      sizeRange: sizeRange,
      opacityType: 'literal',
    };

    return (
      <div className={'lyric-container'}>
        <div className={'visualization-container'}>
          {this.state.showToolTip ? <ToolTip
            xCoord={this.state.toolTipX}
            yCoord={this.state.toolTipY}
            word={this.state.toolTipWord}
            wordCount={this.state.toolTipWordCount}/> : null}
          <XYPlot className={'visualization-graph-bar'} width={this.state.width}
                  height={this.state.height}
                  onMouseLeave={() => this.setState({value: false})}>
            <VerticalGridLines/>
            <HorizontalGridLines/>
            <MarkSeries {...markProps}
                        data={this.state.data}
                        onValueMouseOver={this.onMouseOver}
                        onValueMouseOut={this.onMouseOut}/>
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