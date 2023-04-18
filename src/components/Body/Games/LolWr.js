import React from 'react'
// import lolwrbg from './imges/lolwrb.png'
import lolwrgplay  from './imges/LOLwr_gplay.mp4'




const LolWr = () => {
  return (
    <div className='valMainDiv'>
        <div className='lolwrBan '>
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
              <p>
              League of Legends: Wild Rift is a multiplayer online battle arena mobile game developed and published by Riot Games for Android and iOS. The free-to-play game is a modified version of the PC game League of Legends.<br/>
              League of Legends: Wild Rift is a multiplayer online battle arena mobile game developed and published by Riot Games for Android and iOS. The free-to-play game is a modified version of the PC game League of Legends.
              </p>
            </div>
            <video autoPlay loop muted playsInline className='gplay1'>
                    <source src={lolwrgplay}/>
                </video>
          </div>
          <div className='valoBan2Div2'>
            <p>Avialable on</p> 
            <div className='gameIbg'>
          
              <i class="fa-solid  fa-mobile"></i>
            </div>

          </div>
        </div>
      
    </div>
  )
}

export default LolWr
