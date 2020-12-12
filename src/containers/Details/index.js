import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function Details() {
  const classes = useStyles();

  return (
    <>
    <AppBar style={{backgroundColor:"#091936"}}>
        <Toolbar><h3 style={{marginLeft:"50px"}}>Nascent</h3></Toolbar>
    </AppBar>
    <TableContainer component={Paper} style={{width:"90%", margin:"auto", marginTop:"80px"}}>
      <Table className={classes.table} size="large" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell><h4>S.No.</h4></TableCell>
            <TableCell align="right"><h4>Account ID</h4></TableCell>
            <TableCell align="right"><h4>Company Name</h4></TableCell>
            <TableCell align="right"><h4>Phone Number</h4></TableCell>
            <TableCell align="right"><h4>Product Type</h4></TableCell>
            <TableCell align="right"><h4>Status</h4></TableCell>
            <TableCell align="right"><h4>Action</h4></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell align="right">1234</TableCell>
              <TableCell align="right">Nascent</TableCell>
              <TableCell align="right">980856379</TableCell>
              <TableCell align="right">Standard</TableCell>
              <TableCell align="right">Active</TableCell>
              <TableCell align="right"><ArrowDropDownIcon /></TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
