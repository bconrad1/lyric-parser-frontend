import * as types from './actionTypes';

export function receiveArtists(json) {
  return {type: types.RECEIVE_ARTIST_DATA, artists: json};
}

export function receiveArtistSongs(json){
  return {type: types.RECEIVE_ARTIST_SONGS, artistSongs: json}
}

export function getArtists(searchTerm) {
  return dispatch => {
    return fetch(`http://localhost:3001/api/artist/search/${searchTerm}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    }).then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        return ({});
      }
    }).then(json => {
      dispatch(receiveArtists(json));
    }).catch();
  };
}

export function getArtistsSongs(artistId){
  console.log(artistId);
  return dispatch => {
    return fetch(`http://localhost:3001/api/artist/songs/${artistId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    }).then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        return ({});
      }
    }).then(json => {
      dispatch(receiveArtistSongs(json));
    }).catch();
  };
}
