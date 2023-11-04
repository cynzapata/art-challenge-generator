import React, {useState} from 'react'
import './RandomChallenge.css'
import reload_icon from '../Assets/reload.png'


export const RandomChallenge = () => {
    
    let challenges = [];
    console.log(challenges)

    async function loadChallenges() {
        const response = await fetch("challenge.json");
        challenges = await response.json();
    }

    const random = () => {
        const select = challenges[Math.floor(Math.random()*challenges.length)]
        setChallenge(select);
    }
  
    const[challenge,setChallenge] = useState({
        challenge: "frog with a strawberry"
    });

    loadChallenges();

    return (

    <div className='container'>
         
        <div className="challenge">Draw a {challenge.challenge}</div>
        <div>
            <div className='line'></div>
            <div className="bottom">
            <div className="icons">
                <img src={reload_icon} onClick={()=>{random()}} alt="reload icon" />
            </div>
            </div>
        </div>
    </div>
  )
}


export default RandomChallenge