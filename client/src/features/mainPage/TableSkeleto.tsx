import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Skeleton } from '@mui/material';


export default function TableSkeleton() {
  return (
    <TableContainer component={Paper} sx={{maxWidth: "400px"}}>
      <Table  sx={{ minWidth: 350}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell sx={{color:'success.light'}}>Avatar</TableCell>
            <TableCell sx={{color:'success.light'}} align="right">Username</TableCell>
            <TableCell sx={{color:'success.light'}} align="right">Score&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Skeleton variant="circular" width={40} height={40} />
              </TableCell>
              <TableCell align="right">
                <Skeleton animation="wave" />
              </TableCell>
              <TableCell align="right">
                <Skeleton animation="wave" />
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Skeleton variant="circular" width={40} height={40} />
              </TableCell>
              <TableCell align="right">
                <Skeleton animation="wave" />
              </TableCell>
              <TableCell align="right">
                <Skeleton animation="wave" />
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Skeleton variant="circular" width={40} height={40} />
              </TableCell>
              <TableCell align="right">
                <Skeleton animation="wave" />
              </TableCell>
              <TableCell align="right">
                <Skeleton animation="wave" />
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Skeleton variant="circular" width={40} height={40} />
              </TableCell>
              <TableCell align="right">
                <Skeleton animation="wave" />
              </TableCell>
              <TableCell align="right">
                <Skeleton animation="wave" />
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Skeleton variant="circular" width={40} height={40} />
              </TableCell>
              <TableCell align="right">
                <Skeleton animation="wave" />
              </TableCell>
              <TableCell align="right">
                <Skeleton animation="wave" />
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}