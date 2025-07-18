import './App.css'
import {HomePage} from "./Components/Pages/HomePage/HomePage.tsx";
import {Khamrah} from "./Components/Pages/PerfumesPages/Khamrah.tsx";
import {Route,useLocation} from "wouter";
import {KhamrahDukhan} from "./Components/Pages/PerfumesPages/KhamrahDukhan.tsx";

function App() {
  const [,setLocation]= useLocation()
    return (
      <div>
          <Route path={'/'} component={HomePage}/>
          <Route path={'/Khamrah'} component={Khamrah}/>
          <Route path={'/KhamrahDukhan'} component={KhamrahDukhan}/>
      </div>
  )
}

export default App
