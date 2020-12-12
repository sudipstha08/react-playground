import React from 'react';
import styles from './button.module.css';

const Button = (props) => {
    return (
       <button type="button" className={styles.btn}>{props.button}</button>
    )
}

export default Button;