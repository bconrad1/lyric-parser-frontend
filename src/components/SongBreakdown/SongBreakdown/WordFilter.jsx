import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class WordFilter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      min: props.minWordCount,
      max: props.maxWordCount,
      currentMin: props.minWordCount,
      currentMax: props.maxWordCount,
    };
  }



  render() {
    let {max, min, currentMax, currentMin} = this.state;
    return (
      <div className={'filter-container'}>
        <form>
          <div className={'btn'}
               onClick={() => {
                 this.setState({currentMax: max, currentMin: min});
                 this.props.handleFilter(min, max);
               }}
          >{'Reset'}</div>
          <div className={'form-input-container'}>
            <label className={'form-input-label'}>Min</label>
            <input type={'text'} min={min}
                   value={currentMin}
                   placeholder={currentMin}
                   onChange={(e) => this.setState({currentMin: parseInt(e.target.value)})}
                   className={'form-input-count'}/>
          </div>
          <div className={'form-input-container'}>
            <label className={'form-input-label'}>Max</label>
            <input type={'text'} max={max}
                   placeholder={max}
                   value={currentMax}
                   onChange={(e) => this.setState({currentMax: parseInt(e.target.value)})}
                   className={'form-input-count'}/>
          </div>
          <div className={'btn'}
               onClick={() => this.props.handleFilter(currentMin, currentMax)}
          >{'Filter'}</div>
        </form>
      </div>
    );
  }
};

WordFilter.propTypes = {
  minWordCount: PropTypes.number,
  maxWordCount: PropTypes.number
}