// import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Assets/png/logo_white.avif'
import logo1 from '../Assets/png/logo_invert.jpeg'




const Navbar = (props)=> {
    const navMain={
        backgroundColor:"black",
        color:"white",
        display:"flex",
        alignItems:"center"

        }
        // const [value, setValue]=useState();

        //  const onChange =(e)=>{
        //     setValue(e.target.value)
        //  }
        //  const onSearch =(searchTerm)=>{
        //     //API call
        //     console.log('search', searchTerm)
        //  }
   
  return (
    <>
    <div className='header' style={navMain}>
        <div className='links'>
            <img className="logo" alt='' src={Logo}/>
            <Link className='logo1'to={''}>
                <img  alt='' src={logo1}/>
            </Link>
        </div>
        <div className='list'>
        <ul>
            <li><Link className='link' to={"games"}>Games</Link></li>
            {/* <li><Link className='link' to={"news"}>News</Link></li> */}
            <li><Link className='link' to={"aboutus"}>about us</Link></li>
            <li><Link className='link' to={"support"}>support</Link></li>
            
                </ul>
        </div>
       <div className="info">
           <div className="searchBox">
               <input placeholder='SEARCH'  className='inputbox' type='text'/>
               <button  id="btn">
                   <i class="fa-solid fa-magnifying-glass"></i>
               </button>
                   
           </div>
           <div className='signIn'>
                 <Link to={"signin"}><button className='btn'>Sign in</button></Link>
           </div>
       </div>
       
       
   </div>
       
       </>
  )
}

export default Navbar
