import React from 'react'
import Lorgplay  from './imges/LOR_gplay.mp4'
import lortitle  from './imges/LorTitle.png'


const Lor = () => {
  return (
    <div className='valMainDiv'>
    <div className='lorBan '>
        <div className='valBanInputs'>
          <img alt='' src={lortitle}></img>
            <button>play for free</button>
        </div>
    </div>
    <div className='valoBan2'>
      <div className='valoBan2Div1'>
        <div className='gplay'>
          <h1>Game play</h1>
          <p>
          Legends of Runeterra is a 2020 digital collectible card game developed and published by Riot Games. Inspired by the physical collectible card game Magic: The Gathering, the developers sought to create a game within the same genre that significantly lowered the barrier to entry<br/>
          In conclusion, Legends of Runeterra is still a popular and thriving game. The game's unique gameplay, friendly community, and thriving esports scene are just a few of the reasons why players continue to enjoy the game.
          </p>
        </div>
        <video autoPlay loop muted playsInline className='gplay1'>
                <source src={Lorgplay}/>
            </video>
      </div>
      <div className='valoBan2Div2'>
        <p>Avialable on</p> 
        <div className='gameIbg'>
          <i class="fa-brands fa-windows"></i>
          <i class="fa-solid  fa-mobile"></i>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Lor
