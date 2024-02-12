'use client';

import { Button, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <Navbar fluid rounded className='bg-primaryColor'>
      <Navbar.Brand href='https://BridalHairbyTrish.com'>
        <span className='self-center whitespace-nowrap text-xl lg:text-2xl font-fontSacra font-semibold dark:text-white'>
          <span className='text-tertiaryColor'>Bridal</span>
          <span className='text-secondaryColor'>Hair</span>{' '}
          <span className='text-secondaryColor'>by</span>
          <span className='text-tertiaryColor'>Trish</span>
        </span>
      </Navbar.Brand>
      <div className='flex md:order-2'>
        <Button gradientDuoTone='purpleToPink' pill>
          Book Now
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link className='text-secondaryColor' to='/'>
          Home
        </Link>
        <Link to='/contact' className='text-secondaryColor'>
          Contact
        </Link>
        <Link to='/about' className='text-secondaryColor'>
          About
        </Link>
        <Link to='/booking' className='text-secondaryColor'>
          Services
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Nav;
