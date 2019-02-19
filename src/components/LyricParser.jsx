import React, {Component, Fragment} from 'react';
import SearchForm from './SearchForm/SearchForm';
import NavigationHeader from './Navigation/NavigationHeader';
import LyricInformation from './SongBreakdown/LyricInformation';

class LyricParser extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'search',
      currentPages: ['search'],
      defaultPage: 'search',
    };
  }

  resetCurrentPage = () => {
    this.setState({
      currentPage: 'search',
      currentPages: ['search'],
    });
  };

  setCurrentPage = (currentPage) => {
    let {defaultPage, currentPages} = this.state;
    if (!currentPages.includes(currentPage)) {
      return this.setState({
        currentPage: currentPage,
        currentPages: [...currentPages, currentPage],
      });
    }
    let newPages = currentPage === defaultPage ? [defaultPage] : currentPages;

    this.setState({
      currentPage: currentPage,
      currentPages: newPages,
    });
  };

  getCurrentPage = () => {
    let {currentPage} = this.state;
    if (currentPage === 'search') {
      return <SearchForm setCurrentPage={this.setCurrentPage}
                         resetCurrentPage={this.resetCurrentPage}/>;
    }
    if (currentPage === 'song') {
      return <LyricInformation/>;
    }
    return null;
  };

  render() {
    let {currentPages, currentPage} = this.state;
    return (
      <Fragment>
        <NavigationHeader currentPage={currentPage}
                          currentPages={currentPages}
                          setCurrentPage={this.setCurrentPage}/>
        <div className='lyric-parser-body'>
          {this.getCurrentPage()}
        </div>
      </Fragment>
    );
  }
};

export default LyricParser;