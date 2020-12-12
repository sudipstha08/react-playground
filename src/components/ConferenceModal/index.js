import React from 'react';
import styles from './conferencemodal.module.css';


const ConferenceModal = (props) => {
    
    return(
        <>
        <div className={styles.conference}>
            <label htmlFor={props.htmlFor}>{props.label}</label>
            <input type={props.type} name={props.name} onChange={props.onChange}/>
        </div>
        </>
    )
}

export default ConferenceModal;