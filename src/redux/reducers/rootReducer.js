import {combineReducers} from 'redux';
import artistInfo from './artistReducer';
import songInfo from './songReducer';

const rootReducer = combineReducers({
  artistInfo,
  songInfo
});

export default rootReducer;