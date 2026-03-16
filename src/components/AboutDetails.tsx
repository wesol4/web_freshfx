import React from 'react';
import { ABOUT_IMAGE, ABOUT_TEXT, EMAIL, PHONE } from '../data/constants';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { formatPhone } from '../utils/formatPhone';
import SectionReveal from './SectionReveal';

const AboutDetails: React.FC = () => {
  return (
    <div className="min-h-screen text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <SectionReveal animation="fade-left">
            <img
              src={ABOUT_IMAGE}
              alt="About me"
              className="rounded-lg w-full max-w-md mx-auto"
              loading="lazy"
            />
          </SectionReveal>

          <SectionReveal animation="fade-right" delay={150}>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {ABOUT_TEXT}
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-[#c770f0]" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-[#c770f0] hover:underline"
                >
                  {EMAIL}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <FaPhone className="text-[#c770f0]" />
                <a
                  href={`tel:${formatPhone(PHONE)}`}
                  className="text-[#c770f0] hover:underline"
                >
                  {PHONE}
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;