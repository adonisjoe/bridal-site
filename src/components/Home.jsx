import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import hero from '../assets/imgs/braid-9.png';
import hero1 from '../assets/imgs/braid-5.jpg';
import hero2 from '../assets/imgs/braid-1.jpg';
import hero3 from '../assets/imgs/braid-8.jpg';
import hero4 from '../assets/imgs/braid-6.jpg';
import hero5 from '../assets/imgs/braid-10.jpg';

const Home = () => {
  const [text] = useTypewriter({
    words: ['Bridal. Braids. Guide'],
    loop: {},
  });

  return (
    <div className='bg-primaryColor'>
      <h1 className='pt-8 pb-8 text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-fontScript text-secondaryColor'>
        {text}

        <span className='text-tertiaryColor'>
          <Cursor />
        </span>
      </h1>

      <div className='grid grid-cols-2 p-5  md:grid-cols-2  md:gap-4 lg:grid-cols-4 gap-4'>
        <div className='bg-colorFrame w-fit p-4 flex items-center justify-center'>
          <img
            src={hero4}
            alt='Image 3'
            className='rounded-2xl max-w-full h-auto '
          />
        </div>

        <div className='bg-colorFrame p-4 flex items-center justify-center'>
          <img
            src={hero1}
            alt='Image 3'
            className='rounded-2xl max-w-full h-auto'
          />
        </div>

        <div className='bg-colorFrame  p-4 flex items-center justify-center'>
          <img
            src={hero3}
            alt='Image 3'
            className='rounded-2xl max-w-full w-fit h-auto'
          />
        </div>

        <div className='bg-colorFrame p-4 flex items-center justify-center'>
          <img
            src={hero2}
            alt='Image 3'
            className='rounded-2xl max-w-full h-auto'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
