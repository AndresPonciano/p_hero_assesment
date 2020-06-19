import * as firebase from 'firebase';
import { config } from './firekey';

firebase.initializeApp(config);
export const databaseRef = firebase.database().ref();
// export const dataRef = databaseRef.child("sampledata2");
