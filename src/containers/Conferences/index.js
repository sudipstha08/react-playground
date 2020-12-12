import React from 'react';
import { Grid, Divider } from '@material-ui/core';
import { SideBar, NotificationBar, BasicTable, Meeting } from '../../components';
import styles from './conferences.module.css';

const Conferences = () => {
    return(
        <>
          <div className={styles.myitemOuterWrapper}>
            <SideBar />
            <div style={{width:"100%", backgroundColor:"lightblue"}}>
              <NotificationBar title="Conferences"/>
              <div>
              <Grid container spacing={2} style={{ width:"100%", color:"black"}}>
                <Grid item lg={7} style={{ margin:"0px 10px"}}>
                  <Divider style={{marginTop:"20px"}} />
                  <div className={styles.hostMeetingWrapper}>
                      <button>+</button>                    
                    <p>Host a meeting</p>
                  </div>
                </Grid>
                <Grid item lg={4.5} style={{backgroundColor:"white", margin:"auto", borderRadius:"10px"}}>
                  <Grid container>
                    <Grid item lg={11} style={{margin:"auto"}} >
                       <h3>Upcoming Conferences</h3>
                    </Grid>
                    <Grid item lg={1} style={{margin:"auto"}}>
                       <i className="fas fa-fw fa-video"></i>
                    </Grid>
                  </Grid>
                  <Meeting />
                  <Meeting />
                </Grid>
              </Grid>

              </div>
            </div>
          </div>  
        </>
    )
}

export default Conferences;