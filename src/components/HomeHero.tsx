import React from 'react';
import { ILLUSTRATION, NAME, ROLES, EMAIL } from '../data/constants';
import Typewriter from './Typewriter';
import StatsCounter from './StatsCounter';
import SectionReveal from './SectionReveal';

const HomeHero: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center text-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <SectionReveal animation="fade-left" delay={0}>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Hi, I'm <span className="text-[#c770f0]">{NAME}</span>
                        </h1>
                        <div className="text-2xl md:text-3xl text-gray-300 mb-8">
                            <Typewriter strings={ROLES} />
                        </div>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            Creating stunning visual effects and bringing imagination to life through cutting-edge technology.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#projects"
                                className="bg-[#c770f0] hover:bg-[#8a53ba] px-8 py-3 rounded-lg font-semibold transition-colors"
                            >
                                View My Work
                            </a>
                            <a
                                href={`mailto:${EMAIL}`}
                                className="border border-[#c770f0] text-[#c770f0] hover:bg-[#c770f0] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                            >
                                Contact Me
                            </a>
                        </div>
                    </SectionReveal>

                    <SectionReveal animation="fade-right" delay={200}>
                        <div className="flex justify-center">
                            <img
                                src={ILLUSTRATION}
                                alt="Hero illustration"
                                className="max-w-full h-auto rounded-lg"
                                loading="lazy"
                            />
                        </div>
                    </SectionReveal>
                </div>

                <SectionReveal animation="fade-up" delay={400}>
                    <StatsCounter />
                </SectionReveal>
            </div>
        </div>
    );
};

export default HomeHero;
