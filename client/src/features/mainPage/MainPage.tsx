import { Box, Grid, Typography } from "@mui/material";
import PlayerTable from "./PlayerTable";

export default function MainPage(){
    // const user = useAppSelector(state => state.account.user);
    return (
        <Grid container>
            <Grid item xs={6}>
                <Box sx={{mb:2}}>
                    
                    {!localStorage.getItem('user') && <Typography>
                        <a href="/register">Register</a> or <a href="/login">login</a> to keep your score and playe other games  or just <a href="/dino">play</a> T-Rex
                    </Typography>}
                </Box>
                <PlayerTable/>
            </Grid>
            <Grid item xs={6} sx={{display:'flex'}}>
                <img height='300px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaL6DXnW5870PG8V1OkSL7_O5usVD6Ea3V6Q&usqp=CAU"/>
                <h1 style={{position:'absolute', color:"#4caf50"}}>welcome!!</h1>
            </Grid>
        </Grid>
    )
}