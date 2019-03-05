import initialState from '../initialState';
import {
  GET_ARTIST_DATA,
  RECEIVE_ARTIST_DATA,
  RECEIVE_ARTIST_SONGS,
} from '../actions/actionTypes';

export default function artistInfo(state = initialState.artists, action) {
  let newState;
  switch (action.type) {
    case GET_ARTIST_DATA:
      return action;
    case RECEIVE_ARTIST_DATA:
      newState = action.artists;
      return newState;
    case RECEIVE_ARTIST_SONGS:
      newState = {artistSongs: action.artistSongs};
      return newState;
    default:
      return state;
  }
}