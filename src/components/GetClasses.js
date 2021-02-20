import React, {useState, useEffect} from 'react';
import firebase from "../firebase";

const GetClasses = () => {
    const [classes, setClasses] = useState([]);
    const ref = firebase.collection('classes');
    function getClasses() {
        ref.onSnapshot((querySnapshot) => {
            const classes_list = [];
            querySnapshot.forEach((doc) => {
                console.log(doc.data())
                classes_list.push(doc.data());
            });
            setClasses(classes_list);
        });
    }
    
    useEffect(()=>{
        getClasses();
    }, [classes]);


    return (
        <div>
            <h1>Classes</h1>
            {classes.map((classs) => (
                <div key={classs.id}>
                    <h2>{classs.name}</h2>
                    <p>{classs.prof}</p>
                </div>
            ))};
        </div>
    );
}

export default GetClasses;
