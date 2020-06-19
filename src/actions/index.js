import { SIGN_IN, SIGN_OUT } from './types';
import axios from 'axios';
import { databaseRef } from '../base';

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

export function fetchVideos(searchFor) {
    const url =  `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchFor}&key=${YT_KEY}`;

    const request = axios.get(url);

    return {
        type: 'FETCH_VIDEOS',
        payload: request
    }
}

export const addData = (user, newData) =>  {
    databaseRef.child(user).push().set(newData);
}

export const fetchData = () => {
    databaseRef.on("value", snapshot => {
        return {
            type: 'FETCH_DATA',
            payload: snapshot.val()
        }
    })
}