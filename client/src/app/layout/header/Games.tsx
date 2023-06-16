import { Button, Fade, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const games = [
    {title:'T-Rex', path:'/dino'},
    {title:'T-BOT', path:'/tbot'}
]

export default function Games(){
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClick = (event:any) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return(
    <div className="animate__bounceIn">
      <Button
        color="inherit"
        onClick={handleClick}
        sx={{typography: 'h6'}}
      >
        <h4>Games</h4>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {games.map(game => (
            <MenuItem key={game.path} component={Link} to={game.path}>{game.title}</MenuItem>
        ))}
      </Menu>
    </div>
    )
}