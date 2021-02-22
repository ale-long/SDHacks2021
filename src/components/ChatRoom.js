import React, { useState, useEffect } from 'react'
import firebase from "firebase";
import { firebaseApp } from '../firebase'
import "firebase/firestore";
import MessageBubble from './MessageBubble'
const ChatRoom = (props) => {
    const [messageList, setMessageList] = useState([]);
    const messagesRef = firebaseApp.firestore().collection('chatroom')

    messagesRef.get().then(message => {
        if (message.exists) {
            setMessageList(message.data().messages)
        }
    }).catch(console.log("error"))

    useEffect(() => {
        firebaseApp.firestore().collection('chatroom').onSnapshot(snapshot => {
            let message_list = [];
            snapshot.docs.map(doc => message_list.push(doc.data().messages));
            setMessageList(message_list);
        })
    }, [])

    return (
        <div>
            {console.log(messageList[0])}
            {messageList.map(message => {
                console.log("content" + message.content);
                return (<MessageBubble content={message.content} name={message.name} />);
                // // console.log(message)
                // let i;
                // for (i = 0; i < messageList.length; i++) {
                // console.log(message.length)
                // console.log(message)
                // return (<MessageBubble content={message[0].content} name={message[0][0].name} />);
                // }
            })}
            {/* <MessageBubble content="hi" name="hello"></MessageBubble> */}
        </div>
    );
}

export default ChatRoom;
