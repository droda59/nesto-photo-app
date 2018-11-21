import { combineReducers } from 'redux';
import albumReducer from './albums/duck';

export default combineReducers({
    albumReducer,
});