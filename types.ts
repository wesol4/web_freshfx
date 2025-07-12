
import React from 'react';

export interface Project {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  demoLink?: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
}
