import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from 'flowbite-react';

const Foot = () => {
  return (
    <Footer container className='bg-secondaryColor'>
      <div className='w-full text-center'>
        <div className='w-full justify-between sm:flex sm:items-center sm:justify-between'>
          <span className='self-center whitespace-nowrap text-xl lg:text-2xl font-fontSacra font-semibold dark:text-white'>
            <span className='text-tertiaryColor'>Bridal</span>
            <span className='text-primaryColor'>Hair</span>{' '}
            <span className='text-primaryColor'>by</span>
            <span className='text-tertiaryColor'>Trish</span>
          </span>
          <Footer.LinkGroup className='flex justify-between mt-5 lg:mt-0'>
            <Link className='text-primaryColorLight ml-5' to='/'>
              Home
            </Link>
            <Link to='/contact' className='text-primaryColorLight ml-5'>
              Contact
            </Link>
            <Link to='/about' className='text-primaryColorLight ml-5'>
              About
            </Link>
            <Link to='/booking' className='text-primaryColorLight ml-5'>
              Booking
            </Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright
          className='text-primaryColorLight'
          href='#'
          by='BridalHairByTrish'
          year={new Date().getFullYear()}
        />
      </div>
    </Footer>
  );
};

export default Foot;
