import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { Button, UserModalInput, ConferenceModal } from '../../components';
import styles from './modal.module.css';
import ConferenceDetail from '../ConferenceDetail';

const Modal = (props) => {
    const [ conference, setConference ] = useState({task : '', date: new Date(), time: '', details : ''})
    
    const handleChange = (e) => {
        setConference({...conference, [e.target.name] : e.target.value})
    }

    return(
        <>
          <Dialog open={props.openPop}>
            <DialogTitle>
                <div className={styles.modalHeader}>
                    <div>{props.title}</div>
                    <Link to='' onClick={props.onClick}><Close /></Link>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                <form className={styles.formSection}>
                  {props.name ? <UserModalInput htmlFor="name" type="text" label="Name"/> : null}
                  {props.phone ? <UserModalInput htmlFor="phone" type="text" label="Phone Number"/> : null}
                  {props.email ? <UserModalInput htmlFor="email" type="email" label="Email"/> : null}
                  {props.task ? <ConferenceModal htmlFor="task" type="text" label="Task" name="task" onChange={handleChange}/> : null}
                  {props.date ? <ConferenceModal htmlFor="date" type="date" label="Date" name="date" onChange={handleChange}/> : null}
                  {props.time ? <ConferenceModal htmlFor="time" type="time" label="Time" name="time" onChange={handleChange}/> : null}
                  {props.details ? <ConferenceDetail htmlFor="details" type="text" label="Details" name="details" onChange={handleChange}/> : null}
                  {props.status ? <ConferenceModal htmlFor="status" type="text" label="Status"/> : null}
                  {props.upload ? <ConferenceModal htmlFor="upload" type="file" label="Upload"/> : null}
                  <Button button={props.button} />
                </form>  
            </DialogContent>
          </Dialog>
        </>
    )
}

export default Modal;