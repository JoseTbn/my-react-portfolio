import React ,{ useState} from "react";
import './App.scss';
import Contact from './Components/Contact/Contact';
import Intro from './Components/Intro/Intro';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonials from './Components/Testimonials/Testimonials';
import Topbar from './Components/Topbar/Topbar';
import Works from './Components/Works/Works';
import Menu from './Components/Menu/Menu';
 

function App() {
 
  const [hamburgerExpand , setHamburgerExpand] = useState(false)
 
  return (
    <div className="App">
<Topbar hamburgerExpand ={hamburgerExpand} setHamburgerExpand={setHamburgerExpand}  />
    <Menu hamburgerExpand ={hamburgerExpand} setHamburgerExpand={setHamburgerExpand}/>
    <div className="sections">
<Intro/>
<Portfolio/>
<Works/>
<Testimonials/>
<Contact/>

    </div>
     
    </div>
  );
}

export default App;
