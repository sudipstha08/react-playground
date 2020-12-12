import React from 'react';
import styles from './svgimage.module.css';

const SVGImage = ({pro}) => {
    return(
        <div className={styles.loginSVG}>
            <img src={pro} alt="image" />
        </div>
    )
}

export default SVGImage