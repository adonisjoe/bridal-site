import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //set toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (Window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  });

  const navItems = [
    { link: 'Home', path: 'home' },
    { link: 'Service', path: 'service' },
    { link: 'Booking', path: 'booking' },
    { link: 'Contact', path: 'contact' },
    { link: 'About', path: 'about' },
  ];
  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
      <nav>
        <div>
          <a
            href=''
            className='text-2xl font-semibold flex items-center space-x-3'
          >
            <img
              src={'logo'}
              alt=''
              className='w-10 inline-block items-center'
            />{' '}
            <span className='text-[#263238]'>BridalHairbyTrish</span>
          </a>
          <ul className='md:flex space-x-12 hidden'>
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                className='block text-base text-gray900 hover:text-brandPrimary first:font-medium'
                key={path}
              >
                {link}
              </Link>
            ))}
          </ul>
        </div>
        {/* btn for large devices */}
        <div className='space-x-12 hidden lg:flex items-center'>
          <a
            href='/'
            className='hidden lg:flex items-center text-brandPrimary
hover:text-gray900'
          >
            Login
          </a>
          <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralGrey'>
            Sign up
          </button>
        </div>
      </nav>
      ;
    </header>
  );
};

export default Navbar;
