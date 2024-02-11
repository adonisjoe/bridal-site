import './App.css';
import Footer from './components/Footer.jsx';
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
      <Footer />
    </>
  );
}

export default App;
