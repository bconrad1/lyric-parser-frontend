import React, {Component} from 'react';
import {connect} from 'react-redux';

export class ArtistSongList extends Component{

    render(){
      console.log(this.props.songList)
      return null;
    }
}

function mapStateToProps(state) {
  return {songList: state.artistInfo.artistSongs};
}
export default connect(mapStateToProps)(ArtistSongList);