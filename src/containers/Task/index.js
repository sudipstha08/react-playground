import React from 'react';
import { Grid, Divider } from '@material-ui/core';
import { SideBar ,NotificationBar ,BasicTable, CustomizedTab } from '../../components';
import styles from './task.module.css';

const Members = () => {
    return(
        <>
        <div className={styles.myitemOuterWrapper}>
          <SideBar />
          <div style={{width:"100%"}}>
          <NotificationBar tabs={<CustomizedTab />} topButton="button" />    
          <Grid container>
              <Grid container>
              <Grid item lg={12} style={{margin:"10px"}}>
                  <button className={styles.btn}>+ Task</button>
              </Grid>
              </Grid>
             
              <Grid item lg={12} style={{marginTop:"10px"}}>
                  <BasicTable task="task" id="Task ID" name="Task Name" weight="Weight" stDate="Start Date" endDate="End Date" duration="Duration" sid="Successor ID" pid="Predecessor ID" status ="Status" action="Action" />
              </Grid>
          </Grid>
          </div>
         </div> 
        </>
    )
}

export default Members;