import React from 'react';
import {ILLUSTRATION, NAME, ROLES} from '../data/constants';
import Typewriter from './Typewriter.tsx';

const HomeHero: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Hi, I'm <span className="text-blue-400">{NAME}</span>
                        </h1>
                        <div className="text-2xl md:text-3xl text-gray-300 mb-8">
                            <Typewriter strings={ROLES} />
                        </div>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            Creating stunning visual effects and bringing imagination to life through cutting-edge technology.
                        </p>
                        <div className="flex space-x-4">
                            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                                View My Work
                            </button>
                            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                                Contact Me
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img 
                            src={ILLUSTRATION} 
                            alt="Hero illustration" 
                            className="max-w-full h-auto rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;