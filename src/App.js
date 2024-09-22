import React from 'react';
import code from './assets/image (2).png';
import {Routes,Route} from "react-router-dom";
import AdditionalSections from './components/AdditionalSections';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Navbar from './components/navbar';






const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
      </Routes>
      
     
    </div>
  );
};

export default App;
