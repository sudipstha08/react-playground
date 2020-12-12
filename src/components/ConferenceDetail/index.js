import React from 'react';
import styles from './conferencedetail.module.css';

const ConferenceDetail = (props) => {
    return(
        <div className={styles.confDetail}>
            <label>{props.label}</label>
            <textarea type={props.type} rows="6" name={props.name} onChange={props.onChange}/>
        </div>
    )
}

export default ConferenceDetail;