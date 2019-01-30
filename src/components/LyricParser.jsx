import React, {Component, Fragment} from 'react';
import SearchForm from './SearchForm/SearchForm';
import NavigationHeader from './Navigation/NavigationHeader';

class LyricParser extends Component {

  constructor() {
    super();
    this.state = {
      currentPage: 'search',
      currentPages: ['search']
    };
  }

  setCurrentPage = (currentPage) => {
    this.setState({
      currentPage: currentPage,
      currentPages: [...this.state.currentPages, currentPage]
    });
  };

  render() {
    let {currentPages, currentPage} = this.state;
    console.log(currentPages)
    return (
      <Fragment>
        <NavigationHeader currentPage={currentPage} currentPages={currentPages}/>
        <div className='lyric-parser-body'>
          <SearchForm setCurrentPage={this.setCurrentPage}/>
        </div>
      </Fragment>
    );
  }
};

export default LyricParser;