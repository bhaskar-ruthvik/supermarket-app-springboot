import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Sai', 159, 'saikarenjim@gmail.com', 'Hyderabad', 1500),
//   createData('Karen', 237,'saikarenjim@gmail.com', 'Hyderabad', 2567),
//   createData('Jimmy', 262, 'saikarenjim@gmail.com', 'Hyderabad', 2244),
//   createData('Sai JImmy', 305, 'saikarenjim@gmail.com', 'Hyderabad', 7800),
//   createData('Chomuran', 356, 'saikarenjim@gmail.com', 'Hyderabad', 5300),
// ];

export default function BasicTableCustomer() {
  const [rows,setRows] = React.useState([])
  React.useEffect(()=>{
    fetch("http://localhost:8080/api/v1/customer")
    .then(res=>{return res.json()})
    .then(data=>{console.log(data); 
      setRows(data)})
  },[])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {/* <StyledTableCell>User</StyledTableCell> */}
            <StyledTableCell align="right">userId</StyledTableCell>
            <StyledTableCell align="right">username</StyledTableCell>
            <StyledTableCell align="right">phoneNumber</StyledTableCell>
            <StyledTableCell align="right">email</StyledTableCell>
            <StyledTableCell align="right">address</StyledTableCell>
            <StyledTableCell align="right">password</StyledTableCell>
            <StyledTableCell align="right">account_balance</StyledTableCell>
       
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.userID}>
              <StyledTableCell component="th" scope="row">
                {row.userID}
              </StyledTableCell>
              <StyledTableCell align="right">{row.username}</StyledTableCell>
              <StyledTableCell align="right">{row.phoneNumber}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.address}</StyledTableCell>
              <StyledTableCell align="right">{row.password}</StyledTableCell>
              <StyledTableCell align="right">{row.account_balance}</StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}