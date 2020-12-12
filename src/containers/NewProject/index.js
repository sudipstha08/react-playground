import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Button from '../../components/Button';
import styles from './newproject.module.css';
import { NascentImage } from '../../components';
import application from '../../application.svg';

const NewProject = () => {
    return (
        <>
          <div className={styles.newProjectWrapper}>
              <Link to='/'><ArrowBack/></Link>
          </div>
          <h2 className={styles.newProjectHeader}>New Project</h2>
          <div className={styles.innerProjectWrapper}>
              <div className={styles.innerProjectForm}>
                  <form>
                      <div className={styles.projectForm}>
                          <label htmlFor="projectName">Project Name</label>
                          <input type="text" />
                      </div>
                      <div className={styles.projectForm}>
                          <label htmlFor="projectDescription">Project Description</label>
                          <textarea type="text" rows="6" />
                      </div>
                      <Button button="Create Project"/>
                  </form>
              </div>
                <NascentImage application={application} />      
          </div>
        </>
    )
}

export default NewProject;