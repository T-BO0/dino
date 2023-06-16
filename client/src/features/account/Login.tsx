import { LockOpenOutlined } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Avatar, Container, Grid, Paper, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FieldValues, useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/store/configureStore';
import { signInUser } from './userSlice';
import { toast } from 'react-toastify';
import { setPlayers } from '../mainPage/playerSlice';
import agent from '../../app/api/agent';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {register, handleSubmit, formState: {isSubmitting, errors, isValid}} = useForm({
    mode: 'onTouched'
  })

  async function submitForm(data: FieldValues){
    try {
      await dispatch(signInUser(data));
      toast.success(`hello, ${data.username}`);
      const players = await agent.Player.getAllThePlayers();
      dispatch(setPlayers(players));
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }
  if(localStorage.getItem('user')){
    return <Navigate to='/'/>
  }

  return (
    <Container component={Paper} maxWidth="sm" 
        sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4}}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOpenOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit(submitForm)}  noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              label="Username"
              autoFocus
              {...register('username', {required:"username is required"})}
              error={!!errors.username}
              helperText={errors?.username?.message as string}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Password"
              type="password"
              {...register('password', {required:"password is required"})}
              error={!!errors.password}
              helperText={errors?.password?.message as string}
            />
            <LoadingButton
              loading={isSubmitting}
              disabled={!isValid}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </LoadingButton>
            <Grid container>
              <Grid item>
                <Link to='/register'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
      </Container>
  );
}