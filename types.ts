import React from 'react';

export interface Project {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  demoLink?: string;
  videoEmbedUrl?: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
}
