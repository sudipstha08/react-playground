import React from 'react';
import { Link } from 'react-router-dom';
import styles from './meeting.module.css';


const Meeting = () => {
    return(
        <>
         <div className={styles.meetingOuterWrapper}>
             <div className={styles.meetingDate}>
                 <p>04 Nov</p>
             </div>
             <div className={styles.meetingSchedule}>
                 <h5>Meeting with Team A</h5>
                 <p>project: Project A</p>
                 <p>Task : Task 1</p>
                 <p>Discussion Topic Details</p>
                 <p>10:30 AM EST</p>
                 <div className={styles.meetingAnchor}>
                    <Link to='/' className={styles.meetingEditDelete}>Edit</Link>
                    <Link to='/' className={styles.meetingEditDelete}>Delete</Link>
                 </div>
             </div>
             <div className={styles.meetingButton}>
                 <button>Join</button>
             </div>
         </div>
        </>
    )
}

export default Meeting;