import React from 'react';
import { Shield, Lock, Zap } from 'lucide-react';
import lock from '../assets/lock.png';

const InfoSection = ({ title, description, buttonText, reversed = false }) => (
  <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16 mb-10 justify-between my-8 md:my-16 px-4 md:px-8 lg:px-16`}>
    <div className="w-full md:w-1/2 mb-8 md:mb-0">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-300 mb-6">{description}</p>
      <button className="w-full md:w-auto bg-cyan-400 text-black px-6 py-2 rounded-full hover:bg-cyan-300 transition duration-300">
        {buttonText}
      </button>
    </div>
    <div className="w-full md:w-1/2">
      <img src={lock} alt={title} className="rounded-lg shadow-lg w-full h-auto max-h-[200px] object-cover" />
    </div>
  </div>
);

const FeatureItem = ({ icon, title, description }) => (
  <div className="flex items-start mb-6">
    {icon}
    <div className="ml-4">
      <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm md:text-base">{description}</p>
    </div>
  </div>
);

const FeaturesSection = () => (
  <div className="my-8 md:my-16 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center bg-gradient-to-r rounded-lg">
    <div className="w-full md:w-1/2 mb-8 md:mb-0">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
        You Innovate, <span className="text-cyan-400">We Secure.</span>
      </h2>
      <h3 className="text-base md:text-lg text-gray-300 mb-6">
        With MutaEngine, you can focus on creating cutting-edge software while 
        we ensure it stays protected from threats. Our advanced technology 
        keeps your intellectual property safe, allowing you to concentrate on 
        what you do best.
      </h3>
      <button className="w-full md:w-auto bg-cyan-400 text-black px-6 py-2 rounded-full hover:bg-cyan-300 transition duration-300">
        Get Started
      </button>
    </div>
    <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8">
      <FeatureItem
        icon={<Shield className="text-cyan-400" size={24} />}
        title="Polymorphic Code"
        description="MutaEngine constantly mutates your software's code in real-time, making it nearly impossible for hackers to decompile or reverse-engineer."
      />
      <FeatureItem
        icon={<Lock className="text-cyan-400" size={24} />}
        title="360° Security"
        description="Our multi-layered defense mechanisms ensure that every part of your software is protected, from code to data to user transactions."
      />
      <FeatureItem
        icon={<Zap className="text-cyan-400" size={24} />}
        title="Web3 Integration"
        description="Fully compatible with decentralized applications, MutaEngine provides robust security for your blockchain projects."
      />
    </div>
  </div>
);

const CallToAction = () => (
  <div className="bg-gray-700 rounded-lg p-6 md:p-12 w-full md:max-w-3xl mx-auto text-center flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-center">
    <div className='flex flex-col items-start'>
      <h2 className="text-xl md:text-2xl font-bold mb-4">Ready to <span className="text-cyan-400">Secure</span> Your Software?</h2>
      <p className="text-gray-300 mb-6 text-left">
        Get started with MutaEngine today and protect your software with the most advanced security technology available.
      </p>
    </div>
    <button className="bg-cyan-400 text-black px-6 py-2 rounded-full hover:bg-cyan-300 transition duration-300 w-full md:w-auto">
      Start Now
    </button>
  </div>
);

const Footer = () => (
  <footer className="border-t border-gray-800 pt-8 mt-16 px-4 md:px-8">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="text-2xl font-bold mb-4 md:mb-0">MUTA</div>
      <nav className="flex flex-wrap justify-center md:justify-end">
        {['Solutions', 'About Us', 'Contact', 'Careers', 'Privacy Policy', 'Terms of Use'].map((item) => (
          <a key={item} href="#" className="text-gray-300 hover:text-white mr-4 mb-2 text-sm md:text-base">
            {item}
          </a>
        ))}
      </nav>
    </div>
  </footer>
);

const AdditionalSections = () => (
  <>
    <InfoSection
      title="What is the Polymorphic Code Engine?"
      description="Polymorphic code engine dynamically mutates the software's code structure, providing robust protection against reverse engineering and tampering attempts."
      buttonText="Learn More"
    />
    <InfoSection
      title="How It Works?"
      description="By constantly changing the software code during runtime or execution, the Polymorphic Code Engine creates a moving target, making it extremely difficult for hackers to understand or manipulate your software."
      buttonText="Learn More"
      reversed
    />
    <FeaturesSection />
    <CallToAction />
    <Footer />
  </>
);

export default AdditionalSections;