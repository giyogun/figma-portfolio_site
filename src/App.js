import About from './About/About';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Contact />
      <About />
    </div>
  );
}

export default App;
