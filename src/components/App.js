import Appmode from './AppMode.js';
import Navbar from './Navbar.js';
import '../styles/App.css';
import { useState } from 'react';
import NavBar from './Navbar.js';
import Profile from './Profile.js';
import About from './About.js';
import NavigationTabs from './NavigationTabs.js';
import Projects from './Projects.js';


function App() {
  const [mode,setMode] = useState(Appmode.PROFILE);

  return (
    <div className="App">
      <header className="App-header">
      <NavBar></NavBar>
      <NavigationTabs mode = {mode}
                      setMode = {setMode}/>
      {mode== Appmode.PROFILE && <Profile></Profile>}
      {mode== Appmode.ABOUT && <About></About>}
      {mode== Appmode.PROJECTS && <Projects></Projects>}
      </header>
    </div>
  );
}

export default App;
