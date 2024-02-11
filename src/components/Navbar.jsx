'use client';

import { Button, Navbar } from 'flowbite-react';

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
        <Navbar.Link href='#' active>
          Home
        </Navbar.Link>
        <Navbar.Link className='text-secondaryColor' href='#'>
          About
        </Navbar.Link>
        <Navbar.Link className='text-secondaryColor' href='#'>
          Services
        </Navbar.Link>
        <Navbar.Link className='text-secondaryColor' href='#'>
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Nav;
