import React from 'react';
import styles from './nascentimage.module.css';

const NascentImage = (props) => {
    return(
        <div className={styles.nascentInnerImage}>
            <img src={props.application} alt="nascent-company" />
        </div>
    )
}

export default NascentImage;