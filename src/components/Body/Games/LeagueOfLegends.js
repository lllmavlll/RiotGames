import React from 'react'
import valGameplay from './imges/LOL_gameplay.webm'
import GamePlayCTA from '../../UI/GamePlayCTA'


const LeagueOfLegends = () => {
  return (
    <div className='valMainDiv'>
      <div className='lolBan'>
        <div className='valBanInputs'>

        </div>
      </div>
      <GamePlayCTA
        videoSrc={valGameplay}
        description={`League of Legends, commonly referred to as League, is a 2009 multiplayer online battle arena video game developed and published by Riot Games. Inspired by Defense of the Ancients, a custom map for Warcraft III, Riot's founders sought to develop a stand-alone game in the same genre.
              The primary reason for LoL's popularity is its accessibility. League of Legends is one of the first video games to introduce a free-to-play model to success. They released the game without any price tag. Instead, the company monetized through cosmetics that provided no in-game benefits aside from aesthetics.`}
        iconsClass={
          ['fa-brands fa-windows', 'fa-brands fa-apple']
        }
      />
    </div>
  )
}

export default LeagueOfLegends
