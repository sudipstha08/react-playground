import React from 'react';
import { Grid, Divider } from '@material-ui/core';
import { SideBar, NotificationBar, BasicTable, Meeting } from '../../components';
import styles from './myitems.module.css';

const MyItems = () => {
    return(
        <>
          <div className={styles.myitemOuterWrapper}>
            <SideBar />
            <div style={{width:"100%", backgroundColor:"lightblue"}}>
              <NotificationBar title="My Items"/>
              <div>
              <Grid container spacing={2} style={{ width:"100%", color:"black"}}>
                <Grid item lg={7} style={{border:"1px solid gray", borderRadius:"5px", backgroundColor:"white", margin:"0px 10px"}}>
                  <Grid container>
                    <Grid item lg={11}>
                      <h3>My Action Items</h3>
                    </Grid>
                    <Grid item lg={1}>
                      <p>Icon</p>
                    </Grid>
                  </Grid>
                  <Divider />
                  <BasicTable />
                </Grid>
                <Grid item lg={4.5} style={{backgroundColor:"white", margin:"auto", borderRadius:"10px"}}>
                  <Grid container>
                    <Grid item lg={11} style={{margin:"auto"}} >
                       <h3>Conferences</h3>
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

export default MyItems;