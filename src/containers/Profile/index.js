import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '../../components/Button';
import styles from './profile.module.css';

const Profile = (props) => {
    return (
        <>
        <div className={styles.userProfileWrapper}>
           <Avatar style={{height:"80px", width:"100px"}}/>
            <h1>{props.name}</h1>
            <p>{props.email}</p>
            {props.subscription ? <p>{props.subscription}</p> : null}
            <form>
               <div className={styles.inputs}>
                   <label htmlFor="theme">Select Theme:</label>
                   <input type="text" className={styles.inputOne} />  
                </div>
                <div className={styles.inputs}>
                   <label htmlFor="theme">Update picture:</label>
                   <input type="text" className={styles.inputOne}  />  
                </div>
                <div className={styles.inputs}>
                   <label htmlFor="theme">Change Name:</label>
                   <input type="text" className={styles.inputOne}  />  
                </div>
                <div className={styles.inputs}>
                   <label htmlFor="theme">Change Phone:</label>
                   <input type="text" className={styles.inputOne}  />  
                </div>
                <div className={styles.inputs}>
                   <label htmlFor="theme">Change Password:</label>
                   <input type="password" placeholder="old password" className={styles.inputOne}  />
                   <div className={styles.inputs}>
                       <input type="password" placeholder="new password" className={styles.password}/>
                    </div> 
                   <div className={styles.inputs}>
                       <input type="password" placeholder="confirm password" className={styles.password} style={{marginBottom:"40px"}}/>
                    </div>
                </div>
               <Button button="Update Profile" />
            </form>
         </div>
         {props.upgrade ? <h1 className={styles.premium}>Upgrade to {props.upgrade}</h1> : null}
       </>
    )
}

export default Profile;