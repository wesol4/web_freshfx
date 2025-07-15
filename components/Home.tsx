import React from 'react';
import {ILLUSTRATION, NAME, ROLES} from '../constants';
import Typewriter from './Typewriter';
   import SiSynthEyes from '@/assets/icons/SiSynthEyes';

const Home: React.FC = () => {
    return (
        <section className="min-h-[calc(100vh-5rem)] flex items-center">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 items-center gap-12">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Hi There! <span className="animate-wave inline-block">👋🏻</span>
                        </h1>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-2">
                            I'm <strong className="text-[#c770f0]">{NAME}</strong>
                        </h1>
                        <div className="mt-6 text-2xl md:text-3xl font-semibold text-gray-300 h-10">
                            <Typewriter strings={ROLES} />
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src={ILLUSTRATION}
                            alt="Illustration"
                            className="max-w-full md:max-w-md lg:max-w-lg rounded-lg"
                        />
                    </div>
                </div>
            </div>
            <style>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          20%, 60% { transform: rotate(-25deg); }
          40%, 80% { transform: rotate(10deg); }
        }
        .animate-wave {
          animation: wave 2.5s infinite;
          transform-origin: 70% 70%;
        }
      `}</style>
        </section>
    );
};

export default Home;