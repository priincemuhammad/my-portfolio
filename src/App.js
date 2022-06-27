import React, { useState } from 'react';
import { useEffect } from 'react';
import Header from '../src/components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Counter from './components/counter/Counterup';
import Projects from './components/projects/Projects';
import Start from './components/start/Start';
import Contact from './components/contact/Contact';
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
      <Counter />
      <Services />
      <Start />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
