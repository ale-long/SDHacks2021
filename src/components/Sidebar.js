import React, { useState, useEffect } from 'react';
// import Sidebar from "react-sidebar";
import styles from '../css/Sidebar.modules.css'
import { Link } from "react-router-dom";
import firebase from "firebase";
import "firebase/auth";
import JoinedClassesButton from "./JoinedClassesButton";
import { Container, Col } from "reactstrap";
import { db } from '../firebase'

import { slide as Menu } from 'react-burger-menu';

const Sidebar = props => {
    // let email, photoUrl, uid;
    const [classes, setClasses] = useState([]);
    const ref = db.collection('users');
    const classRef = db.collection('classes');
    // const getOptions = {
    //     source: 'default'
    // };
    // classes.push({ id: '', name: 'Home' });

    // if (classes.length == 0) {
    //     classes.push({ id: '', name: 'Home' });
    // }

    // if (user != null) {
    //     email = user.email;
    //     photoUrl = user.photoURL;
    //     uid = user.uid;
    //     ref = db.collection('users').doc(email);
    //     classes = ref.joined;
    //     console.log(classes);
    // }

    async function getClasses() {
        let user = await firebase.auth().currentUser;
        const ref = db.collection('users');
        const classRef = db.collection('classes');
        const getOptions = {
            source: 'default'
        };
        ref.doc(firebase.auth().currentUser.email).get().then(doc => {
            console.log(doc.data());
            const classes_list = doc.data().joined;
            setClasses(classes_list);
        }).catch(console.log);
    }

    // // function getClasses() {
    // //     ref.doc(user.email).get(getOptions).then((query) => {
    // //         const classes_list = [];
    // //         query.forEach((doc) => {
    // //             console.log(doc.data());
    // //             classes_list.push(doc.data());
    // //         });
    // //         setClasses(classes_list);
    // //     })
    // //         .catch(console.log);
    // // }

    // joinedClassName={classRef.doc(classs).data().name}
    // function getClassName(id) {
    //     classRef.doc(id).get().then(doc => {
    //         console.log('name:' + doc.data().name);
    //         return doc.data().name;
    //     });
    // }

    useEffect(() => {
        getClasses();
    }, []);

    return (
        <Menu>
            <h3>{firebase.auth().currentUser.displayName}</h3>
            <h2>Your Classes</h2>
            <Container>
                <Col style={{ alignItems: "center", justifyContent: "center" }}>
                    {/* <JoinedClassesButton id='' joinedClassName='Home'></JoinedClassesButton> */}
                    {classes != null ? classes.map(classs => {
                        return <JoinedClassesButton id={classs.id} joinedClassName={classs.name}></JoinedClassesButton>
                    }) : <JoinedClassesButton id='' joinedClassName='Home'></JoinedClassesButton>}

                    {/* {classes.map(classs => {
                        return <JoinedClassesButton id={classs.id} joinedClassName={classs.name}></JoinedClassesButton>
                    })} */}

                    {/* {classes[0].id ? classes.map(classs => {
                        <JoinedClassesButton id={classs.id} joinedClassName={classs.name}></JoinedClassesButton>
                    } : <JoinedClassesButton id='' joinedClassName='Home'></JoinedClassesButton>
                    )}} */}
                    {/* {classes.map(classs => {
                        {
                            ((classs.id && classs.name) != null) ? (<JoinedClassesButton id={classs.id} joinedClassName={classs.name}></JoinedClassesButton>) :
                                (<JoinedClassesButton id='' joinedClassName='Home'></JoinedClassesButton>)
                        }
                    })} */}
                </Col>
            </Container>

        </Menu >
    );
};

export default Sidebar;