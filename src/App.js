import {  BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar/Navbar';
import Home from './components/Body/Home/Home';
import Games from './components/Body/Games/Games';
import News from './components/Body/News/News';
import About from './components/Body/AboutUs/About';
import Support from './components/Body/Support/Support';
import SignIn from './components/Body/SignIn/SignIn';
import Valorant from './components/Body/Games/Valorant';
import LeagueOfLegends from './components/Body/Games/LeagueOfLegends';
import LolWr from './components/Body/Games/LolWr';
import Lor from './components/Body/Games/Lor';
import Tet from './components/Body/Games/Tet';
// import ScrollToTop from './components/ScrollToTop/ScrollToTop';




function App (props) {

  
  return (
 <BrowserRouter>
 {/* <ScrollToTop/> */}
 <Navbar/>
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='games' element={<Games/>}>
        <Route path='valorant' element={<Valorant/>}/>
        <Route path='leagueoflegends' element={<LeagueOfLegends/>}/>
        <Route path='leagueoflegendswildrift' element={<LolWr/>}/>
        <Route path='teamfighttactics' element={<Tet/>}/>
        <Route path='legendsofruneterra' element={<Lor/>}/>
      </Route>
      <Route path='news' element={<News/>}/>
      <Route path='aboutus' element={<About/>}/>
      <Route path='support' element={<Support/>}/>
      <Route path='signin' element={<SignIn/>}/>
    </Routes>
    <Footer/>
 </BrowserRouter>
  );
}

export default App;
