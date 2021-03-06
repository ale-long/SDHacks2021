import React, { useState, useEffect } from 'react';
import styles from "../css/LandingPage.module.css";
import ClassCard from "../components/ClassCard";
import { db } from "../firebase";
import { Container, Row, Col } from "reactstrap"
import { firebaseApp } from '../firebase'
import Sidebar from '../components/Sidebar'

const LandingPage = () => {
    const [classes, setClasses] = useState([]);
    const ref = db.collection('classes');
    const getOptions = {
        source: 'default'
    };

    function getClasses() {
        ref.get(getOptions).then((query) => {
            const classes_list = [];
            query.forEach((doc) => {
                console.log(doc.data());
                classes_list.push(doc.data());
            });
            setClasses(classes_list);
        })
            .catch(console.log);
    }

    useEffect(() => {
        getClasses();
    }, []);

    let cardCounter = 1;

    return (
        <>
            <div><Sidebar></Sidebar></div>
            <div className={styles.LandingPage} >
                <h1 style={{ textAlign: "center", fontSize: "70px", marginTop: "0.1%", fontFamily: "Arial", color: "white" }}>All Classes</h1>

                <Container>
                    <Row style={{ alignItems: "center", justifyContent: "center" }}>
                        {classes.map(classs => {
                            return <ClassCard cname={classs.name} prof={classs.prof} desc={classs.desc} id={classs.id} counter={cardCounter += 1}></ClassCard>
                        })}
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default LandingPage;