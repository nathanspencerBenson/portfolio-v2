
import './App.scss';
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
    </div>
  );
}

export default App;
