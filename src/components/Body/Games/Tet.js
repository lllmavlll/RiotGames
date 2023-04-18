import React from 'react'
import tetgplay  from './imges/TET_gplay.webm'


const Tet = () => {
  return (
    <div className='valMainDiv'>
        <div className='tetBan '>
            <div className='valBanInputs'>
              <div className='valBanBtn'>
                <button>play for free</button>
                <button>watch trailer</button>
              </div>
            </div>
        </div>
        <div className='valoBan2'>
          <div className='valoBan2Div1'>
            <div className='gplay'>
              <h1>Game play</h1>
              <p>Teamfight Tactics is an auto battler game developed and published by Riot Games. The game is a spinoff of League of Legends and is based on Dota Auto Chess, where players compete online against seven other opponents by building a team to be the last one standing.<br/>
              According to President of Esports John Needham, TFT is “the number one strategy game in the world right now,” beating out many other popular strategy game titles like Starcraft and Hearthstone.
              </p>
            </div>
            <video autoPlay loop muted playsInline className='gplay1'>
                    <source src={tetgplay}/>
                </video>
          </div>
          <div className='valoBan2Div2'>
            <p>Avialable on</p> 
            <div className='gameIbg'>
            <i class="fa-brands fa-windows"></i>
            <i class="fa-brands fa-apple"></i>
            <i class="fa-solid  fa-mobile"></i>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Tet
