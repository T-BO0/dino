import { Button, Menu, Fade, MenuItem } from "@mui/material";
import React from "react";
import { signOut } from "../../../features/account/userSlice";
import { useAppDispatch, useAppSelector } from "../../store/configureStore";

export default function SignInMenu(){
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(state => state.account);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        color="inherit"
        onClick={handleClick}
        sx={{typography: 'h6'}}
      >
        {user?.userName}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={() => {
          dispatch(signOut());
        }}>Logout</MenuItem>
      </Menu>
    </>
  );
}