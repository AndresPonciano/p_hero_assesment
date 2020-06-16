import { combineReducers } from 'redux';
import authReducer from './authReducer';
import timeReducer from './timeReducer';


export default combineReducers({
    auth: authReducer,
    time: timeReducer
});