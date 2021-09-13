import './App.scss';
import Contact from './Components/Contact/Contact';
import Intro from './Components/Intro/Intro';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonials from './Components/Testimonials/Testimonials';
import Topbar from './Components/Topbar/Topbar';
import Works from './Components/Works/Works';

function App() {
  return (
    <div className="App">
<Topbar/>
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
