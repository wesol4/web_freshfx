
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-[#1b1a2ea8] rounded-lg overflow-hidden shadow-lg shadow-black/30 transform hover:-translate-y-2 transition-all duration-300 flex flex-col">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-[#c770f0] mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm flex-grow">{project.description}</p>
        <div className="mt-6 flex space-x-4">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 bg-transparent border border-[#c770f0] text-[#c770f0] rounded-md font-semibold hover:bg-[#c770f0] hover:text-white transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            GitHub
          </a>
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 bg-transparent border border-[#c770f0] text-[#c770f0] rounded-md font-semibold hover:bg-[#c770f0] hover:text-white transition-colors duration-300"
            >
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
