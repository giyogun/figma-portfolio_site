import About from './About/About';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Contact />
      <About />
      <Footer />
    </div>
  );
}

export default App;
