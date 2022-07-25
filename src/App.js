import React, { useState } from 'react';
import { useEffect } from 'react';
import Header from '../src/components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Sayhello from './components/Sayhello/Sayhello';
import Networtyprojects from './components/networthyPrjct/Networthyprojects';
import Footer from './components/footer/Footer';
import Experiences from './components/experience/Experiences';
function App() {
  const [theme, setTheme] = useState('themeOne');
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <Header setNewTheme={setTheme} />
      <Home setNewTheme={setTheme} />
      <About />
      <Experiences />
      <Projects />
      <Networtyprojects />
      <Sayhello />
      <Footer />
    </div>
  );
}

export default App;
