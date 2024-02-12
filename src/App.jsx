import './App.css';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Booking from './pages/Booking';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Foot from './components/Footer';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Foot />
      </BrowserRouter>
    </>
  );
}

export default App;
