import { SIGN_IN, SIGN_OUT } from './types';

const YT_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
}

export const timeChange = () => {
    return  {
        type: 'TIME_CHANGE'
    };
}