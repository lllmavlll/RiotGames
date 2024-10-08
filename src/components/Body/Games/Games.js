import { Routes, Route, Link } from 'react-router-dom'
import '../Games/Games.css'
import gamesBanner from '../Games/gamesBanner.webp'
import valImg from '../Games/valImg.jpeg'
import lolImg from '../Games/lolImg.jpeg'
import lolWrImg from '../Games/lolwrImg.jpeg'
import lorImg from '../Games/lorImg.jpeg'
import tetImg from '../Games/tetImg.jpeg'
import Valorant from './Valorant'
import LeagueOfLegends from './LeagueOfLegends'
import LolWr from './LolWr'
import Tet from './Tet'
import Lor from './Lor'
import '../Games/gameCards.css'




const Games = () => {
  return (<>
    <div>
      <div className='gameDiv1'>
        <h1>Games</h1>
        <div className='gameBanner'>
          <img alt='' src={gamesBanner} />
        </div>
      </div>
      <div className='gameDiv2'>
        <div className='gameColumn1'>
          <Link to={'valorant'}>
            <button className='gameCard g1'>
              <img alt='' src={valImg} />
            </button>
          </Link>
          <Link to={'leagueoflegends'}>
            <button className='gameCard g2'>
              <img alt='' src={lolImg} />
            </button>
          </Link>
          <Link to={'leagueoflegendswildrift'}>
            <button className='gameCard g3'>
              <img alt='' src={lolWrImg} />
            </button>
          </Link>
          <Link to={'teamfighttactics'}>
            <button className='gameCard g4'>
              <img alt='' src={tetImg} />
            </button>
          </Link>
          <Link to={'legendsofruneterra'}>
            <button className='gameCard g5'>
              <img alt='' src={lorImg} />
            </button>
          </Link>
        </div>

        <div className='gameColumn2'>
          <Routes>
            <Route path='valorant' element={<Valorant />} />
            <Route path='leagueoflegends' element={<LeagueOfLegends />} />
            <Route path='leagueoflegendswildrift' element={<LolWr />} />
            <Route path='teamfighttactics' element={<Tet />} />
            <Route path='legendsofruneterra' element={<Lor />} />
          </Routes>
        </div>
      </div>
      <div className='gameDiv3'>
        <h2>Submit your Clips!</h2>
        <p>Your videos will look their best on every device, anywhere.<br />
          Take control with private links, password protection, and flexible storage options.<br />
          Join the world’s best community of talented, supportive creators.
        </p>
        <input className='fileUpload' type='file' />
      </div>
    </div>


  </>
  )

}
export default Games