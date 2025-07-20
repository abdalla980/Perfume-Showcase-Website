import './App.css'
import {HomePage} from "./Components/Pages/HomePage/HomePage.tsx";
import {Khamrah} from "./Components/Pages/PerfumesPages/Perfumes/Khamrah.tsx";
import {Route,useLocation} from "wouter";
import {KhamrahDukhan} from "./Components/Pages/PerfumesPages/Perfumes/KhamrahDukhan.tsx";
import {AsadB} from "./Components/Pages/PerfumesPages/Perfumes/AsadB.tsx";
import {Mashrabya} from "./Components/Pages/PerfumesPages/Perfumes/Mashrabya.tsx";
import {Ninepm} from "./Components/Pages/PerfumesPages/Perfumes/9pm.tsx";
import {nineAm} from "./Components/Pages/PerfumesPages/Perfumes/9amdive.tsx";
import {TurathiBlue} from "./Components/Pages/PerfumesPages/Perfumes/TurathiBlue.tsx";
import {FrenchT} from "./Components/Pages/PerfumesPages/Perfumes/FrenchT.tsx";
import {GreekTobacco} from "./Components/Pages/PerfumesPages/Perfumes/GreekTobacco.tsx";
import {SpanishTobacco} from "./Components/Pages/PerfumesPages/Perfumes/SpanishTobacco.tsx";
import {ClubDeNuit} from "./Components/Pages/PerfumesPages/Perfumes/ClubDeNuit.tsx";
import {ClubDeNuitUntold} from "./Components/Pages/PerfumesPages/Perfumes/ClubDeNuitUntold.tsx";
import {BlueIconic} from "./Components/Pages/PerfumesPages/Perfumes/BlueIconic.tsx";
import {LiquidBrun} from "./Components/Pages/PerfumesPages/Perfumes/LiquidBrun.tsx";
import {AzzureAoud} from "./Components/Pages/PerfumesPages/Perfumes/AzzureAoud.tsx";
import {Aether} from "./Components/Pages/PerfumesPages/Perfumes/Aether.tsx";
import {RamzLattafaAR} from "./Components/Pages/PerfumesPages/Perfumes/RamzLattafaAR.tsx";
import {MahirBlack} from "./Components/Pages/PerfumesPages/Air Refreshners/MahirBlack.tsx";
import {FakharWomen} from "./Components/Pages/PerfumesPages/Air Refreshners/FakharWomen.tsx";
import {AnaAlAbyedh} from "./Components/Pages/PerfumesPages/Air Refreshners/AnaAlAbyedh.tsx";
import {fakharLattafa} from "./Components/Pages/PerfumesPages/Air Refreshners/fakharLattafa.tsx";
import {Mahir} from "./Components/Pages/PerfumesPages/Air Refreshners/Mahir.tsx";

function App() {
  const [,setLocation]= useLocation()
    return (
      <div>
          <Route path={'/'} component={HomePage}/>
          <Route path={'/Khamrah'} component={Khamrah}/>
          <Route path={'/KhamrahDukhan'} component={KhamrahDukhan}/>
          <Route path={'/AsadBourboun'} component={AsadB}/>
          <Route path={'/Mashrabya'} component={Mashrabya}/>
          <Route path={'/9pm'} component={Ninepm}/>
          <Route path={'/9amDive'} component={nineAm}/>
          <Route path={'/TurathiBlue'} component={TurathiBlue}/>
          <Route path={'/FrenchTobacco'} component={FrenchT}/>
          <Route path={'/GreekTobacco'} component={GreekTobacco}/>
          <Route path={'/SpanishTobacco'} component={SpanishTobacco}/>
          <Route path={'/ClubDeNuit'} component={ClubDeNuit}/>
          <Route path={'/ClubDeNuitUntold'} component={ClubDeNuitUntold}/>
          <Route path={'/BlueIconic'} component={BlueIconic}/>
          <Route path={'/LiquidBrun'} component={LiquidBrun}/>
          <Route path={'/AzzureAoud'} component={AzzureAoud}/>
          <Route path={'/Aether'} component={Aether}/>
          <Route path={'/RamzLataffaAirRefreshner'} component={RamzLattafaAR}/>
            <Route path={'/MahirBlackAir'} component={MahirBlack}/>
            <Route path={'/FakharWomenAir'} component={FakharWomen}/>
            <Route path={'/AnaAlAbyedhAir'} component={AnaAlAbyedh}/>
            <Route path={'/FakharLattafaAir'} component={fakharLattafa}/>
            <Route path={'/MaahirAir'} component={Mahir}/>









      </div>
  )
}

export default App
