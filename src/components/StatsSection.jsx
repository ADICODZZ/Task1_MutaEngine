import React from 'react';
import code from '../assets/image (2).png';

const Stats = () => (
  <section className="text-white text-center py-16 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div>
          <h2 className="text-4xl font-bold">5000+</h2>
          <p className="mr-4 text-[#3ED5DD]">Active Users</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">300+</h2>
          <p className="text-[#3ED5DD]">Companies Trusting MUTA Engine</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">$500M+</h2>
          <p className="text-[#3ED5DD]">Transaction Secured</p>
        </div>
      </div>

      <div className="mt-10 ">
    <img className="p-6 rounded-lg mx-auto h-[600px]" src={code} alt="Code Snippet" />
  </div>
    </section>

    
);

export default Stats;

// const CodeSnippet = () => (
//   <div className=" ">
//     <img className="p-6 rounded-lg mx-auto h-[600px]" src={code} alt="Code Snippet" />
//   </div>
// );
