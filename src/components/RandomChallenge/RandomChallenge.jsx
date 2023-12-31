import React, {useState} from 'react'
import './RandomChallenge.css'
import reload_icon from '../Assets/button.jpeg'
import title from '../Assets/title.jpeg'

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
         <div className="cat">
         <div className="title">
            <img src={title} alt="text that says 365 drawing challenges" />
          </div>
         
        <div className="challenge">Draw a {challenge.challenge}</div>
       
            <div className="bottom">
                <div className="icons">
                    <img src={reload_icon} onClick={()=>{random()}} alt="reload icon" />
                </div>
                </div>
                
                </div>
            <div className='credits'>Made by Cynthia Zapata</div>
           
        </div>
    
  )
}


export default RandomChallenge