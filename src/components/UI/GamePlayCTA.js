import React from 'react'

const GamePlayCTA = ({ description, videoSrc, iconsClass = ['fa-brands fa-windows'] }) => {
  return (
    <div className='valoBan2 h-full px-6'>
      <div className='valoBan2Div1 flex flex-col lg:flex-row gap-20 mx-auto max-w-7xl py-20 items-center justify-center '>
        <div className='gplay max-w-[600px] w-full'>
        <h1>Game play</h1>

          <p>{description}</p>
        </div>
        <video autoPlay loop muted playsInline className='gplay1'>
          <source src={videoSrc} />
        </video>
      </div>
      <div className='valoBan2Div2'>
        <p>Avialable on</p>
        <div className='gameIbg'>
          {iconsClass && iconsClass?.map((icon,indx) => (

            <i key={indx} className={icon}></i>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GamePlayCTA