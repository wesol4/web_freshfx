import React from 'react';

const Resume: React.FC = () => {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">
          My <strong className="text-[#c770f0]">Resume</strong>
        </h2>
        <a
          href="/resume.pdf" // Placeholder link
          download="JanKowalski-Resume.pdf"
          className="inline-flex items-center px-8 py-3 bg-[#c770f0] text-white rounded-lg font-bold text-lg hover:bg-opacity-90 transform hover:scale-105 transition-transform duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Resume;
