import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import hero from '../assets/imgs/braid-9.png';
import hero1 from '../assets/imgs/braid-4.png';
import hero2 from '../assets/imgs/braid-2.png';
import hero3 from '../assets/imgs/braid-7.jpg';
import hero4 from '../assets/imgs/braid-6.jpg';
import hero5 from '../assets/imgs/braid-10.jpg';

const Home = () => {
  const [text] = useTypewriter({
    words: ['Bridal. Braids. Guide'],
    loop: {},
  });

  return (
    <div className=''>
      <h1 className='mt-8 mb-8 text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-fontScript'>
        {text}

        <Cursor />
      </h1>

      <div className='grid grid-cols-2  md:grid-cols-2  md:gap-4 lg:grid-cols-4 gap-4'>
        <div className='bg-gray-200 w-fit p-4 flex items-center justify-center'>
          <img src={hero4} alt='Image 3' className='max-w-full h-auto ' />
        </div>

        <div className='bg-gray-200 p-4 flex items-center justify-center'>
          <img src={hero1} alt='Image 3' className='max-w-full h-auto' />
        </div>

        <div className='bg-gray-200  p-4 flex items-center justify-center'>
          <img src={hero3} alt='Image 3' className='max-w-full w-fit h-auto' />
        </div>

        <div className='bg-gray-200 p-4 flex items-center justify-center'>
          <img src={hero2} alt='Image 3' className='max-w-full h-auto' />
        </div>
      </div>
    </div>
  );
};

export default Home;
