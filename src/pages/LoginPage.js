import React from 'react'
import styles from "../css/LoginPage.module.css"
import { provider, firebaseApp } from '../firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useHistory } from 'react-router-dom';
import { PROVIDER_ID } from '../config'
import { Button } from 'reactstrap'
import firebase from 'firebase';

const LoginPage = () => {

    // const signIn = () => {
    //     firebase.auth()
    //         .signInWithPopup(provider)
    //         .then(result => {
    //             console.log(result.user.displayName);
    //         }).catch(console.log);
    // }

    const uiConfig = {
        signInFlow: 'popup',
        signInSuccessUrl: '/Landing',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ]
    }

    return (
        <div className={styles.background}>
            <h1 style={{ fontSize: "70px", textAlign: "center", marginTop: "15%", fontFamily: "Arial", color: "white" }}>Welcome to StudentConnect</h1>
            {/* <Button onClick={signIn}>
                Sign In
            </Button> */}
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
    )
}

export default LoginPage;
