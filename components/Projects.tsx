
import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-4">
          My Recent <strong className="text-[#c770f0]">Works</strong>
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Here are a few projects I've worked on recently.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
