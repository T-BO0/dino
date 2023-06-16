import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppSelector } from '../../app/store/configureStore';
import { Avatar } from '@mui/material';
import TableSkeleton from './TableSkeleto';


export default function PlayerTable() {
  const players = useAppSelector(state => state.players.Players);
  const {user} = useAppSelector(state => state.account);

  if(players.length === 0) return <TableSkeleton/>
    
  return (
    <TableContainer component={Paper} sx={{maxWidth: "400px", maxHeight:'300px'}}>
      <Table  sx={{ minWidth: 350}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell sx={{color:'success.light'}}>Avatar</TableCell>
            <TableCell sx={{color:'success.light'}} align="right">Username</TableCell>
            <TableCell sx={{color:'success.light'}} align="right">Score&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player) => (
            <TableRow
              key={player.userName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/T-Rex_Tyrannosaurus_Animation_Video_Game_Sprite_Front_Right.png/1280px-T-Rex_Tyrannosaurus_Animation_Video_Game_Sprite_Front_Right.png' />
              </TableCell>
              <TableCell align="right">{
                player.userName===user?.userName? "(you) "+player.userName : player.userName
              }</TableCell>
              <TableCell align="right">{player.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}