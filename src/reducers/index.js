import { combineReducers } from 'redux';
import authReducer from './authReducer';
import timeReducer from './timeReducer';
import videoReducer from './videoReducer';
import dataReducer from './dataReducer';


export default combineReducers({
    auth: authReducer,
    time: timeReducer,
    videos: videoReducer,
    data: dataReducer
});