import React from 'react';
import { Card, Carousel } from 'flowbite-react';
import keratinImg from '../assets/imgs/braid-6.jpg';
import haircutImg from '../assets/imgs/haircut.jpg';
import hero5 from '../assets/imgs/braid-10.jpg';

const Services = () => {
  return (
    <div className='md:px-14 px-4 py-16 md:py-10 max-w-screen-2xl mx-auto bg-primaryColor'>
      <div className=' flex flex-col lg:flex-row justify-center text-center md:items-center gap-4 lg:gap-10'>
        <div className='flex items-center flex-col mx-auto justify-between w-52 h-52 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-64 lg:h-64 rounded-full overflow-hidden'>
          <img
            src={hero5}
            alt='About Photo'
            className='w-full h-full object-cover'
          />
        </div>
        <Card className='shadow-none border-none lg:w-[70%] text-center lg:text-left'>
          <h5 className='text-5xl font-bold tracking-tight font-fontScript text-neutralGrey text-center lg:text-left dark:text-white'>
            About Us
          </h5>
          <p className=' leading-normal  font-[300] text-neutralGrey font-fontSans dark:text-gray-400 mb-5 sm:text-sm md:text-base lg:text-lg xl:text-xl '>
            I am 28 years old and I am a Bridal Hair Expert! I was born and
            raised on Long Island. I have an amazing and supportive fiancé, 3
            amazing brothers and a great Mom and Dad. When I create hairstyles I
            think of hair as a blank canvas and I am just creating a piece of
            artwork on their head lol! I love making hairstyles unique to each
            individual person since everyone is so different in their own way.
            The fact that I can express creativity with just little touches or
            additions to the hair using hairpieces or unique hair techniques
            excites me! I get super bored when I am repetitive in life and with
            creating
          </p>

          <div className='flex justify-center lg:justify-start'>
            <button className='btn-primary max-w-fit'>See Works</button>
          </div>
        </Card>
        {/* </div>
      <div> */}
        {/* <div className='grid  grid-cols-2 gap-10 items-start'>
          <div className=' md:flex lg:flex-col md:flex-row lg:flex-wrap lg:items-center md:items-start lg:gap-20'>
            <div className='w-32 h-32 rounded-full overflow-hidden'></div>
            <Card className=' shadow-none border-none'>
              <h5 className='text-5xl md:text-2xl font-bold tracking-tight text-neutralGrey dark:text-white'>
                Our Bridal Services
              </h5>
              <p className='font-normal text-neutralGrey dark:text-gray-400 mb-5'>
                Our variety of services to your need
              </p>

              <button className='btn-primary max-w-fit'>Read More</button>
            </Card>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Services;
