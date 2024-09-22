import React from 'react';
import code from '../assets/image (2).png';

const Hero = () => (
  <section className="text-white text-center py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
    <h2 className="text-xs sm:text-sm uppercase mb-2 sm:mb-4">Protecting Code, Preserving Innovation</h2>
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
      Revolutionizing <br className="hidden sm:inline" />
       Software Security with<br className="hidden sm:inline" />
      <span className="text-cyan-400"> Dynamic</span> Mutation
    </h1>
    <p className="text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto">Introducing the Polymorphic Code Engine - A New Era in Protecting Your Software.</p>
    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
      <button className="w-full sm:w-auto px-6 py-3 bg-cyan-400 text-black rounded-full text-sm sm:text-base">Learn More</button>
      <button className="w-full sm:w-auto px-6 py-3 bg-transparent border border-white text-white rounded-full text-sm sm:text-base">Start Now</button>
    </div>
  </section>
);

export default Hero;