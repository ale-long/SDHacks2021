import React from 'react'
import "../css/JoinClassButton.css"

const JoinClassButton = () => {
    return (
        // onClick should be changed later
        <button onClick={() => { alert('Pretend this redirects you to the class page') } }>
            Join Class
        </button>
    )
}

export default JoinClassButton;