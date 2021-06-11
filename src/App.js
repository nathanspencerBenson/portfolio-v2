
import './App.scss';
import About from './components/About/About';
import Landingpage from './components/Landingpage/Landingpage';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Landingpage />
     <Projects />
     <Skills />
     <About />
    </div>
  );
}

export default App;
