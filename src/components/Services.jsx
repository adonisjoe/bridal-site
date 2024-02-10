import React from 'react';
import { Card } from 'flowbite-react';
import keratinImg from '../assets/imgs/braid-6.jpg';
import haircutImg from '../assets/imgs/haircut.jpg';

const Services = () => {
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
      <div className='text-center my-8'>
        <p className='text-neutralGrey'></p>
      </div>
      <div className='flex flex-col md:flex-row items-center md:items-start gap-20'>
        <Card className=' shadow-none border-none'>
          <h5 className='text-5xl font-bold tracking-tight text-neutralGrey dark:text-white'>
            Our Bridal Services
          </h5>
          <p className='font-normal text-neutralGrey dark:text-gray-400 mb-5'>
            Our variety of services to your need
          </p>

          <button className='btn-primary max-w-fit'>Read More</button>
        </Card>

        <Card className='max-w-sm card-no-sha'>
          <div className='overflow-hidden h-[15rem] shadow-none'>
            <img
              alt='Calligraphy Cuts service'
              src={haircutImg}
              className='card-image -mt-20'
            />
          </div>
          <span>
            <h5 className='text-xl font-semibold tracking-tight text-neutralGrey'>
              Haircuts/ Calligraphy Cuts
            </h5>
          </span>
          <div className='mb-5 mt-2.5 flex items-center'>
            <span className=' rounded py-0.5 text-sm font-medium text-neutralGreyLight'>
              At the heart of our Calligraphy Cuts service lies precision and
              artistry. Inspired by the elegance and fluidity of calligraphy
              strokes.
            </span>
          </div>
          <div className='flex items-center justify-between'>
            <a href='#' className='btn-primary'>
              Read More
            </a>
          </div>
        </Card>
        <Card className='max-w-sm'>
          <div className='overflow-hidden h-[15rem]'>
            <img
              alt='keratin service'
              src={keratinImg}
              className='card-image '
            />
          </div>
          <span>
            <h5 className='text-xl font-semibold tracking-tight text-neutralGrey'>
              Keratin Treatments
            </h5>
          </span>
          <div className='mb-5 mt-2.5 flex items-center'>
            <span className=' rounded py-0.5 text-sm font-medium text-neutralGreyLight'>
              Transform your hair with our Keratin Treatments, infused with
              nourishing proteins to smooth frizz, and restore vitality. Say
              goodbye to unruly locks and hello to sleek, manageable hair that
              radiates health and beauty.
            </span>
          </div>
          <div className='flex items-center justify-between'>
            <a href='#' className='btn-primary'>
              Read More
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Services;
