import React, { useState, useEffect } from 'react';
// import Sidebar from "react-sidebar";
import styles from '../css/Sidebar.modules.css'
import { Link } from "react-router-dom";
import firebase from "firebase";
import "firebase/auth";
import JoinedClassesButton from "./JoinedClassesButton";
import { Container, Col } from "reactstrap";
import { db } from '../firebase'

import { elastic as Menu } from 'react-burger-menu';

const Sidebar = props => {
    // let email, photoUrl, uid;
    const [classes, setClasses] = useState([]);
    const [user, setUser] = useState(false);
    const ref = db.collection('users');
    const classRef = db.collection('classes');
    const getOptions = {
        source: 'default'
    };
    // const getOptions = {
    //     source: 'default'
    // };
    // classes.push({ id: '', name: 'Home' });

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            setUser(user);
        } else {
            signed_user_name = 'filler name';
            signed_user_email = 'filler email'
        }
    });
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

    let signed_user_name = '';
    let signed_user_email = '';

    // async function getClasses() {
    //     // let user = await firebase.auth().currentUser;
    //     const ref = db.collection('users');
    //     const classRef = db.collection('classes');

    //     ref.doc(signed_user_email).get().then(doc => {
    //         console.log(doc.data());
    //         const classes_list = doc.data().joined;
    //         setClasses(classes_list);
    //     }).catch(console.log);
    // }

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
        ref.doc(user.email).get().then(doc => {
            console.log(doc.data());
            const classes_list = doc.data().joined;
            setClasses(classes_list);
        }).catch(console.log);
        // firebase.auth().onAuthStateChanged(function (user) {
        //     if (user) {
        //         setUser(user);
        //         ref.doc(user.email).get().then(doc => {
        //             console.log(doc.data());
        //             const classes_list = doc.data().joined;
        //             setClasses(classes_list);
        //         }).catch(console.log);
        //     } else {
        //         signed_user_name = 'filler name';
        //         signed_user_email = 'filler email'
        //     }
        // });
        // getClasses();
    }, [user]);

    return (
        <Menu customBurgerIcon={<img src={user.photoURL} />}>
            {user != null ? <h3>{user.displayName}</h3> : <h3>Please sign in.</h3>}
            <h2>Your Classes</h2>
            <Container>
                <Col style={{ alignItems: "center", justifyContent: "center" }}>
                    {/* <JoinedClassesButton id='' joinedClassName='Home'></JoinedClassesButton> */}
                    {classes != null ? classes.map(classs => {
                        return <JoinedClassesButton id={classs.id} joinedClassName={classs.name}></JoinedClassesButton>
                    }) : <JoinedClassesButton id='' joinedClassName='Join a class!'></JoinedClassesButton>}

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