import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
    project: Project;
    big?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, big }) => (
    <div className={`bg-[#1b1a2ea8] rounded-lg overflow-hidden shadow-lg shadow-black/30 transition-all duration-300 flex flex-col
    ${big ? "w-full mx-auto" : ""}`}>
        {project.videoEmbedUrl ? (
            <div className={big ? "w-full aspect-video relative" : "w-full h-48 relative"}>
                <iframe
                    src={project.videoEmbedUrl}
                    className="w-full h-full absolute top-0 left-0 rounded-t-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={project.title}
                />
            </div>
        ) : (
            <img src={project.image} alt={project.title} className={big ? "w-full aspect-video object-cover" : "w-full h-48 object-cover"} />
        )}
        <div className="p-8 flex-grow flex flex-col items-center">
            {/* Dla dużej karty wyrzuć tytuł do góry, tutaj zostaw tylko ewentualne linki */}
            {project.demoLink && (
                <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex items-center justify-center px-6 py-3 bg-[#c770f0] text-white rounded-md font-semibold text-lg hover:bg-[#8a53ba] transition-colors duration-300"
                >
                    Zobacz online
                </a>
            )}
        </div>
    </div>
);

export default ProjectCard;