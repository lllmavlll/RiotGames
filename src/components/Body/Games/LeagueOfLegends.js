import React from 'react'
import valGameplay  from './imges/LOL_gameplay.webm'


const LeagueOfLegends = () => {
  return (
    <div className='valMainDiv'>
        <div className='lolBan'>
            <div className='valBanInputs'>
              {/* <div className='valBanBtn'>
                <button>play for free</button>
                <button>watch trailer</button>
              </div> */}
            </div>
        </div>
        <div className='valoBan2'>
          <div className='valoBan2Div1'>
            <div className='gplay'>
              <h1>Game play</h1>
              <p>League of Legends, commonly referred to as League, is a 2009 multiplayer online battle arena video game developed and published by Riot Games. Inspired by Defense of the Ancients, a custom map for Warcraft III, Riot's founders sought to develop a stand-alone game in the same genre.<br/>
              The primary reason for LoL's popularity is its accessibility. League of Legends is one of the first video games to introduce a free-to-play model to success. They released the game without any price tag. Instead, the company monetized through cosmetics that provided no in-game benefits aside from aesthetics.</p>
            </div>
            <video autoPlay loop muted playsInline className='gplay1'>
                    <source src={valGameplay}/>
                </video>
          </div>
          <div className='valoBan2Div2'>
            <p>Avialable on</p> 
            <div className='gameIbg'>
              <i class="fa-brands fa-windows"></i>
              <i class="fa-brands fa-apple"></i>
            </div>

          </div>
        </div>
      
    </div>
  )
}

export default LeagueOfLegends
