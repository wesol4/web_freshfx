import React from 'react';
import { ABOUT_IMAGE, ABOUT_TEXT, EMAIL, PHONE} from '../data/constants';
import { SKILLS } from '../data/skills';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { formatPhone } from '../utils/formatPhone';

const AboutDetails: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={ABOUT_IMAGE} 
              alt="About me" 
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {ABOUT_TEXT}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-400" />
                <a 
                  href={`mailto:${EMAIL}`}
                  className="text-blue-400 hover:underline"
                >
                  {EMAIL}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaPhone className="text-blue-400" />
                <a
                  href={`tel:${formatPhone(PHONE)}`}
                  className="text-blue-400 hover:underline"
                >
                  {PHONE}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;