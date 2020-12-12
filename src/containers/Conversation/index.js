import React from 'react';
import { Grid, Avatar } from '@material-ui/core';
import { SideBar ,NotificationBar ,BasicTable, CustomizedTab } from '../../components';
import styles from './conversation.module.css';

const Conversation = () => {
    return(
        <>
        <div className={styles.myitemOuterWrapper}>
          <SideBar />
          <div style={{width:"100%"}}>
          <NotificationBar tabs={<CustomizedTab />} topButton="button" />    
          <Grid container>
              <Grid container>
              <Grid item lg={12}>
                  <div className={styles.conversationText}>
                      <h1>New Conversation</h1>
                      <p>start a team conversation to make announcements, share information, or discuss projects</p>
                  </div>
              </Grid>
              </Grid>
          </Grid>
          <Grid container>
                <Grid item lg={12} style={{marginTop:"10px"}}>
                  <div style={{width:"100%", border:"0.5px solid black", marginTop:"20px"}}></div>
                  <h4 className={styles.today}>Today</h4>
                </Grid>
                <Grid container>
                    <Grid item lg={8} style={{padding:"0px 15px"}}>
                        <Grid container style={{marginTop:"30px"}}>
                            <Grid item lg={1} style={{justifyContent:"center", display:"block", alignItems:"center"}} >
                                <Avatar />
                            </Grid>
                            <Grid item lg={9} style={{margin:"auto"}} >
                                <p className={styles.conversationMessage}>hello world</p>
                            </Grid>
                            <Grid item lg={2} style={{margin:"auto"}} >
                                <p style={{padding:"5px"}}>4:21 pm</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={8}>
                        <Grid container style={{marginLeft:"350px"}}>
                            <Grid item lg ={2} style={{margin:"auto"}}>
                               <p style={{paddingLeft:"60px"}}>4:21 pm</p>
                            </Grid>
                            <Grid item lg = {9}>
                               <p className={styles.conversationMessage}>hello world Welcome to the world of react and redux</p>
                            </Grid>
                            <Grid item lg = {1} style={{ padding:"0px 15px", marginTop:"5px"}}>
                                <Avatar />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
          </Grid>
          </div>
         </div> 
        </>
    )
}

export default Conversation;