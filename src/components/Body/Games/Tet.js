import React from 'react'
import tetgplay from './imges/TET_gplay.webm'
import GamePlayCTA from '../../UI/GamePlayCTA'


const Tet = () => {
  return (
    <div className='valMainDiv'>
      <div className='tetBan '>
        <div className='valBanInputs'>
          <div className='valBanBtn'>
         
          </div>
        </div>
      </div>

      <GamePlayCTA
        description={`Teamfight Tactics is an auto battler game developed and published by Riot Games. The game is a spinoff of League of Legends and is based on Dota Auto Chess, where players compete online against seven other opponents by building a team to be the last one standing.
              According to President of Esports John Needham, TFT is “the number one strategy game in the world right now,” beating out many other popular strategy game titles like Starcraft and Hearthstone.
              `}
        videoSrc={tetgplay}
        iconsClass={[
          "fa-brands fa-windows",
          "fa-brands fa-apple",
          "fa-solid  fa-mobile"
        ]}
      />
    </div>
  )
}

export default Tet
