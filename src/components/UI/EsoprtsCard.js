import { HeartIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'
const EsoprtsCard = ({ src }) => {
  const [isLiked, setIsLiked] = useState(false)

  const LikedStyl = {
    color: isLiked ? "#d13738" : "grey",

  }
  return (
    <div className=' EspImgDiv1'>
      <div className='relative flex jc'>

        <img alt='Card' src={src} />
        <button onClick={() => {
          setIsLiked(!isLiked)
        }} className={`text-white size-10 absolute bottom-6 left-6 md:bottom-10 md:left-10`}>

          <HeartIcon style={LikedStyl} className={`text-white size-6 sm:size-10 shadow-lg`} />
        </button>
      </div>
    </div>
  )
}

export default EsoprtsCard