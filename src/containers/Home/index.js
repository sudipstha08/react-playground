import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styles from "./home.module.css";
import { setAlert } from "../../actions/alert";
import FileIcon from '../../assets/icons/File.svg'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Container} from '@material-ui/core';
import{Select, MenuItem} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "./home.css";


const useStyles = makeStyles({
  table: {
    minWidth: 650,
    borderCollapse:'collapse',
  },
  name:{
    display:'flex',
    flexDirection:'column',
  
  }, 
  scroll :{
    height:'300px !important',
    overflowY:'scroll !important',
  }

});

function createData(name,date, description) {
  return { name,date ,description };
}
function createUserData(File,name, phnum, email, date, addUser) {
  return { File,name, phnum, email, date, addUser };
}

const rows = [
  createData('Django Team Project ',`Created on:2020-11-18`,
  `This is the description of our Project.ext ever since the 1500s,when and
  unknown printer took a galley of type and scrambled it to make a type specification`, 
  ),
  createData('React Team Project',`Created on:2020-11-18`,  `This is the description of our Project.ext ever since the 1500s,when and
  unknown printer took a galley of type and scrambled it to make a type specification`),
  createData('Database Team Project',`Created on:2020-11-18`,  `This is the description of our Project.ext ever since the 1500s,when and
  unknown printer took a galley of type and scrambled it to make a type specification`),
  createData('Devops Team Project',`Created on:2020-11-18`,  `This is the description of our Project.ext ever since the 1500s,when and
  unknown printer took a galley of type and scrambled it to make a type specification` ),
 
];
const usersData = [
  createUserData('1 ',' Ashok Basnet','9861634439','mailashokbasnet@gmail.com','joined on:2020-11-12' ),
  createUserData('2', 'Ashok Basnet', '9861634439','mailashokbasnet@gmail.com','joined on:2020-11-12' ),
  createUserData('3', 'Ashok Basnet', '9861634439','mailashokbasnet@gmail.com','joined on:2020-11-12'),
  createUserData('4',  'Ashok Basnet', '9861634439','mailashokbasnet@gmail.com','joined on:2020-11-12' ),
  createUserData('5',  'Ashok Basnet', '9861634439','mailashokbasnet@gmail.com','joined on:2020-11-12' ),
  createUserData('6',  'Ashok Basnet', '9861634439','mailashokbasnet@gmail.com','joined on:2020-11-12' ),
 
];
const Home = (props) => {
  // const [openPop, setOpenPop] = useState(false)
  // const [openConference, setOpenConference] = useState(false)
  // const [openDocument, setOpenDocument] = useState(false)
  // const alertMe = () => {
  //   props.setAlert("Alert is activated and close in 1500ms", "error");
  // };
// console.log("match",props.match)
 const classes = useStyles();
  return (
    <>
    <div>
      <Container>
        <div className='project'><p>Projects</p></div>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell>File</TableCell>
            <TableCell align="left"> Name</TableCell>
            <TableCell style ={{width:'400px'}} align="left">Description</TableCell>
            <TableCell align="left">+create project</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>   <img src={FileIcon} alt=""/> </TableCell>
              <TableCell className={classes.name} component="th" scope="row">
               <p> {row.name}</p>
                <p>{row.date}</p>
              </TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left">
                <Select>
                <MenuItem value="Edit">Edit</MenuItem>
               <MenuItem value="Delete">Delete</MenuItem>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Container>
     

     <Container className="Table2">
       <div className="User"> <p>Users</p></div>
     <TableContainer className={classes.scroll} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead style={{ background: 'blue', position: 'sticky', top: 0}}>
          <TableRow>
            <TableCell style={{ position: 'sticky', top: 0, background: '#fff'}}>File</TableCell>
            <TableCell style={{ position: 'sticky', top: 0, background: '#fff'}} align="left">Name</TableCell>
            <TableCell  align="left" style={{ position: 'sticky', top: 0,background: '#fff'}}>Ph. Number</TableCell>
            <TableCell align="left" style={{ position: 'sticky', top: 0, background: '#fff'}}>Email</TableCell>
            <TableCell align="left" style={{ position: 'sticky', top: 0, background: '#fff'}}>Date</TableCell>
            <TableCell align="left" style={{ position: 'sticky', top: 0, background: '#fff', zIndex: 2}}>+Add New User</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersData.map((row) => (
            <TableRow key={row.name}>
              <TableCell> {row.File} </TableCell>
              <TableCell> < AccountCircleIcon />{row.name}</TableCell>
              {/* <TableCell><i class="far fa-user-circle mx-2"></i></TableCell> */}
              <TableCell align="left">{row.phnum}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">
                <Select>
                <MenuItem value="Edit">Edit</MenuItem>
               <MenuItem value="Delete">Delete</MenuItem>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    

     </Container>
      </div>
    
    </>
  );
};

export default connect(null, { setAlert })(Home);
