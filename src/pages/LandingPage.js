import React, { useState, useEffect } from 'react';
import styles from "../css/LandingPage.module.css";
import ClassCard from "../components/ClassCard";
import { db } from "../firebase";
import { Container, Row, Col } from "reactstrap"
import { firebaseApp } from '../firebase'

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
        }).then(firebaseApp.firestore().disableNetwork())
            .catch(console.log);
    }

    useEffect(() => {
        getClasses();
    }, []);

    var cardCounter = 1;

    return (
        <div className={styles.LandingPage}>
            <h1 style={{ textAlign: "center", fontSize: "70px", marginTop: "0.1%", fontFamily: "Arial", color: "white" }}>Classes</h1>
            <Container>
                <Row style={{ alignItems: "center", justifyContent: "center" }}>
                    <ClassCard cname="Test Class with Prof. Humphrey" prof=" Prof. Humphrey" desc="Do not take this class" id="test_id1" counter={cardCounter += 1}></ClassCard>
                    <ClassCard cname="Test Class ksdjlfksdjkfsd lfdlk lkjlskdaj lkja lkdjs lkdaj slkdjas d" prof=" Prof. Humphrey" desc="Do not take this class" id="test_id2" counter={cardCounter + 1}></ClassCard>
                    <ClassCard cname="Test Class" prof=" Prof. Humphrey" desc="Do not take this class" id="test_id3" counter={cardCounter += 1}></ClassCard>
                    <ClassCard cname="Test Class" prof=" Prof. Humphrey" desc="Do not take this class" id="test_id4" counter={cardCounter += 1}></ClassCard>
                    <ClassCard cname="Test Class" prof=" Prof. Humphrey" desc="Do not take this class" id="test_id5" counter={cardCounter += 1}></ClassCard>
                    <ClassCard cname="Academic Manga Analysis" prof=" Prof. Humphrey" desc="TAKE THIS CLASS AT ALL COSTSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS" id="test_id6" counter={cardCounter += 1}></ClassCard>
                    <ClassCard cname="Test Class" prof=" Prof. Humphrey" desc="Do not take this class because it is way too hard" id="test_id7" counter={cardCounter += 1}></ClassCard>
                    <ClassCard cname="Test Class" prof=" Prof. Humphrey" desc="Do not take this class" id="test_id8" counter={cardCounter += 1}></ClassCard>
                    {classes.map(classs => {
                        return <ClassCard cname={classs.name} prof={classs.prof} desc={classs.desc} id={classs.id} counter={cardCounter += 1}></ClassCard>
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default LandingPage;