import './App.css'
import {HomePage} from "./Components/Pages/HomePage/HomePage.tsx";
import {Khamrah} from "./Components/Pages/PerfumesPages/Khamrah.tsx";
import {Route,useLocation} from "wouter";
import {KhamrahDukhan} from "./Components/Pages/PerfumesPages/KhamrahDukhan.tsx";
import {AsadB} from "./Components/Pages/PerfumesPages/AsadB.tsx";
import {Mashrabya} from "./Components/Pages/PerfumesPages/Mashrabya.tsx";
import {Ninepm} from "./Components/Pages/PerfumesPages/9pm.tsx";
import {nineAm} from "./Components/Pages/PerfumesPages/9amdive.tsx";
import {TurathiBlue} from "./Components/Pages/PerfumesPages/TurathiBlue.tsx";
import {FrenchT} from "./Components/Pages/PerfumesPages/FrenchT.tsx";
import {GreekTobacco} from "./Components/Pages/PerfumesPages/GreekTobacco.tsx";
import {SpanishTobacco} from "./Components/Pages/PerfumesPages/SpanishTobacco.tsx";

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


      </div>
  )
}

export default App
