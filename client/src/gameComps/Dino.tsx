import { Grid } from "@mui/material";
import PlayerTable from "../features/mainPage/PlayerTable";
import GameContainer from "./GameContainer";

export default function Dino(){
    return(
        <Grid container>
            <Grid item xs={6} sx={{backgroundSize:'contain'}}>
                <PlayerTable/>
            </Grid>
            <Grid item xs={6} sx={{backgroundSize:'contain'}}>
                <GameContainer/>
            </Grid>
        </Grid>
    )
}