import './App.css';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Booking from './pages/Booking';
import About from './pages/About';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='links'>
          <Navbar Link={Link} />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        {/* <App /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
