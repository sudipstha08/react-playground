import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { AppBar, Toolbar } from '@material-ui/core';
import { NascentDetails, NascentImage } from '../../components';
import application from '../../application.svg';
import styles from './nascentcompany.module.css';

const NascentCompany = () => {
    return (
        <>
          <AppBar style={{backgroundColor:"#091936"}}>
            <Toolbar><h2 style={{marginLeft:"53px", fontFamily:"Arial"}}>Nascent</h2></Toolbar>
          </AppBar>
          <div className={styles.nascentOuterWrapper}>
             <div className={styles.nascentAvatar}>
               <Avatar variant="square" style={{height:"80px", width:"100px"}}/>
               <div className={styles.nascentHeaderText}>
                 <h1>Nascent Company</h1>
                 <p className={styles.text}>Active/Expired</p>
               </div>
             </div>
             <div className={styles.nascentInnerWrapper}>
               <NascentDetails />
               <NascentImage application={application} />
             </div>
          </div>
        </>
    )
}

export default NascentCompany;