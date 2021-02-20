import firebase from "firebase";
import "firebase/firestore";

import {apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId, measurementId} from './config';

const firebaseApp = firebase.initializeApp({
    apiKey: apiKey,
    authDomain: authDomain,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId,
    measurementId: measurementId 
});

const db = firebaseApp.firestore();

export default db;