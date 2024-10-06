import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Assets/png/logo_white.avif'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MobileNavBar from './MobileNavBar'




const Navbar = (props) => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <div className='header bg-black flex items-center justify-between lg:px-16 text-white'  >
        <div className='links flex gap-4'>
          <Link className='' to={''}>
            <img className="logo" alt='' src={Logo} />
          </Link>

        </div>
        <div onClick={() => setOpenMenu(!openMenu)} className='navTrigger flex gap-4 lg:hidden text-gray-100 cursor-pointer mx-4'>
          {openMenu ?
            <XMarkIcon className='size-6 text-white' /> :
            <Bars3Icon className='size-6 text-white' />
          }
        </div>
        {
          openMenu &&
          <MobileNavBar />
        }

        <div className=' items-center w-auto gap-28 hidden lg:flex '>
          <div className='list '>
            <ul>
              <li><Link className='link' to={"games"}>Games</Link></li>
              <li><Link className='link' to={"aboutus"}>about us</Link></li>
              <li><Link className='link' to={"support"}>support</Link></li>
            </ul>
          </div>
          <div className="info ">
            <div className="searchBox flex">
              <input placeholder='SEARCH' className='inputbox text-sm' type='text' />
              <button id="btn">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <div className='signIn'>
              <Link to={"signin"}><button className='btn  w-20'>Sign in</button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
