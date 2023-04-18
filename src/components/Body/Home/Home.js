// import Logo from '../Assets/png/logo_white.avif'
// import logo1 from '../Assets/png/logo_invert.jpeg'
import {useState} from 'react';

import './Navbar.css'
import './Home.css'
import homeImg from '../Home/mage.png'
import mainVid from '../Home/homePage.mp4'
import espImg1 from '../Home/espImg1.jpeg'
import espImg2 from '../Home/espImg2.jpeg'
import entImg1 from '../Home/entImg1.jpeg'
import entImg2 from '../Home/entImg2.jpeg'
import valorant from '../Home/val-png.png'

const Home =(props)=>{
    const[isLiked, setIsLiked ] = useState(false)
       
    // const isLiked = true    
   
    const onClickAction=()=>{
        
        setIsLiked(!isLiked)
    }
    const LikedStyl ={
        color:isLiked? "#d13738":"grey",
        background:"transperent",
        // border:isLiked?"2px solid #d13738":"2px solid black",
        borderRadius:"5px",
        padding:"3px",
        textAlign:"center",
        cursor:"pointer",
    boxShadow: "0 10px 10px rgba(0, 0, 0, 0.2)"


    }
  

    return (
        <div >
        
            <div className='homeDiv2'>
                <video autoPlay loop muted playsInline className='mainVid'>
                    <source src={mainVid}/>
                </video>

                 <div className='homeDiv2Con'>
                    <p>A 5v5 character-based tactical shooter</p>
                    <img alt='' src={valorant}/>
                     <button className="valBtn" > PLAY FREE</button>
                 </div>
            </div>
            <div className='homeDiv1'>
             
                <div className='maincard'>
                    <img alt=''src={homeImg}/>
                    <h2>Coming April 18 - Developed by Digital<br/> Sun</h2>
                    <p>The Mageseeker is an action RPG set in the League of<br/> Legends universe. Play as Sylas and wield the chains that <br/>once bound you to liberate Demacia from tyranny.</p>
                    <button className='mainBtn'>Lear More</button>
                </div>
            </div>
            <div className='homeDiv3'>
                <h1>Esports</h1>
                <div className='EspImg'>
                    <div className='EspImgDiv1'>
                        <img alt='' src={espImg1}></img>
                        <button onClick={onClickAction} className='EspImgBtn1'>
                        <i style={LikedStyl} class="fa-solid fa-heart"></i>
                        </button>
                    </div>
                    <div className='EspImgDiv2'>
                        <img alt='' src={espImg2}></img>
                        <button onClick={onClickAction} className='EspImgBtn2'>
                        <i style={LikedStyl} class="fa-solid fa-heart"></i>
                    </button>
                     </div>  
                </div>
                <h1>Entertainment</h1>
                <div className='EspImg'>
                <div className='EspImgDiv1'>
                        <img alt='' src={entImg1}></img>
                        <button onClick={onClickAction} className='EspImgBtn1'>
                        <i style={LikedStyl} class="fa-solid fa-heart"></i>
                        </button>
                    </div>
                    <div className='EspImgDiv2'>
                        <img alt='' src={entImg2}></img>
                        <button onClick={onClickAction} className='EspImgBtn2'>
                        <i style={LikedStyl} class="fa-solid fa-heart"></i>
                    </button>
                     </div> 
                </div>
            </div>
         </div>
    )

}
export default Home