import React from 'react';
import { Carousel } from 'flowbite-react';
import hero from '../assets/imgs/braid-9.png';
import hero1 from '../assets/imgs/braid-4.png';
import hero2 from '../assets/imgs/braid-2.png';

const Home = () => {
  return (
    <div className='bg-neutralSilver'>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen '>
        <Carousel className='w-full mx-auto'>
          <div className='my-28 px-40 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 bg-secondaryColor'>
            <div>
              <img src={hero1} style={{ width: '20rem' }} alt='hero image' />
            </div>
            <div className='md:w-1/2'>
              <h1 className='text-6xl font-semibold mb-4 text-neutralGrey md:w-3/4 leading-snug'>
                Embrace{' '}
                <span className='text-brandPrimary leading-snug'>
                  Elegance.
                </span>
              </h1>
              <p className='text-neutralGrey text-base mb-8'>
                Your Bridal Bliss Awaits
              </p>
              <button className='btn-primary'>Book Us</button>
            </div>
          </div>
          <div className='my-28 px-40 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 bg-secondaryColor'>
            <div>
              <img src={hero} style={{ width: '20rem' }} alt='hero image' />
            </div>
            <div className='md:w-1/2'>
              <h1 className='text-6xl font-semibold mb-4 text-neutralGrey md:w-3/4 leading-snug'>
                Where{' '}
                <span className='text-brandPrimary leading-snug'> Dreams</span>{' '}
                Take Shape.
              </h1>
              <p className='text-neutralGrey text-base mb-8'>
                Begin Your Bridal Story Today
              </p>
              <button className='btn-primary'>Book Us</button>
            </div>
          </div>
          <div className='my-28 px-40 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 bg-secondaryColor'>
            <div>
              <img src={hero2} style={{ width: '20rem' }} alt='hero image' />
            </div>
            <div className='md:w-1/2'>
              <h1 className='text-6xl font-semibold mb-4 text-neutralGrey md:w-3/4 leading-snug'>
                Eternal{' '}
                <span className='text-brandPrimary leading-snug'>Love</span>{' '}
                Begins Here.
              </h1>
              <p className='text-neutralGrey text-base mb-8'>
                Find Your Perfect Bridal Ensemble
              </p>
              <button className='btn-primary'>Book Us</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
