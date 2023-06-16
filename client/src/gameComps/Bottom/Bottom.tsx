import './Bottom.css';
import 'animate.css';
import { Cactus1, Dinj, Dinr } from './dino';
import { SetStateAction, useEffect, useRef, useState } from 'react';
interface Props{
    id:string;
    isJumping:boolean;
    youAreDead:boolean;
    setYouAreDead: (uad:SetStateAction<boolean>) => void;
    setCounter: (ctr: SetStateAction<number>) => void;
}

function generateRandomNumber(): number {
    const min = 1400;
    const max = 2000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


export default function Bottom({id, isJumping, youAreDead, setYouAreDead, setCounter}:Props){
    const [secondOb, setSecondOb] = useState(false);
    const [speed, setSpeed] = useState(3);
    const [jSpeed, setJSpeed] = useState(.5);
    const rex = useRef<HTMLDivElement | null>(null);
    const cac = useRef<HTMLDivElement | null>(null);
    const cac2 = useRef<HTMLDivElement | null>(null);

    useEffect(() => {const interval = setInterval(() => {
      if(rex.current != null && cac.current != null && cac2.current != null)
      {
        const ry = rex.current.offsetTop;
        const cx = cac.current.offsetLeft;
        const cx2 = cac2.current.offsetLeft;
        setSpeed(speed => speed-0.00001);
        setJSpeed(speed => speed-0.00001);
        
        
        if((10 > cx || cx2 < 10) && ry > 50){
          setYouAreDead(true);
        }
        
      }
        
    }, 1);
    const timer = setTimeout(() => setSecondOb(true), generateRandomNumber());
      return ()=>{
        setSpeed(3);
        setJSpeed(.5);
        clearInterval(interval);
        clearTimeout(timer);
        setSecondOb(false);
      };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[setYouAreDead, youAreDead])
    
   function handleReplay(){
      setCounter(0);
      setYouAreDead(false);
   }
    return(
      <>
        {youAreDead ? (
          <button onClick={handleReplay} style={{marginLeft:"240px"}}>
            You are dead
            <h6>replay?</h6>
          </button>):(
          <div id={id}>
          {isJumping ? <Dinj $speed={jSpeed} ref={rex}/>
            : <Dinr ref={rex}/>
          }
          <Cactus1 $speed={speed} ref={cac} id='cactus-1'/>
          {secondOb && <Cactus1 $speed={speed} ref={cac2} id='cactus-2'/>}
          <div id='ground'/>
        </div>)}
      </>
    )
}


