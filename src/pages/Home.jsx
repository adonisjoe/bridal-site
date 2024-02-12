import React from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero.jsx';
import Services from '../components/Services';
import Faq from '../components/Faq';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
