import React from 'react';
import styles from './usermodalinput.module.css';

const UserModalInput = (props) => {
    return(
        <div className={styles.contentSection}>
            <label htmlFor={props.htmlFor}>{props.label}</label>
            <input type={props.type} />
        </div>
    )
}

export default UserModalInput;