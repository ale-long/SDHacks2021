import React from 'react'
import { Link } from "react-router-dom"; // for redirect
import 'bootstrap/dist/css/bootstrap.css'
import styles from "../css/ClassCard.module.css"
import { Card, CardText, CardBody, Container, Row, Col, CardDeck, CardTitle, CardSubtitle, CardColumns, Button } from 'reactstrap';
import { motion } from "framer-motion";
import { db } from '../firebase'
import firebase from "firebase";
import "firebase/auth";


const ClassCard = (props) => {

    const user = firebase.auth().currentUser;
    const ref = db.collection('users').doc(user.email);
    const addClass = () => {
        console.log('adding class' + props.id + ' ' + props.name);
        ref.set({
            visited: true
        }, { merge: true });
        let data = { id: props.id, name: props.cname };
        ref.update({
            joined: firebase.firestore.FieldValue.arrayUnion(data)
        });
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: [0, 1],
            }}
            transition={{
                duration: 0.2,
                delay: props.counter * 0.12
            }}>
            <div>
                <Card className={styles.ClassCard}>
                    <CardBody>
                        <CardTitle tag="h5">{props.cname}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{props.prof}</CardSubtitle>
                        <CardText>{props.desc}</CardText>
                        <Link to={`/Landing/${props.id}`}>
                            <Button onClick={addClass}>Join Class</Button>
                        </Link>
                    </CardBody>
                </Card>
            </div>
        </motion.div>
    )
}

export default ClassCard;