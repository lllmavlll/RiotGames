import React from 'react'
import Lorgplay from './imges/LOR_gplay.mp4'
import lortitle from './imges/LorTitle.png'
import GamePlayCTA from '../../UI/GamePlayCTA'


const Lor = () => {
  return (
    <div className='valMainDiv'>
      <div className='lorBan '>
        <div className='valBanInputs border border-transparent mx-8'>
          <img alt='' src={lortitle}></img>
        </div>
      </div>

      <GamePlayCTA
        description={` Legends of Runeterra is a 2020 digital collectible card game developed and published by Riot Games. Inspired by the physical collectible card game Magic: The Gathering, the developers sought to create a game within the same genre that significantly lowered the barrier to entry
          In conclusion, Legends of Runeterra is still a popular and thriving game. The game's unique gameplay, friendly community, and thriving esports scene are just a few of the reasons why players continue to enjoy the game.
          `}
        videoSrc={Lorgplay}
        iconsClass={['fa-brands fa-windows', 'fa-solid  fa-mobile']}
      />

    </div>
  )
}

export default Lor
