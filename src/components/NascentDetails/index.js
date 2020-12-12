import React from 'react';
import styles from './nascentdetail.module.css';

const NascentDetails = () => {
    return (
        <div className={styles.nascentInnerText}>
            <p>Email:</p>
            <p className={styles.text}>company@gmail.com</p>
            <p>Phone:</p>
            <p className={styles.text}>9808916325</p>
            <p>status:</p>
            <p className={styles.text}>Active/Expired</p>
            <p>Subscription :</p>
            <p className={styles.text}>Standard/Premium</p>
            <p>Payment Date :</p>
            <p className={styles.text}>09/12/2020</p>
            <p>Account Expiration Date :</p>
            <p className={styles.text}>12/12/2021</p>
        </div>
    )
}

export default NascentDetails;