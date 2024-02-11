import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Faq from './components/Faq';
import { Foot } from './components/Footer';

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
