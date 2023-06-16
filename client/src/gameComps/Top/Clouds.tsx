import React, { useCallback, useEffect } from 'react';
import './Clouds.css';
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import { setPlayers } from '../../features/mainPage/playerSlice';
import agent from '../../app/api/agent';
import { fetchCurrentUser } from '../../features/account/userSlice';

interface Props{
    id:string;
    count:number;
    setCount: (cou: React.SetStateAction<number>) => void;
    youAreDead: boolean;
}

export default function Clouds({id, count, setCount, youAreDead} : Props){
    const score = useAppSelector(state => state.account.user?.score);
    const dispatch = useAppDispatch();

    const initPlayers = useCallback(async () => {
        try {
          await agent.Player.updateSocre(count)
          const players = await agent.Player.getAllThePlayers();
          await dispatch(fetchCurrentUser());
          dispatch(setPlayers(players));
        } catch (error) {
          console.log(error);
        }
      },[count, dispatch]);

    useEffect(()=>{const interval = setInterval(() => {
        if(youAreDead === false){
            setCount((prevCount:number) => prevCount + 1);
        }
    }, 500);
    return () => clearInterval(interval);
    },[count, setCount, youAreDead]);

    useEffect(() => {
        if(youAreDead &&  count > score!){
            initPlayers();
        }
    },[count, initPlayers, score, youAreDead])

    return(
        <div id={id}>
            <h4 style={{position: 'absolute', top: 0, color:'black'}}>{count}</h4>
            <div id='cloud1' />
            <div id='cloud2' />
            <div id='cloud3' />
            <div id='cloud4' />
            <div id='cloud5' />
        </div>
    )
}