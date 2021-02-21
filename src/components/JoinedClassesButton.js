import React from 'react'
import { Button } from "reactstrap";
import styles from "../css/JoinedClassesButton.module.css"
import { Link } from 'react-router-dom'

const JoinedClassesButton = (props) => { //read in user info
    return (
        <div>
            <Link to={`/Landing/${props.id}`}>
                <Button className={styles.button}>{props.joinedClassName}</Button>
            </Link>
        </div>
    )
}

export default JoinedClassesButton;