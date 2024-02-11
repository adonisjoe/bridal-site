'use client';
import { Accordion } from 'flowbite-react';
import hero11 from '../assets/imgs/braid-11.jpg';

const Faq = () => {
  return (
    <div className='flex flex-col-reverse items-center lg:px-20 py-10 lg:flex-row justify-center md:items-center gap-4 lg:gap-10 bg-primaryColor'>
      <div className='w-full md:w-1/1 my-10 bg-primaryColorLight p-10'>
        <h5 className='text-5xl text-center lg:text-left mb-10  font-bold tracking-tight font-fontScript text-neutralGrey dark:text-white text-tertiaryColor'>
          FAQ
        </h5>
        <Accordion collapseAll className='w-full '>
          <Accordion.Panel>
            <Accordion.Title className='font-fontSans font-bold'>
              IS TRISH A PROFESSIONALLY LICENSED STYLIST?
            </Accordion.Title>
            <Accordion.Content>
              <p className='mb-2 text-gray-500 dark:text-gray-400 font-fontSans font-[400] text-sm leading-7'>
                Yes! Trish is licensed in the state of New York. Before opening
                Trish Glazer Bridal and becoming a full time bridal specialist,
                Trish was behind the chair in the salon from 2012 - 2020.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className='font-fontSans font-bold'>
              WHEN SHOULD I RESERVE MY WEDDING DATE?
            </Accordion.Title>
            <Accordion.Content>
              <p className='mb-2 text-gray-500 dark:text-gray-400 font-fontSans font-[400] text-sm leading-7'>
                Wedding dates during the peak season months of April-November
                can fully book up 12-24 months in advance. Weddings are booked
                on a first come, first served basis and a deposit is required to
                reserve the date.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className='font-fontSans font-bold'>
              DO YOU REQUIRE A SERVICE MINIMUM?
            </Accordion.Title>
            <Accordion.Content className='font-fontSans'>
              <p className='mb-2 text-gray-500 dark:text-gray-400 font-fontSans font-[400] text-sm leading-7'>
                Wedding day bookings must meet a 5 service minimum or minimum
                met.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className='font-fontSans font-bold'>
              DO YOU COME TO ME OR DO I COME TO YOU?
            </Accordion.Title>
            <Accordion.Content className='font-fontSans'>
              <p className='mb-2 text-gray-500 dark:text-gray-400 font-fontSans font-[400] text-sm leading-7'>
                All wedding day services will take place at the location of the
                brides choosing. Bridal trials and lessons will be held at
                Trish’s suite located in Bayshore, New York. Salon classes will
                take place in a host salon.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
      <div className='bd-red-700 w-[70%] h-full flex justify-center '>
        <div className='flex items-center justify-center flex-col w-52 h-52 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-64 lg:h-64 rounded-full overflow-hidden'>
          <img
            src={hero11}
            alt='About Photo'
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
