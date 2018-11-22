import { combineReducers } from 'redux';
import albumReducer from './albums/duck';
import postReducer from './posts/duck';

export default combineReducers({
    albumReducer,
    postReducer,
});