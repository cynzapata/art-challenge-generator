import React, {useState} from 'react'
import './RandomChallenge.css'
import reload_icon from '../Assets/reload.png'

export const RandomChallenge = () => {
  
    const[challenge,setChallenge] = useState({
        text: "Draw a frog with a strawberry"
    });
    return (

    <div className='container'>
        <div className="challenge">{challenge.text}</div>
        <div>
            <div className='line'></div>
            <div className="bottom"></div>
            <div className="icons">
                <img src={reload_icon} alt="reload icon" />
    
            </div>
        </div>
    </div>
  )
}


export default RandomChallenge