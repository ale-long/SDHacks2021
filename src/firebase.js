import firebase from "firebase";
import "firebase/firestore";

import { apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId, measurementId } from './config';

const firebaseApp = firebase.initializeApp({
    apiKey: apiKey,
    authDomain: authDomain,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId,
    measurementId: measurementId
});
firebaseApp.firestore().enablePersistence();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, provider, firebaseApp };