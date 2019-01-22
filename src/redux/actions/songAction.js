import * as types from './actionTypes';

export function receiveSongs(json) {
  return {type: types.RECEIVE_SONG_DATA, songs: json};
}

export function getSongs(searchTerm) {
  return dispatch => {
    return fetch(`http://localhost:3001/api/songs/search/${searchTerm}`, {
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
       dispatch(receiveSongs(json));
    }).catch();
  };
}
