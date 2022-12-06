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

export default function BasicTableOrder() {
  const [rows,setRows] = React.useState([])
  React.useEffect(()=>{
    let url = "http://localhost:8080/api/v1/orders/get/"+window.localStorage.getItem("id")
    fetch(url)
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
            <StyledTableCell>order_id</StyledTableCell>
            <StyledTableCell align="right">item_code</StyledTableCell>
            <StyledTableCell align="right">item_name</StyledTableCell>
            <StyledTableCell align="right">quantity</StyledTableCell>
            <StyledTableCell align="right">rating</StyledTableCell>
            <StyledTableCell align="right">deliveryDate</StyledTableCell>
            <StyledTableCell align="right">price</StyledTableCell>
            <StyledTableCell align="right">offer</StyledTableCell>
            {/* <StyledTableCell align="right">offer_price</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.item_code}>
              <StyledTableCell component="th" scope="row">
                {row.item_code}
              </StyledTableCell>
              <StyledTableCell align="right">{row.order_id}</StyledTableCell>
              <StyledTableCell align="right">{row.item_name}</StyledTableCell>
              <StyledTableCell align="right">{row.quantity}</StyledTableCell>
              <StyledTableCell align="right">{row.rating}</StyledTableCell>
              <StyledTableCell align="right">{row.deliveryDate}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.offer}</StyledTableCell>
              {/* <StyledTableCell align="right">{row.offer_price}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}