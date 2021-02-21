// Group chats for respective classes 

import React, { useEffect, useState } from 'react'
import { db } from "../firebase";
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

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
                    class_professor: doc.data().prof
                };
                setData(classObject);
            }
        }).catch(console.log);

    }, []);


    return (
        <div>
            { data.class_name}
            { data.class_professor}
            <Link to="/Landing">
                <Button>Go back to classes</Button>
            </Link>
        </div>
    )
}
export default ClassGroupChat


