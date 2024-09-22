import React from 'react';
import code from '../assets/image (2).png';
import Hero from '../components/HeroSection';
import Stats from '../components/StatsSection';
import AdditionalSections from '../components/AdditionalSections';
//import CodeSnippet from '../components/CodeSnippet';

const Home = () => {
    return (
      <div className="bg-gray-900 min-h-screen text-white">
       
        
        <main className="container mx-auto px-4">
          <Hero />
          <Stats />
          
          <AdditionalSections />
        </main>
       
      </div>
    );
  };
  
  export default Home;
  