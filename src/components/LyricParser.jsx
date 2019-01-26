import React, {Component} from 'react';
import ArtistSearch from './SearchForm/SearchForm';
import NavigationHeader from './Navigation/NavigationHeader';
class LyricParser extends Component {

  constructor(){
    super();
    this.state = {
      currentPage: 'home'
    }
  }
  render() {
    return (
      <div className='lyric-parser-body'>
        {/*<NavigationHeader currentPage={this.state.currentPage}/>*/}
        <ArtistSearch/>
      </div>
    );
  }
};

export default LyricParser;