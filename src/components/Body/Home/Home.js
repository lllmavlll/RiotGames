import './Navbar.css'
import './Home.css'
import homeImg from '../Home/mage.png'
import mainVid from '../Home/homePage.mp4'
import espImg1 from '../Home/espImg1.jpeg'
import espImg2 from '../Home/espImg2.jpeg'
import entImg1 from '../Home/entImg1.jpeg'
import entImg2 from '../Home/entImg2.jpeg'
import valorant from '../Home/val-png.png'
import EsoprtsCard from '../../UI/EsoprtsCard';

const Home = () => {

  const espCards = [
    {
      src: espImg1,
    },
    {
      src: espImg2,
    }
  ]
  const entCards = [
    {
      src: entImg1,
    },
    {
      src: entImg2,
    }
  ]


  return (
    <>
      <div className='h-screen lg:h-[95vh] relative flex items-center object-cover justify-center bg-black/40'>
        <video
          className='absolute -z-10 object-cover mainVid w-full h-screen'
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={mainVid} />
        </video>

        <div className='homeDiv2Con'>
          <p>A 5v5 character-based tactical shooter</p>
          <img alt='' src={valorant} />
          <button className="valBtn" > PLAY FREE</button>
        </div>
      </div>


      <div className='homeDiv1 flex items-center justify-start h-[90vh]'>

        <div className='maincard '>
          <img alt='' src={homeImg} />
          <h2>Coming April 18 - Developed by Digital<br /> Sun</h2>
          <p>The Mageseeker is an action RPG set in the League of<br /> Legends universe. Play as Sylas and wield the chains that <br />once bound you to liberate Demacia from tyranny.</p>
          <button className='mainBtn'>Lear More</button>
        </div>
      </div>
      <div className='homeDiv3'>
        <h1>Esports</h1>
        <div className='EspImg flex flex-col lg:flex-row gap-10' >

          {espCards?.map((card, index) => (
            <EsoprtsCard src={card?.src}
              key={index}
            />
          ))}

        </div>
        <h1>Entertainment</h1>
        <div className='EspImg flex flex-col lg:flex-row gap-10' >
          {entCards?.map((card, index) => (
            <EsoprtsCard src={card?.src}
              key={index}
            />
          ))}

        </div>
      </div>
    </>
  )

}
export default Home