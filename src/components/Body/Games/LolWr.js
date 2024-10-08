import React from 'react'
// import lolwrbg from './imges/lolwrb.png'
import lolwrgplay from './imges/LOLwr_gplay.mp4'
import GamePlayCTA from '../../UI/GamePlayCTA'




const LolWr = () => {
  return (
    <div className='valMainDiv'>
      <div className='lolwrBan '>
        <div className='valBanInputs'>
          <div className='valBanBtn'>
           
          </div>
        </div>
      </div>
      <GamePlayCTA
        videoSrc={lolwrgplay}
        description={`League of Legends: Wild Rift is a multiplayer online battle arena mobile game developed and published by Riot Games for Android and iOS. The free-to-play game is a modified version of the PC game League of Legends.
              League of Legends: Wild Rift is a multiplayer online battle arena mobile game developed and published by Riot Games for Android and iOS. The free-to-play game is a modified version of the PC game League of Legends.
            `}
        iconsClass={
          ['fa-solid  fa-mobile']
        }
      />


    </div>
  )
}

export default LolWr
