import React from 'react'
import "../css/LoginButton.css"

const LoginButton = () => {
    return (
        // onClick should be changed later
        <button onClick={() => { alert('Pretend this is the Google signup popup') } }>
            Sign in With Google
        </button>
    )
}

export default LoginButton;


