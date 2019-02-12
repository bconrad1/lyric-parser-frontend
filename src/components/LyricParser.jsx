import React, {Component, Fragment} from 'react';
import SearchForm from './SearchForm/SearchForm';
import NavigationHeader from './Navigation/NavigationHeader';
import SongBreakdown from './SongBreakdown/SongBreakdown';

class LyricParser extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'search',
      currentPages: ['search'],
    };
  }

  resetCurrentPage = () => {
    this.setState({
      currentPage: 'search',
      currentPages: ['search'],
    });
  };

  setCurrentPage = (currentPage) => {
    this.setState({
      currentPage: currentPage,
      currentPages: [...this.state.currentPages, currentPage],
    });
  };

  getCurrentPage = () => {
    let {currentPage} = this.state;

    if (currentPage === 'search') {
      return <SearchForm setCurrentPage={this.setCurrentPage}
                         resetCurrentPage={this.resetCurrentPage}/>;
    }
    if(currentPage === 'song') {
      return <SongBreakdown/>
    }
    return null;
  };

  render() {
    let {currentPages, currentPage} = this.state;
    return (
      <Fragment>
        <NavigationHeader currentPage={currentPage}
                          currentPages={currentPages}/>
        <div className='lyric-parser-body'>
          {this.getCurrentPage()}
        </div>
      </Fragment>
    );
  }
};

export default LyricParser;