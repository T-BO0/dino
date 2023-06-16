import { Outlet, useLocation } from 'react-router-dom';
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import MainPage from '../../../features/mainPage/MainPage';
import Header from '../header/Header';
import { CssBaseline } from '@mui/material';
import { useCallback, useEffect } from 'react';
import { fetchCurrentUser } from '../../../features/account/userSlice';
import { useAppDispatch } from '../../store/configureStore';
import agent from '../../api/agent';
import { setPlayers } from '../../../features/mainPage/playerSlice';
import { ToastContainer } from 'react-toastify';

function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const initApp = useCallback(async () => {
    try {
      await dispatch(fetchCurrentUser());
      const players = await agent.Player.getAllThePlayers();
      dispatch(setPlayers(players));
    } catch (error) {
      console.log(error);
    }
  },[dispatch]);

  useEffect(()=>{
    initApp();
  },[initApp])
  
  return (
    <>
      <ToastContainer position='bottom-right' hideProgressBar theme='colored' />
      <CssBaseline/>
      <Header/>
      <div style={{margin:'100px'}}>
        {location.pathname === '/' ? <MainPage/> : <Outlet/>}
      </div>
    </>
  )
}

export default App
