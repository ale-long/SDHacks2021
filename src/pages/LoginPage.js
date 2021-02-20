import React from 'react'
import LoginButton from '../components/LoginButton'
import styles from "../css/LoginPage.css"

const LoginPage =()=> {
    return (
        <div className={styles.LoginPage}>
            <h1>Welcome to StudentConnect</h1>
            <LoginButton></LoginButton>
        </div>
    )
}

export default LoginPage;
