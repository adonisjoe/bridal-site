import './App.css';
import { Foot } from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Faq from './components/Faq';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Faq />
      <Foot />
    </>
  );
}

export default App;
