import React, { useState } from 'react';
import { Project } from '../types';

interface ProjectCardProps {
    project: Project;
    big?: boolean;
}

const PlayIcon: React.FC = () => (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="40" cy="40" r="40" fill="rgba(0,0,0,0.55)" />
        <circle cx="40" cy="40" r="38" stroke="white" strokeOpacity="0.25" strokeWidth="1" />
        <polygon points="32,24 60,40 32,56" fill="white" />
    </svg>
);

const VideoFacade: React.FC<{ project: Project; big?: boolean }> = ({ project, big }) => {
    const [playing, setPlaying] = useState(false);
    const sizeClass = big ? "w-full aspect-video" : "w-full h-48";

    if (playing) {
        return (
            <div className={`${sizeClass} relative`}>
                <iframe
                    src={`${project.videoEmbedUrl}?autoplay=1`}
                    className="w-full h-full absolute top-0 left-0 rounded-t-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={project.title}
                />
            </div>
        );
    }

    return (
        <div
            className={`${sizeClass} relative cursor-pointer group`}
            onClick={() => setPlaying(true)}
            role="button"
            aria-label={`Play ${project.title}`}
        >
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-t-lg"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 rounded-t-lg" />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                    <PlayIcon />
                </div>
            </div>
        </div>
    );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, big }) => (
    <div className={`bg-[#1b1a2ea8] rounded-lg overflow-hidden shadow-lg shadow-black/30 transition-all duration-300 flex flex-col
    ${big ? "w-full mx-auto" : ""}`}>
        {project.videoEmbedUrl ? (
            <VideoFacade project={project} big={big} />
        ) : (
            <>
                <img
                    src={project.image}
                    alt={project.title}
                    className={big ? "w-full aspect-video object-cover" : "w-full h-48 object-cover"}
                    loading="lazy"
                />
                {project.demoLink && (
                    <div className="p-8 flex flex-col items-center">
                        <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center px-6 py-3 bg-[#c770f0] text-white rounded-md font-semibold text-lg hover:bg-[#8a53ba] transition-colors duration-300"
                        >
                            Launch Showreel
                        </a>
                    </div>
                )}
            </>
        )}
    </div>
);

export default ProjectCard;