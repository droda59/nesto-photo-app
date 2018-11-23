import { combineReducers } from 'redux';
import albumReducer from './albums/duck';
import postReducer from './posts/duck';
import loginReducer from './login/duck';

export default combineReducers({
    albumReducer,
    postReducer,
    loginReducer,
});