import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = ()=>{
    return(<div className="footer">
      <div className="row">
        <ul>
            <Link to={"/"} className='footerLinks'><li>home</li></Link>
            <Link to={"games"} className='footerLinks'><li>games</li></Link>
            {/* <Link to={"news"} className='footerLinks'><li>news</li></Link> */}
            <Link to={"aboutus"} className='footerLinks'><li>about us</li></Link>
            <Link to={"support"} className='footerLinks'><li>support</li></Link>
            <li><a target='blank' href='https://www.facebook.com/RiotGames/'><i class="fa-brands fa-facebook-f"></i></a></li>
            <li><a target='blank' href='https://www.twitter.com/RiotGames/'><i class="fa-brands fa-twitter"></i></a></li>
            <li><a target='blank' href='https://www.linkedin.com/in/mahesh-k-n-732121251/'><i class="fa-brands fa-linkedin"></i></a></li>
            <li><a target='blank' href='https://www.youtube.com/RiotGames/'><i class="fa-brands fa-youtube"></i></a></li>
        </ul>
            {/* <button className='goTop'><i class="fa-solid fa-angle-up"></i></button> */}
      </div>
      <div className='row2'>
        <p>© 2023 Riot Games, Inc. All Rights Reserved.</p>
        
      </div>
    </div>)
}

export default Footer