import React from 'react'
import '../Games/gameCards.css'
import valGameplay from './imges/VALORANT_gplay.mp4'
// import valorant from '../Home/val-png.png'
// import mainVid from '../Home/homePage.mp4'
import '../Home/Home.css'
import GamePlayCTA from '../../UI/GamePlayCTA'

const Valorant = () => {
  return (
    <div className='valMainDiv'>
      <div className='valoBan '>
        <div className='valBanInputs flex flex-col items-start justify-center h-full max-w-7xl w-full mx-auto px-8'>
          <p>EPISODE_06 // ACT II / YR 3</p>
          <h1 className='text-white font-bold uppercase text-5xl sm:text-7xl md:text-8xl lg:text-9xl pb-8 drop-shadow-sm'>Valorant</h1>
          <div className=' flex gap-y-8 flex-col sm:flex-row'>
            <button>play for free</button>
            <button>watch trailer</button>
          </div>
        </div>
      </div>
      <GamePlayCTA
        description={` Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games, for Windows. Teased under the codename Project A in October 2019, the game began a closed beta period with limited access on April 7, 2020, followed by a release on June 2, 2020
              Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.
            `}
        videoSrc={valGameplay}
        iconsClass={['fa-brands fa-windows']}
      />
    </div>
  )
}

export default Valorant
