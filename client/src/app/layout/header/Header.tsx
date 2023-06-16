import { AppBar, Box, List, ListItem, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import SignInMenu from "../signinMenu/SigninMenu";
import Games from "./Games";

const navStyles = {
    color: "inherit", 
    typography: "h6",
    textDecoration: "none",
    '&:hover':{
        color: 'grey.500'
    },
    '&.active':{
        color: 'text.secondary'
    }
}
const rightLinks = [
    {title: 'login', path:'/login'},
    {title: 'register', path:'/register'},
];

export default function Header(){
    return(
        <AppBar sx={{backgroundColor:'success.light'}}>
            <Toolbar sx={{display:"flex", justifyContent:'space-between'}}>

                <Box>
                    <Typography variant="h4"
                        component={NavLink}
                        to='/'
                        sx={navStyles}
                    >
                        T-Rex
                    </Typography>
                </Box>

                <Box>
                    {!localStorage.getItem('user') ?
                    (<Typography variant="h4" component={NavLink} to="/dino" sx={navStyles}>
                        <h4 className="animate__bounceIn">Play T-Rex</h4>
                    </Typography>) : 
                    <Games />
                    }
                </Box>

                <Box>
                    {localStorage.getItem('user')? <SignInMenu/> : <List sx={{display: "flex"}}>
                        {rightLinks.map(({title,path})=>(
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}
                            >
                                {title}
                            </ListItem>
                        ))}
                    </List>}
            </Box>
                
            </Toolbar>
        </AppBar>
    )
}