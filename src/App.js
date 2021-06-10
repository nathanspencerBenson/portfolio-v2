
import './App.scss';
import Landingpage from './components/Landingpage/Landingpage';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Landingpage />
     <Projects />
    </div>
  );
}

export default App;
