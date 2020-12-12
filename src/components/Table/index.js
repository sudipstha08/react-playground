import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles({
  table: {
    minWidth: 500
  },
});



export default function BasicTable(props) {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {props.member ? <>
            <TableCell><h5>{props.id}</h5></TableCell>
            <TableCell align="right"><h5>{props.name}</h5></TableCell>
            <TableCell align="right"><h5>{props.projectRole}</h5></TableCell>
            <TableCell align="right"><h5>{props.email}</h5></TableCell>
            <TableCell align="right"><h5>{props.phNumber}</h5></TableCell>
            <TableCell align="right"><h5>{props.action}</h5></TableCell>
            </> : null }
            {props.document ? <>
            <TableCell><h5>{props.sno}</h5></TableCell>
            <TableCell align="center"><h5>{props.name}</h5></TableCell>
            <TableCell align="center"><h5>{props.status}</h5></TableCell>
            <TableCell align="center"><h5>{props.action}</h5></TableCell>
            </> : null }
            {props.task ? <>
            <TableCell><h6>{props.id}</h6></TableCell>
            <TableCell align="right"><h6>{props.name}</h6></TableCell>  
            <TableCell align="right"><h6>{props.weight}</h6></TableCell>
            <TableCell align="right"><h6>{props.stDate}</h6></TableCell>
            <TableCell align="right"><h6>{props.endDate}</h6></TableCell>
            <TableCell align="right"><h6>{props.duration}</h6></TableCell>
            <TableCell align="right"><h6>{props.sid}</h6></TableCell>
            <TableCell align="right"><h6>{props.pid}</h6></TableCell>
            <TableCell align="right"><h6>{props.status}</h6></TableCell>
            <TableCell align="right"><h6>{props.action}</h6></TableCell>
            </> : null }
            
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              {props.member ? <>
                <TableCell><h6>1101</h6></TableCell>  
              <TableCell component="th" scope="row" align="right">
                <h6>Task A</h6>
              </TableCell>
              <TableCell align="right">10</TableCell>
              <TableCell align="right">Nov 10</TableCell>
              <TableCell align="right">Nov 12</TableCell>
              <TableCell align="right">2 days</TableCell>
              </> : null}
              {props.document ? <>
                <TableCell><h6>1101</h6></TableCell>  
              <TableCell component="th" scope="row" align="center">
                <h6>Document 1</h6>
              </TableCell>
              <TableCell align="center">General Submission</TableCell>
              <TableCell align="center">-</TableCell>
              </> : null}
              {props.task ? <>
                <TableCell>1101</TableCell>  
              <TableCell component="th" scope="row" align="right">
                Task A
              </TableCell>
              <TableCell align="right">10</TableCell>
              <TableCell align="right">Nov 10</TableCell>
              <TableCell align="right">Nov 12</TableCell>
              <TableCell align="right">2 days</TableCell>
              <TableCell align="right">1209</TableCell>
              <TableCell align="right">1080</TableCell>
              <TableCell align="right">On Hold</TableCell>
              <TableCell align="right">-</TableCell>
              </> : null}
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
