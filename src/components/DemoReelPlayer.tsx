import React from 'react';
import { PROJECTS } from '../data/projects';
import ProjectCard from './ProjectCard';
import SectionReveal from './SectionReveal';

const DemoReelPlayer: React.FC = () => {
  const demo = PROJECTS[0];
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionReveal animation="fade-up">
          <h2 className="text-center text-5xl font-extrabold mb-8">
            {demo.title}
          </h2>
          <div className="mb-8 text-center text-gray-300 text-lg">
            {demo.description}
          </div>
          <ProjectCard project={demo} big />
        </SectionReveal>
      </div>
    </section>
  );
};

export default DemoReelPlayer;