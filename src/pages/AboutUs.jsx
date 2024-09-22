import React from 'react';

const AboutSection = () => {
  return (
    <div className="bg-grey-900 text-white min-h-screen p-4 md:p-8">
      {/* Our Mission */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-300 mb-4">To revolutionize cybersecurity through innovative AI-driven solutions, ensuring a safer digital world for all.</p>
        <div className="bg-gradient-to-r from-purple-800 to-blue-600 p-6 rounded-lg">
          <p className="text-sm md:text-base">
            We are committed to developing cutting-edge technologies that protect individuals and organizations from evolving cyber threats, fostering trust and resilience in our increasingly connected world.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="mb-16 text-white mt-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
        <div className="flex flex-col items-center justify-center md:grid-cols-2 gap-8">
          <div className="mb-8 md:mb-0 flex">
            <img src="" alt="Cybersecurity concept" className="w-full h-auto rounded-lg mb-4" />
            <p className="text-sm md:text-base text-gray-300">
              We are a team of dedicated cybersecurity experts, data scientists, and software engineers passionate about creating a safer digital environment. With decades of combined experience in the field, we bring a wealth of knowledge and innovative thinking to every solution we develop.
            </p>
          </div>
          <div className="mb-8 md:mb-0 flex">
            <img src="/api/placeholder/400/300" alt="Team working" className="w-full h-auto rounded-lg mb-4" />
            <p className="text-sm md:text-base text-gray-300">
              Our diverse team combines expertise in artificial intelligence, machine learning, and cybersecurity to create robust, adaptive security solutions. We believe in the power of collaboration and continuous learning to stay ahead of emerging threats and provide unparalleled protection for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-900 to-indigo-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">AI-Powered Threat Detection</h3>
            <p className="text-sm md:text-base">
              Our advanced AI algorithms analyze patterns and behaviors to identify and neutralize threats in real-time, providing proactive protection against known and unknown cyber attacks.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-900 to-purple-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Secure Cloud Solutions</h3>
            <p className="text-sm md:text-base">
              We design and implement robust cloud security architectures that safeguard your data and applications, ensuring compliance with industry standards and regulations while enabling seamless scalability.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;