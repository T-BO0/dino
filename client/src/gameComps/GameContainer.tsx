import { useRef, useState } from "react";
import Clouds from "./Top/Clouds";
import Bottom from "./Bottom/Bottom";
import './GameContainer.css';

export default function GameContainer(){
    const [isJumping, setIsJumping] = useState(false);
    const [count, setCount] = useState(0);
    const [youAreDead, setYouAreDead] = useState(false);
    const [isNotPlaying, setIsNotPlaying] = useState(true);
    const gameDiv = useRef<HTMLDivElement | null>(null)
    function handlejump(event: React.KeyboardEvent<HTMLInputElement>){
      if(event.key === ' '){
  
          setIsJumping(true);
          setTimeout(()=>setIsJumping(false), 600);
      }
  }


    if(isNotPlaying){
      return (
          <div id="game">
            <button type="button" onClick={()=>setIsNotPlaying(false)} style={{marginLeft:'260px', marginTop: '20px'}}>play</button>
          </div>
      )
    }
  
    return (
        <div ref={gameDiv} id="game" tabIndex={0} onKeyDown={handlejump}>
          <Clouds id='cloud' count={count} setCount={setCount} youAreDead={youAreDead} />
          <Bottom setCounter={setCount} youAreDead={youAreDead} setYouAreDead={setYouAreDead} id='bottom' isJumping={isJumping} />
        </div>
    )
}
