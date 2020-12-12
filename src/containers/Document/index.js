import React from 'react';
import { Grid, Divider } from '@material-ui/core';
import { SideBar ,NotificationBar ,BasicTable, CustomizedTab } from '../../components';
import styles from './document.module.css';

const Document = () => {
    return(
        <>
        <div className={styles.myitemOuterWrapper}>
          <SideBar />
          <div style={{width:"100%"}}>
          <NotificationBar tabs={<CustomizedTab />} />    
          <Grid container>
              <Grid container>
              <Grid item lg={12} style={{margin:"10px"}}>
                  <button className={styles.btn}>+ Add Document</button>
              </Grid>
              <Divider />
              </Grid>
              <Grid item lg={10} style={{marginTop:"10px"}}>
                  <BasicTable document="document" sno="S.No" name="Name of Document" status="Status" action="Action" />
              </Grid>
          </Grid>
          </div>
         </div> 
        </>
    )
}

export default Document;