import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <div className="row w-full flex flex-col md:flex-row ">
        <ul className='py-8 flex gap-6 md:gap-10 lg:gap-20 flex-col sm:flex-row items-start md:items-center'>
          <Link to={"/"} className='footerLinks'><li>home</li></Link>
          <Link to={"games"} className='footerLinks'><li>games</li></Link>
          <Link to={"aboutus"} className='footerLinks'><li>about us</li></Link>
          <Link to={"support"} className='footerLinks'><li>support</li></Link>
        </ul>
        <ul className='py-8 flex gap-10 lg:gap-20 md:pl-10 lg:pl-20'>
          <li><Link target='blank' to='https://www.facebook.com/RiotGames/'><i className="fa-brands fa-facebook-f"></i></Link></li>
          <li><Link target='blank' to='https://www.twitter.com/RiotGames/'><i className="fa-brands fa-twitter"></i></Link></li>
          <li><Link target='blank' to='https://www.linkedin.com/in/mahesh-k-n-732121251/'><i className="fa-brands fa-linkedin"></i></Link></li>
          <li><Link target='blank' to='https://www.youtube.com/RiotGames/'><i className="fa-brands fa-youtube"></i></Link></li>
        </ul>
      </div>
      <div className='row2'>
        <p>© 2023 Riot Games, Inc. All Rights Reserved.</p>
      </div>
    </div>)
}

export default Footer