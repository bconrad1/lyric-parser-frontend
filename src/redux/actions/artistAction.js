import * as types from './actionTypes';

export function receiveArtists(json) {
  return {type: types.RECEIVE_ARTIST_DATA, artists: json};
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
