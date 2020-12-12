import React from 'react';
import { Grid, Divider } from '@material-ui/core';
import { SideBar ,NotificationBar ,BasicTable, CustomizedTab } from '../../components';
import styles from './members.module.css';

const Members = () => {
    return(
        <>
        <div className={styles.myitemOuterWrapper}>
          <SideBar />
          <div style={{width:"100%"}}>
          <NotificationBar tabs={<CustomizedTab />} />    
          <Grid container>
              <Grid container>
              <Grid item lg={12} style={{margin:"10px"}}>
                  <button className={styles.btn}>+ Members</button>
              </Grid>
              <Divider />
              </Grid>
              <Grid item lg={9} style={{marginTop:"10px"}}>
                  <BasicTable member="member" id="S. No" name="Name" projectRole="Project Role" email="Email" phNumber="Phone Number" action="Action" />
              </Grid>
          </Grid>
          </div>
         </div> 
        </>
    )
}

export default Members;