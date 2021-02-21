// Group chats for respective classes 

import React, { useEffect, useState } from 'react'
import { db } from "../firebase";
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from '../css/ClassGroupChat.module.css'
import firebase from 'firebase';
import Sidebar from '../components/Sidebar'
import ChatRoom from './ChatRoom'

const auth = firebase.auth();
const database = firebase.firestore();

const ClassGroupChat = ({ match }) => {
    const [data, setData] = useState({});
    const {
        params: { classId },
    } = match;
    useEffect(() => {
        const docRef = db.collection('classes').doc(classId);
        docRef.get().then(doc => {
            if (doc.exists) {
                const classObject = {
                    class_name: doc.data().name,
                    class_professor: doc.data().prof,
                    class_link: doc.data().discord
                };
                setData(classObject);
            }
        }).catch(console.log);

    }, []);


    return (
        <>
            {/* <div><Sidebar></Sidebar></div> */}
            <div className={styles.background}>
                <div>
                    <h1 className={styles.courseName}> {data.class_name} </h1> <br />
                    <h2 className={styles.professor}>{data.class_professor} </h2>
                    <Button href={data.class_link}>
                        Link to Discord
                    </Button>
                </div>
                <Link to="/Landing">
                    <Button className={styles.button}> Go back to classes</Button>
                </Link>
                <ChatRoom id={classId}></ChatRoom>
            </div>
        </>
    );
}
export default ClassGroupChat;