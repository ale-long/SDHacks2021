import React, { useEffect, useState } from 'react'
import firebase from "firebase";
import "firebase/auth";
import styles from '../css/MessageBubble.module.css';
import 'bootstrap/dist/css/bootstrap.css'


const MessageBubble = (props) => {
    console.log('props:' + props.content);
    // props.message.forEach(element => {
    //     console.log(element.content);
    // })
    // console.log('name:' + props.name);
    // console.log('content: ' + props.content);

    useEffect(() => {
        const user = firebase.auth().currentUser;
    }, []);

    return (
        <div className={styles.messageContainer}>

            {props.name}: {props.content}
            {/* {props.name === user.displayName ? <div className={styles.userMessage}>
                {props.name}: {props.content}
            </div>
                : <div className={styles.nonUserMessage}>
                    {props.name}: {props.content}
                </div>
            } */}

        </div >
    )
}

export default MessageBubble;
