import './App.css';
import Header from '../src/components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Counter from './components/counter/Counterup';
import Projects from './components/projects/Projects';
import Start from './components/start/Start';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Counter />
      <Services />
      <Projects />
      <Start />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
