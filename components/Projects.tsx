import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const demo = PROJECTS[0];
  return (
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl"> {/* Zmienione na max szerokość */}
          <h2 className="text-center text-5xl font-extrabold mb-8">
            {demo.title}
          </h2>
          <div className="mb-8 text-center text-gray-300 text-lg">
            {demo.description}
          </div>
          {/* Wydzielony ProjectCard, styl na szerokość i większy rozmiar */}
          <ProjectCard project={demo} big />
        </div>
      </section>
  );
};

export default Projects;