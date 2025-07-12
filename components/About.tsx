
import React from 'react';
import { ABOUT_TEXT, SKILLS, ABOUT_IMAGE } from '../constants';

const About: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Let Me <strong className="text-[#c770f0]">Introduce</strong> Myself
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">{ABOUT_TEXT}</p>
          </div>
          <div className="flex justify-center">
            <img 
              src={ABOUT_IMAGE} 
              alt="About me" 
              className="rounded-lg shadow-2xl shadow-[#c770f0]/20"
            />
          </div>
        </div>
        
        <div className="mt-24 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Professional <strong className="text-[#c770f0]">Skillset</strong>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {SKILLS.map((skill, index) => (
              <div
                key={index}
                className="w-36 h-36 flex flex-col items-center justify-center bg-gray-800/50 rounded-lg border border-gray-700 hover:border-[#c770f0] hover:scale-105 hover:shadow-lg hover:shadow-[#c770f0]/20 transition-all duration-300 cursor-pointer"
              >
                <div className="text-[#c770f0] mb-2">{skill.icon}</div>
                <p className="text-sm font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
