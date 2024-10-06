import React from 'react'
import { Link } from 'react-router-dom'

const MobileNavBar = () => {
  return (
    <div className='bg-black absolute inset-x-0 top-[62px] h-screen lg:hidden z-50 border-t border-gray-700'>
      <div className='flex flex-col gap-y-1 p-6 text-white font-semibold text-base'>
        <div className="info w-fit mb-4 flex flex-col sm:flex-row items-start">
          <div className="searchBox flex">
            <input placeholder='SEARCH' className='inputbox text-sm' type='text' />
            <button id="btn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div className='signIn'>
            <Link to={"signin"}><button className='btn w-[160px]'>Sign in</button></Link>
          </div>
        </div>


        <Link className='link py-2 pl-2 rounded-lg hover:bg-gray-900' to={"/games"}>Games</Link>
        <Link className='link py-2 pl-2 rounded-lg hover:bg-gray-900' to={"/aboutus"}>about us</Link>
        <Link className='link py-2 pl-2 rounded-lg hover:bg-gray-900' to={"/support"}>support</Link>
      </div>

    </div>
  )
}

export default MobileNavBar