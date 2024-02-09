import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaXmark, FaBars } from 'react-icons/fa6';
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
      <nav
        className={`py-4 lg:px-14 ${
          isSticky
            ? 'sticky top-0 left-0 right-0 border-b bg-white duration-300'
            : ''
        }`}
      >
        <div className='flex justify-between items-center text-base gap-8'>
          <a
            href=''
            className='text-2xl font-semibold flex items-center space-x-3'
          >
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
          {/* btn for large devices */}
          <div className='space-x-12 hidden lg:flex items-center'>
            <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralGrey'>
              Book Us
            </button>
          </div>

          {/* menu btn for mobile devices */}
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='text-neutralGrey focus:outline-none focus:text-gray-500'
            >
              {isMenuOpen ? (
                <FaXmark className='h-6 w-6' />
              ) : (
                <FaBars className='h-6 w-6 ' />
              )}
            </button>
          </div>
        </div>
        <div
          className={`space-y-4 px-4 py-7 mt-16 bg-brandPrimary ${
            isMenuOpen ? 'block fixed top-0 left-0 right-0' : 'hidden'
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              className='block text-base hover:underline text-white first:font-medium'
              key={path}
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
