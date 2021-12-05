
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
          <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/aboutus" element={ <About />} />
          <Route path="/contact" element={ <Contact />} />
          <Route path="/projects" element={ <Projects />} />
          </Routes>
        
          

          
      </Router>
    </div>
  );
}

export default App;
