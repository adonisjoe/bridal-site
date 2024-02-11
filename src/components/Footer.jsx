import React from 'react';

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
          <Footer.LinkGroup>
            <Footer.Link className='text-primaryColorLight' href='#'>
              About
            </Footer.Link>
            <Footer.Link className='text-primaryColorLight' href='#'>
              Booking
            </Footer.Link>
            <Footer.Link className='text-primaryColorLight' href='#'>
              Contact
            </Footer.Link>
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
